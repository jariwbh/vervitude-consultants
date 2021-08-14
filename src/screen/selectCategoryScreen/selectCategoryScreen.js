import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Image, SafeAreaView, TouchableOpacity, ScrollView, FlatList, StatusBar, ToastAndroid } from 'react-native';
import CategoryService from '../../services/CategoryService/CategoryService';
import { UserUpdateService } from '../../services/UserService/UserService';
import AsyncStorage from '@react-native-community/async-storage';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as SCREEN from '../../context/screen/screenName';
import { AUTHUSER } from '../../context/actions/type';
import Loader from '../../components/loader/index';
import * as STYLE from './styles';

function selectCategoryScreen(props) {
    const [categoryList, setCategoryList] = useState([]);
    const [loading, setloading] = useState(true);
    const [selectCategory, setselectCategory] = useState([]);
    const [userDetails, setuserDetails] = useState(null);
    let userdata = null;

    useEffect(() => {
        onLoadScreen();
    }, [loading]);

    useEffect(() => {
    }, [selectCategory, userDetails])

    //first time screen open to call function
    const onLoadScreen = async () => {
        await getUserDetails();
        const response = await CategoryService();
        //if (response.data) {
        //   const groupedCategory = await groupBy(response.data, x => x.property.skillcategory);
        //setCategoryList(groupedCategory);
        //}
        setCategoryList(response.data);
        await setselectCategoryDefaultValue(response.data);
        setloading(false);
    }

    async function groupBy(list) {
        var str1 = 'property';
        var str2 = 'skillcategory';
        var finallist = [], list2 = [];
        var ind;
        for (let i = 0; i < list.length; i++) {
            let item = list[i]
            ind = list2.findIndex(a => a == item[str1][str2]);
            if (ind != null && ind != undefined) {
                if (ind == -1) {
                    finallist[item[str1][str2]] = [];
                    finallist[item[str1][str2]].push(item);
                    list2.push(item[str1][str2]);
                } else {
                    finallist[item[str1][str2]].push(item);
                }
            }
        }
        return finallist;
    }

    //first time screen open to call function
    const setselectCategoryDefaultValue = (res) => {
        let category = [];
        let obj = {};
        if (res) {
            res.forEach(element => {
                if (userdata && userdata.property && userdata.property.skill) {
                    userdata.property.skill.forEach(ele => {
                        if (ele === element._id) {
                            obj = {}
                            obj["item"] = element
                            category.push(obj);
                        }
                        return;
                    });
                }
            });
            console.log(`category`, category);
            setselectCategory(category);
        }
    }

    //get AsyncStorage current user Details
    const getUserDetails = async () => {
        var getUser = await AsyncStorage.getItem(AUTHUSER);
        if (getUser == null) {
            setTimeout(() => {
                props.navigation.replace(SCREEN.LOGINSCREEN)
            }, 3000);;
        } else {
            var UserInfo = JSON.parse(getUser);
            userdata = UserInfo;
            setuserDetails(UserInfo);
        }
    }

    //REPLACE AND ADD LOCAL STORAGE FUNCTION
    const authenticateUser = (user) => {
        AsyncStorage.setItem(AUTHUSER, JSON.stringify(user));
    }

    //render category 
    const renderCategory = ({ item }) => (
        <View style={{ padding: 10 }}>
            {item.property.skillcategory == 'COMING SOON' || item.property.skillcategory == 'Coming Soon' ?
                <View>
                    <TouchableOpacity disabled={true}>
                        <Image source={{ uri: item.property.image[0].attachment }}
                            style={{ width: 70, height: 70, borderRadius: 10 }} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 12, textAlign: 'center', textTransform: 'uppercase', marginTop: 5, color: '#8D8D8D' }}>{item.property.skillcategory.substring(0, 6) + ' ...'}</Text>
                </View>
                :
                <View>
                    <TouchableOpacity onPress={() => onTouchSelectCategory({ item })}>
                        <Image source={{ uri: item.property.image[0].attachment }}
                            style={{ width: 70, height: 70, borderRadius: 10, borderWidth: 0.2, borderColor: '#555555' }} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 12, textAlign: 'center', textTransform: 'uppercase', marginTop: 5, color: '#000000', width: 70 }}>{item.property.skillcategory}</Text>
                </View>
            }
        </View>
    );

    //category box touch to add data
    const onTouchSelectCategory = (item) => {
        let filteredLists = [];
        if (item) {
            filteredLists = selectCategory.filter(x => x.item._id == item.item._id);
        }
        if (filteredLists.length == 0) {
            setselectCategory([...selectCategory, item]);
        }
    }

    //selected category to remove data of array list
    const onTouchRemoveCategory = (item) => {
        let filteredLists = [];
        if (selectCategory) {
            filteredLists = selectCategory.filter(x => x.item._id != item.item.item._id);
        }
        setselectCategory(filteredLists);
    }

    //render selected category 
    const renderSelectCategory = ({ item }) => (
        <View style={{ padding: 5 }}>
            <View style={STYLE.styles.graficview}>
                <Text style={{ fontSize: 20, marginLeft: 20 }}>{item.item && item.item.property && item.item.property.skillcategory}</Text>
                <TouchableOpacity onPress={() => onTouchRemoveCategory({ item })}>
                    <AntDesign name='closecircleo' size={20} color='#000000' style={{ marginRight: 20 }} />
                </TouchableOpacity>
            </View>
        </View>
    )

    const onPressSubmit = () => {
        setloading(true);
        let skill = [];
        selectCategory.forEach(element => {
            skill.push(element.item._id);
        });

        let user = userDetails;
        user.property.skill = skill;
        try {
            UserUpdateService(user).then(response => {
                if (response.data != null && response.data != 'undefind' && response.status == 200) {
                    authenticateUser(user);
                    // if (Platform.OS === 'android') {
                    //     ToastAndroid.show("Your Category Update!", ToastAndroid.SHORT);
                    // } else {
                    //     alert('Your Category Update!');
                    // }
                    props.navigation.navigate(SCREEN.MYPROFILESCREEN);
                }
            })
        }
        catch (error) {
            setloading(false);

        }
    }

    return (
        <SafeAreaView style={STYLE.styles.container}>
            <StatusBar backgroundColor='#AAAAAA' barStyle='dark-content' />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 30 }}>
                    <View style={{ justifyContent: 'flex-start' }}>
                        <TouchableOpacity onPress={() => props.navigation.goBack(null)}>
                            <AntDesign name='arrowleft' color='#5AC8FA' size={24} style={{ marginLeft: 15 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ justifyContent: 'flex-end' }}>
                        <TouchableOpacity onPress={() => onPressSubmit()}
                            style={STYLE.styles.submitbtn}>
                            <Text style={{ fontSize: 14, color: '#5AC8FA' }}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
                    <FlatList
                        renderItem={renderSelectCategory}
                        data={selectCategory}
                        keyExtractor={item => item._id}
                    />
                </View>

                <View style={{ marginTop: 0 }}>
                    <FlatList
                        renderItem={renderCategory}
                        data={categoryList}
                        horizontal={false}
                        numColumns={4}
                        keyExtractor={item => item._id}
                    />
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
                    <TouchableOpacity style={STYLE.styles.applyview} onPress={() => onPressSubmit()}>
                        <Text style={{ fontSize: 18, color: '#FFFFFF' }}>Apply</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginBottom: 50 }}></View>
            </ScrollView>
            {loading ? <Loader /> : null}
        </SafeAreaView>
    )
}

export default selectCategoryScreen;
