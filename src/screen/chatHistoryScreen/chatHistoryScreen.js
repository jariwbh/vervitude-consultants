import React, { useEffect, useState } from 'react';
import {
    View, Text, SafeAreaView, Dimensions, StyleSheet,
    ScrollView, TouchableOpacity, Image, FlatList, RefreshControl
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as SCREEN from '../../context/screen/screenName';
import ChatMenu from '../../components/ChatMenu/ChatMenu';
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;
import { AUTHUSER } from '../../context/actions/type';
import AsyncStorage from '@react-native-community/async-storage';
import { recentChatService } from '../../services/ChatService/ChatService';
import Loader from '../../components/loader/index';
import moment from 'moment';
const defaultProfile = 'https://res.cloudinary.com/dnogrvbs2/image/upload/v1613538969/profile1_xspwoy.png';
import { useFocusEffect } from '@react-navigation/native';

function chatHistoryScreen(props) {
    const [loading, setloading] = useState(false);
    const [refreshing, setrefreshing] = useState(false);
    const [currentUserId, setcurrentUserId] = useState(null);
    const [recentChat, setrecentChat] = useState([]);

    useFocusEffect(
        React.useCallback(() => {
            AsyncStorage.getItem(AUTHUSER).then((res) => {
                let currentUser = JSON.parse(res)._id;
                setloading(true);
                chatlist(currentUser);
                setcurrentUserId(currentUser);
            });
        }, [])
    );

    useEffect(() => { }, [refreshing, recentChat, loading, currentUserId]);

    const wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }

    const onRefresh = () => {
        let id = currentUserId;
        setrefreshing(true);
        chatlist(id);
        wait(3000).then(() => setrefreshing(false));
    }

    const chatlist = async (currentUser) => {
        try {
            const response = await recentChatService(currentUser);
            if (response.data != null && response.data != 'undefind' && response.status == 200) {
                setrecentChat(response.data);
                setloading(false);
            }
        }
        catch (error) {
            console.log(`error`, error);
        }
    }

    const navigationhandler = (item) => {
        props.navigation.navigate(SCREEN.RUBYCHATSCREEN, { item });
    }

    const renderChatUser = ({ item }) => (
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
            <TouchableOpacity onPress={() => navigationhandler(item)} style={styles.chatview}>
                <View style={{ justifyContent: 'flex-end', flexDirection: 'row', marginTop: 5 }}>
                    {/* <Text style={{ color: '#5AC8FA', marginLeft: 15, fontSize: 10 }}>New</Text> */}
                    <Text style={{ color: '#999999', fontSize: 12, marginRight: 15 }}>
                        {item.property && item.property.endat ? moment(item.property.endat).format('lll') : moment(item.property.startat).format('lll')}
                    </Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: -5 }}>
                    <Image source={{ uri: item && item.contextid && item.contextid.profilepic ? item.contextid.profilepic : defaultProfile }}
                        style={{ width: 70, height: 70, borderRadius: 100, marginLeft: 25 }} />
                    {item && item.contextid && item.contextid.property.live ?
                        <View style={{ marginLeft: -20, height: 15, width: 15, backgroundColor: '#5AC8FA', borderColor: '#5Ac8FA', borderRadius: 100, borderWidth: 1 }}></View>
                        : <View style={{ marginLeft: -20, height: 15, width: 15, backgroundColor: '#EEEEEE', borderColor: '#000000', borderRadius: 100, borderWidth: 1 }}></View>
                    }
                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginHorizontal: 30 }}>
                        <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 8 }}>
                            <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#000000', textTransform: 'capitalize' }}>{item && item.contextid && item.contextid.fullname.split(' ')[0]}</Text>
                            {item.property && item.property.totalcost ?
                                <Text style={{ fontSize: 14, color: '#04DE71', justifyContent: 'flex-start', alignItems: 'flex-start' }}>+ ₹ {(item.property.totalcost).toFixed(2)}</Text>
                                :
                                item.property.startat
                                    ?
                                    <Text style={{ fontSize: 14, color: '#04DE71', justifyContent: 'flex-start', alignItems: 'flex-start' }}>+ ₹
                                        {((item.property.consultantid.property.chargespermin) * (moment.utc(moment(moment(), "HH:mm:ss").diff(moment(item.property.startat, "HH:mm:ss"))).format("mm")) / 2)}
                                    </Text>
                                    :
                                    <Text style={{ fontSize: 14, color: '#555555' }}>+ ₹ 0.00</Text>
                            }
                        </View>
                    </View>
                </View>

                {/* <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: -60 }}>
                    <View style={{ marginRight: 25, width: 30, height: 30, marginTop: 20, alignItems: 'center', justifyContent: 'center', borderRadius: 100, backgroundColor: '#0F74C8' }}>
                        <Text style={{ color: '#FFFFFF' }}>5</Text>
                    </View>
                </View> */}

            </TouchableOpacity>
        </View>
    )

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 30 }}>
                <View style={{ justifyContent: 'flex-start' }}>
                    <TouchableOpacity style={styles.categoryIcon} onPress={() => { props.navigation.goBack(null) }} >
                        <AntDesign name='arrowleft' size={24} color='#5AC8FA' />
                    </TouchableOpacity>
                </View>

                <View style={{ justifyContent: 'flex-end', flexDirection: 'row' }}>
                    {/* <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 5 }}>
                        <Image source={require('../../assets/images/chat.png')} style={{ width: 45, height: 22 }} />
                        <Text style={{ fontSize: 12, color: '#5AC8FA', position: 'absolute' }}>20K</Text>
                    </View> */}
                    <ChatMenu />
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}
                nestedScrollEnabled={true}
                refreshControl={<RefreshControl refreshing={refreshing} title="Pull to refresh" tintColor="#5AC8FA" titleColor="#5AC8FA" colors={["#5AC8FA"]} onRefresh={() => onRefresh()} />}>

                {(recentChat == null) || (recentChat && recentChat.length == 0) ?
                    (loading ? null :
                        <Text style={{ textAlign: 'center', fontSize: 16, color: '#747474', marginTop: 50 }}>Recent chat not available</Text>
                    )
                    :
                    <FlatList
                        data={recentChat}
                        renderItem={renderChatUser}
                        keyExtractor={item => item._id}
                    />
                }
                <View style={{ marginBottom: 40 }}></View>
            </ScrollView>
            {loading ? <Loader /> : null}
        </SafeAreaView>
    )
}

export default chatHistoryScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE'
    },
    chatview: {
        width: WIDTH - 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        height: 100,
        shadowOpacity: 0.5,
        shadowRadius: 1,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 1,
    },
    categoryIcon: {
        marginLeft: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
})