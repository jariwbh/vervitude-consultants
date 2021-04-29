import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Image, SafeAreaView, TouchableOpacity, ScrollView, FlatList, Platform, ToastAndroid } from 'react-native';
import CategoryService from '../../services/CategoryService/CategoryService';
import { UpdateUserService } from '../../services/UserService/UserService';
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
    }, []);

    useEffect(() => {
    }, [selectCategory, userDetails])

    //first time screen open to call function
    const onLoadScreen = async () => {
        await getUserDetails();
        const response = await CategoryService();
        setCategoryList(response.data);
        await setselectCategoryDefaultValue(response.data);
        setloading(false);
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
        <View style={{ paddingHorizontal: 10, paddingVertical: 5 }}>
            <TouchableOpacity onPress={() => onTouchSelectCategory({ item })}>
                <Image source={{ uri: item.property.image[0].attachment }}
                    style={{ width: 70, height: 70, borderRadius: 10 }} />
            </TouchableOpacity>
            <Text style={{ fontSize: 12, textAlign: 'center', textTransform: 'uppercase', marginTop: 5 }}>{item.property.title}</Text>
        </View>
    );

    //category box touch to add data
    const onTouchSelectCategory = (item) => {
        setselectCategory([...selectCategory, item]);
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
                <Text style={{ fontSize: 20, marginLeft: 20 }}>{item.item && item.item.property && item.item.property.title}</Text>
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
            UpdateUserService(user).then(response => {
                if (response.data != null && response.data != 'undefind' && response.status == 200) {
                    authenticateUser(user);
                    if (Platform.OS === 'android') {
                        ToastAndroid.show("Your Category Update!", ToastAndroid.SHORT);
                    } else {
                        alert('Your Category Update!');
                    }
                    props.navigation.navigate(SCREEN.MYPROFILESCREEN);
                }
            })
        }
        catch (error) {
            setloading(false);
            if (Platform.OS === 'android') {
                ToastAndroid.show("Your Category Not Update!", ToastAndroid.SHORT);
            } else { alert('Your Category Not Update!') }
        }
    }

    return (
        <SafeAreaView style={STYLE.styles.container}>
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
                    {
                        <FlatList
                            renderItem={renderSelectCategory}
                            data={selectCategory}
                            keyExtractor={item => item._id}
                        />
                    }
                </View>

                <View style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
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
            {loading && <Loader />}
        </SafeAreaView>
    )
}

export default selectCategoryScreen;
