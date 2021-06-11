import React, { useState, useEffect } from 'react';
import {
    Text, View, SafeAreaView, Dimensions, TouchableOpacity, ScrollView, BackHandler,
    FlatList, Modal, Switch, Image, Platform, ToastAndroid, RefreshControl
} from 'react-native';
import { MYPROFILESCREEN, CHATHISTORYSCREEN } from '../../context/screen/screenName';
import { getCategory } from '../../services/HomeService/HomeService';
import MenuButton from '../../components/MenuButton/MenuButton';
import ChatMenu from '../../components/ChatMenu/ChatMenu';
import { StackedBarChart } from 'react-native-chart-kit';
const screenWidth = Dimensions.get('window').width;
import * as STYLES from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import { AUTHUSER } from '../../context/actions/type';
import Loader from '../../components/loader/index';
import { UserUpdateService, getByIdUserService, UserPatchService } from '../../services/UserService/UserService';
import LogoutService from '../../services/LogoutService/LogoutService';
import DeviceInfo from 'react-native-device-info';
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification from "react-native-push-notification";
import { getDashboard, getDashboardFilter } from "../../services/HomeService/HomeService";
import moment from 'moment';
import { useFocusEffect } from '@react-navigation/native';

const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Sat', 'Sun'],
    data: [
        [60, 60],
        [30, 30],
        [50, 60],
        [20, 80],
        [80, 30],
        [50, 30]
    ],
    barColors: ['#C4C4C4', '#5AC8FA']
};

const filterListData = [
    {
        "id": 1,
        "name": 'all'
    },
    {
        "id": 2,
        "name": 'yearly'
    },
    {
        "id": 3,
        "name": 'weekly'
    },
    {
        "id": 4,
        "name": 'montly'
    },
    {
        "id": 5,
        "name": 'today'
    }
]

const chartConfig = {
    backgroundGradientFrom: '#FFFFFF',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#FFFFFF',
    backgroundGradientToOpacity: 0.1,
    color: (opacity = 1) => `rgba(92, 92, 92, ${opacity})`,
    strokeWidth: 1, // optional, default 3
    barPercentage: 1,
    useShadowColorFromDataset: false, // optional
};

