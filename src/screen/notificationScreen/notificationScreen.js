import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as SCREEN from '../../context/screen/screenName';
import * as STYLE from './styles';

const notificationScreen = (props) => {
    return (
        <SafeAreaView style={STYLE.styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginTop: 30, marginBottom: 10 }}>
                    <View style={{ justifyContent: 'flex-start' }}>
                        <TouchableOpacity onPress={() => props.navigation.goBack(null)}>
                            <AntDesign name='arrowleft' color='#FFFFFF' size={24} style={{ marginLeft: 15 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginLeft: -150 }}>
                        <TouchableOpacity >
                            <Image source={require('../../assets/images/notificationicon.png')} style={{ height: 25, width: 20 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ justifyContent: 'flex-end' }}>
                        <TouchableOpacity
                            style={STYLE.styles.submitbtn}>
                            <Text style={{ fontSize: 14, color: '#00D9CE' }}>Clear</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={STYLE.styles.notificationview}>
                        <View style={{ alignItems: 'flex-end', justifyContent: 'flex-end', marginTop: 5 }}>
                            <Text style={{ fontSize: 12, marginRight: 20, color: '#999999' }}>Just now</Text>
                        </View>
                        <View style={{ flexDirection: 'row', flex: 1, marginTop: -30, marginLeft: 15, alignItems: 'center' }}>
                            <View style={{ width: 40, height: 40, backgroundColor: '#EEEEEE', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                                <FontAwesome name='rupee' size={25} color='#04DE71' />
                            </View>
                            <View style={{ flex: 1, marginLeft: 15 }}>
                                <Text style={{ fontSize: 12, color: '#F67742' }} >#Transaction</Text>
                                <Text style={{ fontSize: 14, color: '#000000' }}>Your Feb transaction have been completed please check your account</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={STYLE.styles.notificationview}>
                        <View style={{ alignItems: 'flex-end', justifyContent: 'flex-end', marginTop: 5 }}>
                            <Text style={{ fontSize: 12, marginRight: 20, color: '#999999' }}>Yesterday</Text>
                        </View>
                        <View style={{ flexDirection: 'row', flex: 1, marginTop: -30, marginLeft: 15, alignItems: 'center' }}>
                            <View style={{ width: 40, height: 40, backgroundColor: '#EEEEEE', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                                <FontAwesome name='rupee' size={25} color='#04DE71' />
                            </View>
                            <View style={{ flex: 1, marginLeft: 15 }}>
                                <Text style={{ fontSize: 12, color: '#F67742' }} >#Transaction</Text>
                                <Text style={{ fontSize: 14, color: '#000000' }}>Your Feb transaction have been completed please check your account</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={STYLE.styles.notificationview}>
                        <View style={{ alignItems: 'flex-end', justifyContent: 'flex-end', marginTop: 5 }}>
                            <Text style={{ fontSize: 12, marginRight: 20, color: '#999999' }}>Yesterday</Text>
                        </View>
                        <View style={{ flexDirection: 'row', flex: 1, marginTop: -30, marginLeft: 15, alignItems: 'center' }}>
                            <View style={{ width: 40, height: 40, backgroundColor: '#EEEEEE', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                                <FontAwesome name='rupee' size={25} color='#04DE71' />
                            </View>
                            <View style={{ flex: 1, marginLeft: 15 }}>
                                <Text style={{ fontSize: 12, color: '#F67742' }} >#Transaction</Text>
                                <Text style={{ fontSize: 14, color: '#000000' }}>Your Feb transaction have been completed please check your account</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={{ paddingBottom: 50 }} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default notificationScreen;
