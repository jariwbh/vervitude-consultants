import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Image, FlatList, RefreshControl, StatusBar } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as STYLE from './styles';
import moment from 'moment';
import AsyncStorage from '@react-native-community/async-storage';
import { AUTHUSER } from '../../context/actions/type';
import { getByIdNotificationDeleteService, NotificationService, deleteAllNotificationService } from '../../services/NotificationService/NotificationService';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import GeneralStatusBarColor from '../../components/StatusBarStyle/GeneralStatusBarColor';
import crashlytics, { firebase } from "@react-native-firebase/crashlytics";

const notificationScreen = (props) => {
    const [loading, setloading] = useState(false);
    const [notification, setNotification] = useState(0);
    const [notificationList, setNotificationList] = useState([]);
    const [UserId, setUserID] = useState(null);
    const [refreshing, setrefreshing] = useState(false);

    useEffect(() => {
    }, [loading, notification, notificationList, UserId, refreshing]);

    useEffect(() => {
        setloading(true);
        AsyncStorage.getItem(AUTHUSER).then(async (res) => {
            let id = JSON.parse(res)._id;
            getNotification(id);
            setUserID(id);
        });
    }, []);

    const wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }

    //refresh function
    const onRefresh = () => {
        setrefreshing(true);
        getNotification(UserId);
        wait(3000).then(() => setrefreshing(false));
    }

    //get Notification Api 
    const getNotification = async (id) => {
        try {
            const response = await NotificationService(id);
            setNotification(response.data.length)
            setNotificationList(response.data)
        } catch (error) {
            firebase.crashlytics().recordError(error);
            //console.log(`error`, error);
        }
    }

    //render Notification on flatlist function
    const renderNotification = ({ item }) => (
        <View style={{ justifyContent: 'center', alignItems: 'center' }} >
            <Swipeable renderLeftActions={() => LeftActions(item)} onSwipeableLeftOpen={() => swipeToDeleteNotification(item)}>
                <View style={STYLE.styles.notificationview}>
                    <View style={{ alignItems: 'flex-end', justifyContent: 'flex-end', marginTop: 5 }}>
                        <Text style={{ fontSize: 12, marginRight: 20, color: '#999999' }}>{moment(item.createdAt).format('LL') == moment().format('LL') ? 'Just Now' : moment(item.createdAt).format('LL')}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, marginTop: -30, marginLeft: 15, alignItems: 'center' }}>
                        <View style={{ width: 40, height: 40, backgroundColor: '#EEEEEE', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                            <FontAwesome name='rupee' size={25} color='#04DE71' />
                        </View>
                        <View style={{ flex: 1, marginLeft: 15 }}>
                            <Text style={{ fontSize: 12, color: '#F67742' }} >#{item.property.subject}</Text>
                            <Text style={{ fontSize: 14, color: '#000000' }}>{item.property.message}</Text>
                        </View>
                    </View>
                </View>
            </Swipeable>
        </View>
    )

    //swipe To Delete Notification function
    const swipeToDeleteNotification = async (item) => {
        try {
            const response = await getByIdNotificationDeleteService(item._id);
            if (response.data != null && response.data != undefined && response.status == 200)
                getNotification(UserId);
        } catch (error) {
            firebase.crashlytics().recordError(error);
            //console.log(`error`, error);
        }
    }

    //clear btn to all notification clear 
    const clearAllNotification = async () => {
        let clear = [];
        notificationList.forEach(ele => {
            clear.push(ele._id);
        });
        try {
            const response = await deleteAllNotificationService(clear);
            if (response.status === 200) {
                getNotification(UserId);
            }
        } catch (error) {
            firebase.crashlytics().recordError(error);
            //console.log(`error`, error);
        }
    }

    //swipe To Delete Left Actions
    const LeftActions = () => {
        return (
            <View
                style={{ flex: 1, backgroundColor: '#5AC8FA', justifyContent: 'center' }}>
                <Text
                    style={{
                        color: 'white',
                        paddingHorizontal: 10,
                        fontWeight: '600'
                    }}>
                </Text>
            </View>
        )
    }

    return (
        <SafeAreaView style={STYLE.styles.container}>
            <GeneralStatusBarColor hidden={false} translucent={true} backgroundColor="transparent" barStyle="dark-content" />
            <ScrollView showsVerticalScrollIndicator={false}
                nestedScrollEnabled={true}
                refreshControl={<RefreshControl refreshing={refreshing} title="Pull to refresh" tintColor="#5AC8FA" titleColor="#5AC8FA" colors={["#5AC8FA"]} onRefresh={() => onRefresh()} />}>
                <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginTop: 30, marginBottom: 10 }}>
                    <View style={{ justifyContent: 'flex-start', flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => props.navigation.goBack(null)}>
                            <AntDesign name='arrowleft' color='#FFFFFF' size={24} style={{ marginLeft: 15 }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: 30, marginTop: -10, justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../../assets/images/notificationicon.png')} style={{ height: 25, width: 20 }} />
                            <View style={{ marginLeft: 15, marginTop: -40, height: 22, width: 22, borderRadius: 100, justifyContent: 'center', alignItems: 'center', backgroundColor: '#EB5757' }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 12, color: '#FFFFFF' }}>{notification}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ justifyContent: 'flex-end' }}>
                        <TouchableOpacity onPress={() => clearAllNotification()}
                            style={STYLE.styles.submitbtn}>
                            <Text style={{ fontSize: 14, color: '#5AC8FA' }}>Clear</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {(notificationList == null) || (notificationList && notificationList.length <= 0) ?
                    (loading ? null :
                        <Text style={{ textAlign: 'center', fontSize: 16, color: '#747474', marginTop: 50 }}>No Notification available</Text>
                    )
                    :
                    <FlatList
                        data={notificationList}
                        renderItem={renderNotification}
                        keyExtractor={item => item._id}
                    />
                }
                <View style={{ paddingBottom: 50 }} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default notificationScreen;
