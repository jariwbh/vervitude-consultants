import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, Dimensions, TouchableOpacity, ScrollView, BackHandler, FlatList, Modal, Switch, Image, Platform, ToastAndroid } from 'react-native';
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
import { UpdateUserService } from '../../services/UserService/UserService';
import LogoutService from '../../services/LogoutService/LogoutService';

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
    const [loading, setloading] = useState(false);
    const [filterModalVisible, setFilterModalVisible] = useState(false);
    const [onlineModalVisible, setOnlineModalVisible] = useState(false);
    //const [toggleSwitchAll, settoggleSwitchAll] = useState(false);
    const [selectCategory, setSelectCategory] = useState(null);
    const [selectedItem, setselectedItem] = useState([]);
    const [userDetails, setuserDetails] = useState([]);
    const [online, setOnlineUser] = useState(false);
    const [allCategorytoggle, setallCategorytoggle] = useState(false);

    useEffect(() => {
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
        console.log(`selectedItem`, selectedItem);
    }, [selectedItem, userDetails, allCategorytoggle])

    //get AsyncStorage current user Details
    const getUserData = async () => {
        var getUser = await AsyncStorage.getItem(AUTHUSER);
        if (getUser == null) {
            setTimeout(() => {
                props.navigation.replace(LOGINSCREEN)
            }, 3000);;
        } else {
            var UserInfo = JSON.parse(getUser);
            setuserDetails(UserInfo);
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
        authenticateUser(userDetails);
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
            const response = await UpdateUserService(user);
            if (response.data != null && response.data != 'undefind' && response.status == 200) {
                authenticateUser(user);
                setOnlineUser(false);
                if (Platform.OS === 'android') {
                    ToastAndroid.show('User is ofline', ToastAndroid.LONG);
                } else {
                    alert('User is ofline');
                }
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
            const response = await UpdateUserService(user);
            if (response.data != null && response.data != 'undefind' && response.status == 200) {
                if (Platform.OS === 'android') {
                    ToastAndroid.show('User is Online', ToastAndroid.LONG);
                } else {
                    alert('User is Online');
                }
            }
        } catch (error) {
            console.log(`error`, error);
        };
    }

    return (
        <SafeAreaView style={STYLES.styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 30 }}>
                    <View style={{ justifyContent: 'flex-start' }}>
                        <MenuButton onPress={() => { props.navigation.navigate(MYPROFILESCREEN) }} />
                    </View>
                    {online == true ?
                        <View style={{ marginLeft: screenWidth / 2 - 280 }}>
                            <TouchableOpacity style={STYLES.styles.onlineswitchBtn} onPress={() => { setOnline(true) }} >
                                <Text style={STYLES.styles.onlineswitchBtnText}>Online</Text>
                                <Image source={require('../../assets/images/settingicon.png')}
                                    style={{ alignItems: 'center', height: 22, width: 22 }} />
                            </TouchableOpacity>
                        </View>
                        :
                        <View style={{ marginLeft: screenWidth / 2 - 280 }}>
                            <TouchableOpacity style={STYLES.styles.oflineswitchBtn} onPress={() => { setOnline(false) }} >
                                <Image source={require('../../assets/images/offlineicon.png')}
                                    style={{ alignItems: 'center', height: 22, width: 22 }} />
                                <Text style={STYLES.styles.oflineswitchBtnText}>Offline</Text>
                            </TouchableOpacity>
                        </View>
                    }
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
                        <Text style={STYLES.styles.boxtext}>₹ 20K</Text>
                        <Text style={STYLES.styles.boxtextsecond}>Total Earning</Text>
                    </View>
                    <View style={STYLES.styles.box2}>
                        <View>
                            <Text style={STYLES.styles.boxuppertext}>Hrs</Text>
                        </View>
                        <Text style={STYLES.styles.boxtext}>100</Text>
                        <Text style={STYLES.styles.boxtextsecond}>Total Hours</Text>
                    </View>
                </View>
                <View style={{ justifyContent: 'space-around', flexDirection: 'row', marginTop: 10 }}>
                    <View style={STYLES.styles.box3}>
                        <Text style={STYLES.styles.boxuppertext}>Users</Text>
                        <Text style={STYLES.styles.boxtext}>2K</Text>
                        <Text style={STYLES.styles.boxtextsecond}>New Users</Text>
                    </View>
                    <View style={STYLES.styles.box4}>
                        <Text style={STYLES.styles.boxuppertext}>5 Star</Text>
                        <Text style={STYLES.styles.boxtext}>100</Text>
                        <Text style={STYLES.styles.boxtextsecond}>Total Rating</Text>
                    </View>
                </View>

                <View style={STYLES.styles.centeView}>
                    <View style={STYLES.styles.cardViewChart}>
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
                    </View>

                    <View style={STYLES.styles.cardViewlastHistory}>
                        <View>
                            <Text style={{ marginTop: 20, marginLeft: 40, fontWeight: 'bold', fontSize: 16, color: '#555555' }}>Top Earners Of the Week</Text>
                        </View>

                        <View style={{ marginTop: 15, flexDirection: 'row' }}>
                            <View style={{ flex: 1, height: 1, backgroundColor: '#EEEEEE' }}></View>
                        </View>
                        <View style={{ justifyContent: 'space-evenly', flexDirection: 'row', alignItems: 'center', marginLeft: 15, marginTop: 15 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ backgroundColor: '#5AC8FA', width: 22, height: 22, marginLeft: -40, marginRight: 20, alignItems: 'center', justifyContent: 'center', borderRadius: 20 }}>
                                    <Text style={{ fontSize: 14, color: '#FFFFFF' }}>1</Text>
                                </View>
                                <Text style={{ fontSize: 16, color: '#555555' }}>George</Text>
                            </View>
                            <Text style={{ fontSize: 16, color: '#5AC8FA' }}>+105%</Text>
                            <Text style={{ fontSize: 16, color: '#04DE71' }}>₹ 30k+</Text>
                        </View>

                        <View style={{ marginTop: 15, flexDirection: 'row' }}>
                            <View style={{ flex: 1, height: 1, backgroundColor: '#EEEEEE' }}></View>
                        </View>
                        <View style={{ justifyContent: 'space-evenly', flexDirection: 'row', alignItems: 'center', marginLeft: 15, marginTop: 15 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ backgroundColor: '#5AC8FA', width: 22, height: 22, marginLeft: -40, marginRight: 20, alignItems: 'center', justifyContent: 'center', borderRadius: 20 }}>
                                    <Text style={{ fontSize: 14, color: '#FFFFFF' }}>2</Text>
                                </View>
                                <Text style={{ fontSize: 16, color: '#555555' }}>George</Text>
                            </View>
                            <Text style={{ fontSize: 16, color: '#5AC8FA' }}>+105%</Text>
                            <Text style={{ fontSize: 16, color: '#04DE71' }}>₹ 30k+</Text>
                        </View>

                        <View style={{ marginTop: 15, flexDirection: 'row' }}>
                            <View style={{ flex: 1, height: 1, backgroundColor: '#EEEEEE' }}></View>
                        </View>
                        <View style={{ justifyContent: 'space-evenly', flexDirection: 'row', alignItems: 'center', marginLeft: 15, marginTop: 15 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ backgroundColor: '#5AC8FA', width: 22, height: 22, marginLeft: -40, marginRight: 20, alignItems: 'center', justifyContent: 'center', borderRadius: 20 }}>
                                    <Text style={{ fontSize: 14, color: '#FFFFFF' }}>3</Text>
                                </View>
                                <Text style={{ fontSize: 16, color: '#555555' }}>George</Text>
                            </View>
                            <Text style={{ fontSize: 16, color: '#5AC8FA' }}>+105%</Text>
                            <Text style={{ fontSize: 16, color: '#04DE71' }}>₹ 30k+</Text>
                        </View>

                        <View style={{ marginTop: 15, flexDirection: 'row' }}>
                            <View style={{ flex: 1, height: 1, backgroundColor: '#EEEEEE' }}></View>
                        </View>
                        <View style={{ justifyContent: 'space-evenly', flexDirection: 'row', alignItems: 'center', marginLeft: 15, marginTop: 15 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ backgroundColor: '#5AC8FA', width: 22, height: 22, marginLeft: -40, marginRight: 20, alignItems: 'center', justifyContent: 'center', borderRadius: 20 }}>
                                    <Text style={{ fontSize: 14, color: '#FFFFFF' }}>4</Text>
                                </View>
                                <Text style={{ fontSize: 16, color: '#555555' }}>George</Text>
                            </View>
                            <Text style={{ fontSize: 16, color: '#5AC8FA' }}>+105%</Text>
                            <Text style={{ fontSize: 16, color: '#04DE71' }}>₹ 30k+</Text>
                        </View>

                        <View style={{ marginTop: 15, flexDirection: 'row' }}>
                            <View style={{ flex: 1, height: 1, backgroundColor: '#EEEEEE' }}></View>
                        </View>
                        <View style={{ justifyContent: 'space-evenly', flexDirection: 'row', alignItems: 'center', marginLeft: 15, marginTop: 15 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ backgroundColor: '#5AC8FA', width: 22, height: 22, marginLeft: -40, marginRight: 20, alignItems: 'center', justifyContent: 'center', borderRadius: 20 }}>
                                    <Text style={{ fontSize: 14, color: '#FFFFFF' }}>5</Text>
                                </View>
                                <Text style={{ fontSize: 16, color: '#555555' }}>George</Text>
                            </View>
                            <Text style={{ fontSize: 16, color: '#5AC8FA' }}>+105%</Text>
                            <Text style={{ fontSize: 16, color: '#04DE71' }}>₹ 30k+</Text>
                        </View>

                        <View style={{ marginTop: 15, flexDirection: 'row' }}>
                            <View style={{ flex: 1, height: 1, backgroundColor: '#EEEEEE' }}></View>
                        </View>
                        <View style={{ justifyContent: 'space-evenly', flexDirection: 'row', alignItems: 'center', marginLeft: 15, marginTop: 15 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ backgroundColor: '#5AC8FA', width: 22, height: 22, marginLeft: -40, marginRight: 20, alignItems: 'center', justifyContent: 'center', borderRadius: 20 }}>
                                    <Text style={{ fontSize: 14, color: '#FFFFFF' }}>6</Text>
                                </View>
                                <Text style={{ fontSize: 16, color: '#555555' }}>George</Text>
                            </View>
                            <Text style={{ fontSize: 16, color: '#5AC8FA' }}>+105%</Text>
                            <Text style={{ fontSize: 16, color: '#04DE71' }}>₹ 30k+</Text>
                        </View>

                        <View style={{ marginTop: 15, flexDirection: 'row' }}>
                            <View style={{ flex: 1, height: 1, backgroundColor: '#EEEEEE' }}></View>
                        </View>
                        <View style={{ justifyContent: 'space-evenly', flexDirection: 'row', alignItems: 'center', marginLeft: 15, marginTop: 15 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ backgroundColor: '#5AC8FA', width: 22, height: 22, marginLeft: -40, marginRight: 20, alignItems: 'center', justifyContent: 'center', borderRadius: 20 }}>
                                    <Text style={{ fontSize: 14, color: '#FFFFFF' }}>7</Text>
                                </View>
                                <Text style={{ fontSize: 16, color: '#555555' }}>George</Text>
                            </View>
                            <Text style={{ fontSize: 16, color: '#5AC8FA' }}>+105%</Text>
                            <Text style={{ fontSize: 16, color: '#04DE71' }}>₹ 30k+</Text>
                        </View>

                        <View style={{ marginTop: 15, flexDirection: 'row' }}>
                            <View style={{ flex: 1, height: 1, backgroundColor: '#EEEEEE' }}></View>
                        </View>
                        <View style={{ justifyContent: 'space-evenly', flexDirection: 'row', alignItems: 'center', marginLeft: 15, marginTop: 15 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ backgroundColor: '#5AC8FA', width: 22, height: 22, marginLeft: -40, marginRight: 20, alignItems: 'center', justifyContent: 'center', borderRadius: 20 }}>
                                    <Text style={{ fontSize: 14, color: '#FFFFFF' }}>8</Text>
                                </View>
                                <Text style={{ fontSize: 16, color: '#555555' }}>George</Text>
                            </View>
                            <Text style={{ fontSize: 16, color: '#5AC8FA' }}>+105%</Text>
                            <Text style={{ fontSize: 16, color: '#04DE71' }}>₹ 30k+</Text>
                        </View>

                        <View style={{ marginTop: 15, flexDirection: 'row' }}>
                            <View style={{ flex: 1, height: 1, backgroundColor: '#EEEEEE' }}></View>
                        </View>
                        <View style={{ justifyContent: 'space-evenly', flexDirection: 'row', alignItems: 'center', marginLeft: 15, marginTop: 15 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ backgroundColor: '#5AC8FA', width: 22, height: 22, marginLeft: -40, marginRight: 20, alignItems: 'center', justifyContent: 'center', borderRadius: 20 }}>
                                    <Text style={{ fontSize: 14, color: '#FFFFFF' }}>9</Text>
                                </View>
                                <Text style={{ fontSize: 16, color: '#555555' }}>George</Text>
                            </View>
                            <Text style={{ fontSize: 16, color: '#5AC8FA' }}>+105%</Text>
                            <Text style={{ fontSize: 16, color: '#04DE71' }}>₹ 30k+</Text>
                        </View>

                        <View style={{ marginTop: 15, flexDirection: 'row' }}>
                            <View style={{ flex: 1, height: 1, backgroundColor: '#EEEEEE' }}></View>
                        </View>
                        <View style={{ justifyContent: 'space-evenly', flexDirection: 'row', alignItems: 'center', marginLeft: 15, marginTop: 15 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ backgroundColor: '#5AC8FA', width: 22, height: 22, marginLeft: -40, marginRight: 20, alignItems: 'center', justifyContent: 'center', borderRadius: 20 }}>
                                    <Text style={{ fontSize: 14, color: '#FFFFFF' }}>10</Text>
                                </View>
                                <Text style={{ fontSize: 16, color: '#555555' }}>George</Text>
                            </View>
                            <Text style={{ fontSize: 16, color: '#5AC8FA' }}>+105%</Text>
                            <Text style={{ fontSize: 16, color: '#04DE71' }}>₹ 30k+</Text>
                        </View>

                    </View>
                </View>
                <View style={{ marginBottom: 50 }} />
            </ScrollView>
            {/* Filter model Pop */}
            <Modal
                animationType='slide'
                transparent={true}
                visible={filterModalVisible}
                onRequestClose={() => { setFilterModalVisible(!filterModalVisible) }}
            >
                <View style={STYLES.styles.centeView}>
                    <View style={STYLES.styles.modalView}>
                        <Text style={{ padding: 15, textAlign: 'center', color: '#000000', fontSize: 14 }}>All</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 1, height: 1, backgroundColor: '#EEEEEE' }}></View>
                        </View>

                        <Text style={{ padding: 15, textAlign: 'center', color: '#000000', fontSize: 14 }}>Yearly</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 1, height: 1, backgroundColor: '#EEEEEE' }}></View>
                        </View>

                        <Text style={{ padding: 15, textAlign: 'center', color: '#000000', fontSize: 14 }}>Weekly</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 1, height: 1, backgroundColor: '#EEEEEE' }}></View>
                        </View>

                        <Text style={{ padding: 15, textAlign: 'center', color: '#5AC8FA', fontSize: 14 }}>Montly</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 1, height: 1, backgroundColor: '#EEEEEE' }}></View>
                        </View>

                        <Text style={{ padding: 15, textAlign: 'center', color: '#000000', fontSize: 14 }}>Today</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 1, height: 1, backgroundColor: '#EEEEEE' }}></View>
                        </View>
                    </View>

                    <View style={{ marginTop: 15, flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => { setFilterModalVisible(!filterModalVisible) }}
                            style={STYLES.styles.savebtn}>
                            <Text style={{ fontSize: 14, color: '#FFFFFF' }}>Save</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setFilterModalVisible(!filterModalVisible) }}
                            style={STYLES.styles.cancelbtn}>
                            <Text style={{ fontSize: 14, color: '#000000' }}>Cancel</Text>
                        </TouchableOpacity>
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
                <View style={STYLES.styles.centeView}>
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
                    <View style={{ marginTop: 15, flexDirection: 'row' }}>
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
            </Modal>
            {loading ? <Loader /> : null}
        </SafeAreaView>
    )
}

export default homeScreen;