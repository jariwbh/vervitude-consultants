import React, { useEffect, useState } from 'react';
import {
    View, Text, SafeAreaView, Dimensions, StyleSheet,
    ScrollView, TouchableOpacity, Image, FlatList
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as SCREEN from '../../context/screen/screenName';
import ChatMenu from '../../components/ChatMenu/ChatMenu';
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

import { AUTHUSER } from '../../context/actions/type';
import AsyncStorage from '@react-native-community/async-storage';
import { recentChatService } from '../../services/ChatService/ChatService';
const image = 'https://res.cloudinary.com/dnogrvbs2/image/upload/v1613538969/profile1_xspwoy.png';

function chatHistoryScreen(props) {
    const [recentChat, setrecentChat] = useState([])
    useEffect(() => {
        AsyncStorage.getItem(AUTHUSER).then((res) => {
            let currentUser = JSON.parse(res)._id;
            console.log(`currentUser`, currentUser);
            chatlist(currentUser);
        });
    }, [])

    const chatlist = async (currentUser) => {
        try {
            const response = await recentChatService(currentUser);
            if (response.data != null && response.data != 'undefind' && response.status == 200) {
                console.log(`response.data`, response.data);
                setrecentChat(response.data);
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
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 5 }}>
                    <Text style={{ color: '#5AC8FA', marginLeft: 15, fontSize: 10 }}>New</Text>
                    <Text style={{ color: '#999999', fontSize: 12, marginRight: 15 }}>2:30 PM</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: -5 }}>
                    <Image source={{ uri: item.profilepic ? item.profilepic : image }}
                        style={{ width: 70, height: 70, borderRadius: 100, marginLeft: 25 }} />
                    <View style={{ marginLeft: -20, height: 15, width: 15, backgroundColor: '#EEEEEE', borderColor: '#000000', borderRadius: 100, borderWidth: 1 }}></View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: -60 }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 0 }}>
                        <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#000000', textTransform: 'capitalize' }}>{item.contextid.fullname}</Text>
                        <Text style={{ fontSize: 14, color: '#04DE71' }}>+ ₹ 20.00</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: -60 }}>
                    <View style={{ marginRight: 25, width: 30, height: 30, marginTop: 20, alignItems: 'center', justifyContent: 'center', borderRadius: 100, backgroundColor: '#0F74C8' }}>
                        <Text style={{ color: '#FFFFFF' }}>5</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 30 }}>
                    <View style={{ justifyContent: 'flex-start' }}>
                        <TouchableOpacity style={styles.categoryIcon} onPress={() => { props.navigation.goBack(null) }} >
                            <AntDesign name='arrowleft' size={24} color='#5AC8FA' />
                        </TouchableOpacity>
                    </View>

                    <View style={{ justifyContent: 'flex-end', flexDirection: 'row' }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 0, marginRight: 5 }}>
                            <Image source={require('../../assets/images/chat.png')} style={{ width: 45, height: 22 }} />
                            <Text style={{ fontSize: 12, color: '#5AC8FA', position: 'absolute' }}>20K</Text>
                        </View>
                        <ChatMenu />
                    </View>
                </View>

                <FlatList
                    data={recentChat}
                    renderItem={renderChatUser}
                    keyExtractor={item => item._id}
                />
                <View style={{ marginBottom: 40 }}></View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default chatHistoryScreen

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
        shadowRadius: 3,
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