const homeScreen = (props) => {
    const [loading, setloading] = useState(true);
    const [filterModalVisible, setFilterModalVisible] = useState(false);
    const [onlineModalVisible, setOnlineModalVisible] = useState(false);
    const [selectCategory, setSelectCategory] = useState(null);
    const [selectedItem, setselectedItem] = useState([]);
    const [userDetails, setuserDetails] = useState([]);
    const [online, setOnlineUser] = useState(false);
    const [allCategorytoggle, setallCategorytoggle] = useState(false);
    const [filterList, setFilterList] = useState(null);
    const [dashboardtopEarner, setDashboardtopEarner] = useState([]);
    const [dashboardView, setDashboardView] = useState(null);
    const [filterSelectValue, setfilterSelectValue] = useState(null);
    const [refreshing, setrefreshing] = useState(false);

    let userID;

    useEffect(() => {
        setFilterList(filterListData);
        getCategoryList();
        getUserData();
        props.navigation.addListener('focus', e => {
            BackHandler.addEventListener('hardwareBackPress', handleBackButton);
        });
        return props.navigation.addListener('blur', e => {
            BackHandler.removeEventListener('hardwareBackPress', handleBackButton,
            );
        });
    }, []);

    useEffect(() => {
    }, [selectedItem, userDetails, allCategorytoggle, loading, filterList, filterSelectValue, selectCategory, online, dashboardView, refreshing]);

    useFocusEffect(
        React.useCallback(() => {
            getDashboardView();
        }, [])
    );

    const wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }

    //refresh function
    const onRefresh = () => {
        setrefreshing(true);
        getDashboardView();
        wait(3000).then(() => setrefreshing(false));
    }

    //get dashboard view data
    const getDashboardView = async () => {
        try {
            const response = await getDashboard();
            setDashboardView(response.data[0]);
            setDashboardtopEarner(response.data[1].data);
        } catch (error) {
            console.log(`error`, error);
        }
    }

    //get dashboard view data
    const getDashboardFilterView = async () => {
        let sDate, eDate;

        if (filterSelectValue === 'all') {
            console.log(`all`);
            sDate = moment().format();
            eDate = moment().format();
        } else if (filterSelectValue === 'yearly') {
            console.log(`yearly`);
            sDate = moment().format();
            eDate = moment().subtract(1, 'years')
            eDate = moment(eDate).format();
        } else if (filterSelectValue === 'weekly') {
            console.log(`weekly`);
            sDate = moment().format();
            eDate = moment().subtract(1, 'weeks')
            eDate = moment(eDate).format();
        } else if (filterSelectValue === 'montly') {
            console.log(`montly`);
            sDate = moment().format();
            eDate = moment().subtract(1, 'months')
            eDate = moment(eDate).format();
        } else if (filterSelectValue === 'today') {
            console.log(`today`);
            sDate = moment().format();
            eDate = moment().format();
        }

        try {
            const response = await getDashboardFilter(sDate, eDate);
            setDashboardView(response.data[0]);
        } catch (error) {
            console.log(`error`, error);
        }
    }

    //UPDATE MEMBER INFORMATION API CALL
    const UserPatch = async (deviceInfo) => {
        //console.log(`deviceInfo`, deviceInfo)
        try {
            const response = await UserPatchService(userID, deviceInfo);
            if (response.data != null && response.data != 'undefind' && response.status == 200) {
                // console.log(`DONE`);
            }
        }
        catch (error) {
            //  console.log(`error`, error);
            setloading(false);
        }
    }

    //push notification function
    const PushNotifications = () => {
        PushNotification.configure({
            // (optional) Called when Token is generated (iOS and Android)
            onRegister: function (token) {
                //console.log(`token.token`, token.token)
                getFcmToken(token.token)
            },

            // (required) Called when a remote is received or opened, or local notification is opened
            onNotification: function (notification) {
                // process the notification
                // (required) Called when a remote is received or opened, or local notification is opened
                if (notification.foreground) {
                    notification.data = {
                        message: notification.message,
                        title: notification.title
                    }
                    //   console.log("NOTIFICATION:", notification);
                    notification.finish(PushNotificationIOS.FetchResult.NoData);
                }
            },

            // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
            onAction: function (notification) {
                // console.log("ACTION:", notification.action);
                // console.log("NOTIFICATION:", notification);

                // process the action
            },

            // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
            onRegistrationError: function (err) {
                console.error(err.message, err);
            },

            // IOS ONLY (optional): default: all - Permissions to register.
            permissions: {
                alert: true,
                badge: true,
                sound: true,
            },

            // Should the initial notification be popped automatically
            // default: true
            popInitialNotification: true,

            /**
             * (optional) default: true
             * - Specified if permissions (ios) and token (android and ios) will requested or not,
             * - if not, you must call PushNotificationsHandler.requestPermissions() later
             * - if you are not using remote notification or do not have Firebase installed, use this:
             *     requestPermissions: Platform.OS === 'ios'
             */
            requestPermissions: true,
        });
    }

    //GET MESSAGE TOKEN
    const getFcmToken = async (fcmToken) => {
        let uniqueId;
        let deviceInfo;
        if (Platform.OS === 'android') {
            uniqueId = await DeviceInfo.getAndroidId()
            if (fcmToken) {
                deviceInfo = {
                    anroiddevice: {
                        "deviceid": uniqueId,
                        "registrationid": fcmToken
                    }
                }
                await UserPatch(deviceInfo);
            }
        } else {
            uniqueId = await DeviceInfo.getUniqueId();
            if (fcmToken) {
                deviceInfo = {
                    iosdevice: {
                        "deviceid": uniqueId,
                        "registrationid": fcmToken
                    }
                }
                await UserPatch(deviceInfo);
            }
        }
        //console.log('deviceInfo', deviceInfo);
    }

    //get AsyncStorage current user Details
    const getUserData = async () => {
        var getUser = await AsyncStorage.getItem(AUTHUSER);
        if (getUser == null) {
            setTimeout(() => {
                props.navigation.replace(LOGINSCREEN)
            }, 3000);;
        } else {
            var UserInfo = JSON.parse(getUser);
            userID = UserInfo._id
            PushNotifications();
            await getByIdUser(UserInfo._id);
            setuserDetails(UserInfo);
            setloading(false);
            setOnlineUser(UserInfo.property && UserInfo.property.live == true ? true : false)
        }
    }

    //get member details 
    const getByIdUser = async (id) => {
        try {
            const response = await getByIdUserService(id);
            if (response.data != null && response.data != 'undefind' && response.status == 200) {
                authenticateUser(response.data);
            }
        } catch (error) {
            setloading(false);
        }
    }

    //online model pop up in save button click to call
    const onPressSaveCategory = () => {
        let selCat = [];
        selectedItem.map((item, index) => {
            selCat.push(item.name);
        })
        userDetails.property.live = true;
        userDetails.property.livechat = selCat;
        updateUserDetails(userDetails);
        setOnlineUser(true);
        setOnlineModalVisible(!onlineModalVisible);
    }

    //REPLACE AND ADD LOCAL STORAGE FUNCTION
    const authenticateUser = (user) => {
        AsyncStorage.setItem(AUTHUSER, JSON.stringify(user));
    }

    //toggle switch rendom select to call function 
    const onTouchSelectItem = (item) => {
        if (item.isSelected === true) {
            let filteredlists = [];
            if (selectedItem) {
                selectedItem.forEach(element => {
                    element.name === item.name;
                    item.isSelected = false;
                });
                filteredlists = selectedItem.filter(x => x.name !== item.name);
            }
            setallCategorytoggle(false);
            setselectedItem(filteredlists);
        } else {
            item.isSelected = true;
            setselectedItem([...selectedItem, item]);
        }
    }

    //get category list api function
    const getCategoryList = async () => {
        try {
            const response = await getCategory();
            if (response.data != null && response.status === 200) {
                setSelectCategory(response.data.data);
            }
        } catch (error) {
            console.log(`error`, error);
        }
    }

    //mobile back press to call
    const handleBackButton = () => {
        BackHandler.exitApp()
        return true;
    }

    //set onlline model to call function
    const setOnline = (online) => {
        if (online == false) {
            setOnlineUser(true);
            setOnlineModalVisible(true);
            return;
        }

        if (online == true) {
            userDetails.property.live = false;
            userDetails.property.livechat = [];
            let filteredlists = [];
            if (selectedItem) {
                selectedItem.forEach(element => {
                    element.isSelected = false;
                });
                filteredlists = [];
            }
            setselectedItem(filteredlists);
            LogoutUser(userDetails);
            return;
        }
    }

    //LOGOUT/Offile Function after online user
    const LogoutUser = async (user) => {
        try {
            // const response = await LogoutService(user);
            const response = await UserUpdateService(user);
            if (response.data != null && response.data != 'undefind' && response.status == 200) {
                authenticateUser(user);
                setOnlineUser(false);
            }
        } catch (error) {
            console.log(`error`, error);
        }
    }

    //select all category toggle switch
    const allItemSelect = () => {
        if (allCategorytoggle === true) {
            let filteredlists = [];
            if (selectedItem) {
                selectedItem.forEach(element => {
                    element.isSelected = false;
                });
                filteredlists = [];
            }
            setallCategorytoggle(false);
            setselectedItem(filteredlists);
        } else {
            selectCategory.forEach(element => {
                element.isSelected = true;
            });
            setselectedItem(selectCategory);
            setallCategorytoggle(true);
        }
    }

    //render select category list in model pop 
    const renderSelectCategory = ({ item }) => (
        item.name != 'COMING SOON' &&
        <View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1, height: 1, backgroundColor: '#EEEEEE' }}></View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 15 }}>
                <View style={{ justifyContent: 'flex-start' }}>
                    <Text style={{ textAlign: 'center', color: '#000000', justifyContent: 'flex-start' }}>{item.name}</Text>
                </View>
                <View style={{ justifyContent: 'flex-end' }}>
                    <Switch
                        trackColor={{ false: '#C4C4C4', true: '#00D9CE' }}
                        onValueChange={() => onTouchSelectItem(item)}
                        value={item.isSelected === true ? true : false} />
                </View>
            </View>
        </View>
    )

    //update user Details
    const updateUserDetails = async (user) => {
        try {
            const response = await UserUpdateService(user);
            if (response.data != null && response.data != 'undefind' && response.status == 200) {
                authenticateUser(user);
            }
        } catch (error) {
            console.log(`error`, error);
        };
    }

    //toggle switch rendom select to call function 
    const onTouchSelectFilterList = (item, index) => {
        const filteredlists = filterList.map((item) => {
            item.selected = false;
            return item;
        });
        setfilterSelectValue(item.name)
        filteredlists[index].selected = true;
        setFilterList(filteredlists);
    }

    return (
        <SafeAreaView style={STYLES.styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}
                refreshControl={<RefreshControl refreshing={refreshing} title="Pull to refresh" tintColor="#5AC8FA" titleColor="#5AC8FA" colors={["#5AC8FA"]} onRefresh={() => onRefresh()} />}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 30 }}>
                    <View style={{ justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center' }}>
                        <MenuButton onPress={() => { props.navigation.navigate(MYPROFILESCREEN) }} />
                        {online == true ?
                            <View style={{ marginLeft: 30 }}>
                                <TouchableOpacity style={STYLES.styles.onlineswitchBtn} onPress={() => { setOnline(true) }} >
                                    <Text style={STYLES.styles.onlineswitchBtnText}>Online</Text>
                                    <Image source={require('../../assets/images/settingicon.png')}
                                        style={{ alignItems: 'center', height: 22, width: 22 }} />
                                </TouchableOpacity>
                            </View>
                            :
                            <View style={{ marginLeft: 30 }}>
                                <TouchableOpacity style={STYLES.styles.oflineswitchBtn} onPress={() => { setOnline(false) }} >
                                    <Image source={require('../../assets/images/offlineicon.png')}
                                        style={{ alignItems: 'center', height: 22, width: 22 }} />
                                    <Text style={STYLES.styles.oflineswitchBtnText}>Offline</Text>
                                </TouchableOpacity>
                            </View>
                        }
                    </View>
                    <View style={{ justifyContent: 'flex-end' }}>
                        <ChatMenu onPress={() => { props.navigation.navigate(CHATHISTORYSCREEN) }} />
                    </View>
                </View>

                <TouchableOpacity style={STYLES.styles.filterBtn} onPress={() => setFilterModalVisible(true)} >
                    <Image source={require('../../assets/images/filtericon.png')}
                        style={{ alignItems: 'center', height: 15, width: 15 }} />
                    <Text style={STYLES.styles.filterBtnText}>Filter Reports</Text>
                </TouchableOpacity>

                <View style={{ justifyContent: 'space-around', flexDirection: 'row', marginTop: 10 }}>
                    <View style={STYLES.styles.box1}>
                        <Text style={STYLES.styles.boxtext}>₹ {dashboardView && dashboardView.data[0].totalearning}</Text>
                        <Text style={STYLES.styles.boxtextsecond}>Total Earning</Text>
                    </View>
                    <View style={STYLES.styles.box2}>
                        <View>
                            <Text style={STYLES.styles.boxuppertext}>Hrs</Text>
                        </View>
                        <Text style={STYLES.styles.boxtext}>{dashboardView && dashboardView.data[0].totalhours}</Text>
                        <Text style={STYLES.styles.boxtextsecond}>Total Hours</Text>
                    </View>
                </View>
                <View style={{ justifyContent: 'space-around', flexDirection: 'row', marginTop: 10 }}>
                    <View style={STYLES.styles.box3}>
                        <Text style={STYLES.styles.boxuppertext}>Users</Text>
                        <Text style={STYLES.styles.boxtext}>{dashboardView && dashboardView.data[0].totalusers}</Text>
                        <Text style={STYLES.styles.boxtextsecond}>Total Users</Text>
                    </View>
                    <View style={STYLES.styles.box4}>
                        <Text style={STYLES.styles.boxuppertext}>Rating</Text>
                        <Text style={STYLES.styles.boxtext}>{dashboardView && dashboardView.data[0].totalratings}</Text>
                        <Text style={STYLES.styles.boxtextsecond}>Total Rating</Text>
                    </View>
                </View>

                <View style={STYLES.styles.centeView}>
                    {/* <View style={STYLES.styles.cardViewChart}>
                        <Text style={{ fontSize: 20, flex: 1, color: '#04DE71', marginTop: 15, marginLeft: 20 }}>₹ 5000.20</Text>
                        <View style={{ marginLeft: -40 }}>
                            <StackedBarChart
                                style={{ fontSize: 16 }}
                                data={data}
                                width={screenWidth}
                                height={220}
                                chartConfig={chartConfig}
                                showLegend={false}
                                withVerticalLabels={true}
                                withHorizontalLabels={false}
                            />
                        </View>
                    </View> */}

                    {dashboardtopEarner && dashboardtopEarner != null || dashboardtopEarner.length <= 0
                        ?
                        <View style={STYLES.styles.cardViewlastHistory}>
                            <View>
                                <Text style={{ marginTop: 20, marginLeft: 40, fontWeight: 'bold', fontSize: 16, color: '#555555' }}>Top Earners Of the Week</Text>
                            </View>

                            <FlatList
                                showsVerticalScrollIndicator={false}
                                renderItem={({ item, index }) => (
                                    <>
                                        <View style={{ marginTop: 15, flexDirection: 'row' }}>
                                            <View style={{ flex: 1, height: 1, backgroundColor: '#EEEEEE' }}></View>
                                        </View>
                                        <View style={{ justifyContent: 'space-evenly', flexDirection: 'row', alignItems: 'center', marginLeft: -40, marginTop: 15 }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <View style={{ backgroundColor: '#5AC8FA', width: 22, height: 22, marginLeft: -40, marginRight: 20, alignItems: 'center', justifyContent: 'center', borderRadius: 20 }}>
                                                    <Text style={{ fontSize: 14, color: '#FFFFFF' }}>{index + 1}</Text>
                                                </View>
                                                <Text style={{ fontSize: 16, color: '#555555' }}>{item.fullname.split(' ')[0]}</Text>
                                            </View>
                                            {/* <Text style={{ fontSize: 16, color: '#5AC8FA' }}>+0%</Text> */}
                                            <Text style={{ fontSize: 16, color: item.totalearnings == 0 ? '#555555' : '#04DE71' }}>₹ {item.totalearnings}+</Text>
                                        </View>
                                    </>
                                )}
                                data={dashboardtopEarner && dashboardtopEarner}
                                keyExtractor={(item, index) => index.toString()}
                            />
                        </View>
                        : null}
                </View>
                <View style={{ marginBottom: 50 }} />
            </ScrollView>

            {/* Filter model Pop */}
            <Modal
                animationType='slide'
                transparent={true}
                visible={filterModalVisible}
                onRequestClose={() => { setFilterModalVisible(!filterModalVisible) }}>
                <View style={{ alignItems: 'center', flex: 1 }}>
                    <View style={{ position: 'absolute', bottom: 20 }}>
                        <View style={STYLES.styles.modalView}>
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                renderItem={({ item, index }) => (
                                    <TouchableOpacity onPress={() => onTouchSelectFilterList(item, index)}>
                                        <Text style={{ padding: 15, textAlign: 'center', color: item.selected == true ? '#5AC8FA' : '#000000', fontSize: 14, textTransform: "capitalize" }}>{item.name}</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <View style={{ flex: 1, height: 1, backgroundColor: '#EEEEEE' }}></View>
                                        </View>
                                    </TouchableOpacity>
                                )}
                                data={filterList}
                                keyExtractor={(item, index) => index.toString()}
                            />
                        </View>
                        <View style={{ marginTop: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <TouchableOpacity onPress={() => { setFilterModalVisible(!filterModalVisible), getDashboardFilterView() }}
                                style={STYLES.styles.savebtn}>
                                <Text style={{ fontSize: 14, color: '#FFFFFF' }}>Save</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { setFilterModalVisible(!filterModalVisible) }}
                                style={STYLES.styles.cancelbtn}>
                                <Text style={{ fontSize: 14, color: '#000000' }}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            {/* Online consultants Model Pop */}
            <Modal
                animationType='slide'
                transparent={true}
                visible={onlineModalVisible}
                onRequestClose={() => { setOnlineModalVisible(!onlineModalVisible) }}
            >
                <View style={{ alignItems: 'center', flex: 1 }}>
                    <View style={{ position: 'absolute', bottom: 20 }}>
                        <View style={STYLES.styles.modalViewOnline}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 15 }}>
                                <View style={{ justifyContent: 'flex-start' }}>
                                    <Text style={{ textAlign: 'center', color: '#000000', justifyContent: 'flex-start' }}>All</Text>
                                </View>
                                <View style={{ justifyContent: 'flex-end' }}>
                                    <Switch
                                        trackColor={{ false: '#C4C4C4', true: '#0F74C8' }}
                                        onValueChange={() => allItemSelect()}
                                        value={allCategorytoggle} />
                                </View>
                            </View>
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                renderItem={renderSelectCategory}
                                data={selectCategory}
                                keyExtractor={(item, index) => index.toString()}
                            />
                        </View>
                        <View style={{ marginTop: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <TouchableOpacity onPress={() => onPressSaveCategory()}
                                style={STYLES.styles.savebtn}>
                                <Text style={{ fontSize: 14, color: '#FFFFFF' }}>Save</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { setOnlineModalVisible(!onlineModalVisible), setOnlineUser(false), setselectedItem([]), getCategoryList() }}
                                style={STYLES.styles.cancelbtn}>
                                <Text style={{ fontSize: 14, color: '#000000' }}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            {loading ? <Loader /> : null}
        </SafeAreaView>
    )
}

export default homeScreen;