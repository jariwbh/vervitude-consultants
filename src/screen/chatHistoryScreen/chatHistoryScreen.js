import React from 'react';
import { View, Text, SafeAreaView, Dimensions, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as SCREEN from '../../context/screen/screenName';
import ChatMenu from '../../components/ChatMenu/ChatMenu';
const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

function chatHistoryScreen(props) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 30 }}>

                    <View style={{ justifyContent: 'flex-start' }}>
                        <TouchableOpacity style={styles.categoryIcon} onPress={() => { props.navigation.navigate(SCREEN.HOMESCREEN) }} >
                            <AntDesign name="arrowleft" size={24} color="#5AC8FA" />
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

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                    <Text style={{ width: WIDTH - 300, fontSize: 12, marginLeft: 20, marginRight: 20, color: '#5F5F5F' }}>MARKETING</Text>
                    <View style={{ flex: 1, height: 1, backgroundColor: '#BEBEBE', marginLeft: -50, marginRight: 15 }} />
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                    <TouchableOpacity onPress={() => { props.navigation.navigate(SCREEN.RUBYCHATSCREEN) }} style={styles.chatview}>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 5 }}>
                            <Text style={{ color: '#5AC8FA', marginLeft: 15, fontSize: 10 }}>New</Text>
                            <Text style={{ color: '#999999', fontSize: 12, marginRight: 15 }}>2:30 PM</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: -5 }}>
                            <Image source={require('../../assets/images/user4.png')}
                                style={{ width: 70, height: 70, borderRadius: 100, marginLeft: 25 }} />
                            <View style={{ marginLeft: -160, height: 15, width: 15, backgroundColor: '#EEEEEE', borderColor: '#000000', borderRadius: 100, borderWidth: 1 }}></View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: -100 }}>
                                <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#000000' }}>Ruby</Text>
                                <Text style={{ fontSize: 14, color: '#04DE71' }}>+ ₹ 20.00</Text>
                            </View>
                            <View style={{ marginRight: 25, width: 30, height: 30, marginTop: 20, alignItems: 'center', justifyContent: 'center', borderRadius: 100, backgroundColor: '#0F74C8' }}>
                                <Text style={{ color: '#FFFFFF' }}>5</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                    <TouchableOpacity onPress={() => { props.navigation.navigate(SCREEN.RUBYCHATSCREEN) }} style={styles.chatview}>
                        <View style={{ justifyContent: 'flex-end', flexDirection: 'row', marginTop: 5 }}>
                            <Text style={{ color: '#999999', fontSize: 12, marginRight: 15 }}>2:30 PM</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: -5 }}>
                            <Image source={require('../../assets/images/user1.png')}
                                style={{ width: 70, height: 70, borderRadius: 100, marginLeft: 25 }} />
                            <View style={{ marginLeft: -15, height: 15, width: 15, backgroundColor: '#5AC8FA', borderRadius: 100 }}></View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 50 }}>
                                <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#000000' }}>Maria</Text>
                                <Text style={{ fontSize: 14, color: '#04DE71' }}>+ ₹ 0.00</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                    <Text style={{ width: WIDTH - 320, fontSize: 12, marginLeft: 20, marginRight: 20, color: '#5F5F5F' }}>DESIGN</Text>
                    <View style={{ flex: 1, height: 1, backgroundColor: '#BEBEBE', marginLeft: -50, marginRight: 15 }} />
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                    <TouchableOpacity onPress={() => { props.navigation.navigate(SCREEN.RUBYCHATSCREEN) }} style={styles.chatview}>
                        <View style={{ justifyContent: 'flex-end', flexDirection: 'row', marginTop: 5 }}>
                            <Text style={{ color: '#999999', fontSize: 12, marginRight: 15 }}>2:30 PM</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: -5 }}>
                            <Image source={require('../../assets/images/user4.png')}
                                style={{ width: 70, height: 70, borderRadius: 100, marginLeft: 25 }} />
                            <View style={{ marginLeft: -150, height: 15, width: 15, backgroundColor: '#5AC8FA', borderRadius: 100 }}></View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: -90 }}>
                                <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#000000' }}>Maya</Text>
                                <Text style={{ fontSize: 14, color: '#04DE71' }}>+ ₹ 20.00</Text>
                            </View>
                            <View style={{ marginRight: 25, width: 30, height: 30, marginTop: 20, alignItems: 'center', justifyContent: 'center', borderRadius: 100, backgroundColor: '#0F74C8' }}>
                                <Text style={{ color: '#FFFFFF' }}>5</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                    <TouchableOpacity onPress={() => { props.navigation.navigate(SCREEN.RUBYCHATSCREEN) }} style={styles.chatview}>
                        <View style={{ justifyContent: 'flex-end', flexDirection: 'row', marginTop: 5 }}>
                            <Text style={{ color: '#999999', fontSize: 12, marginRight: 15 }}>2:30 PM</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: -5 }}>
                            <Image source={require('../../assets/images/user2.png')}
                                style={{ width: 70, height: 70, borderRadius: 100, marginLeft: 25 }} />
                            <View style={{ marginLeft: -15, height: 15, width: 15, backgroundColor: '#5AC8FA', borderRadius: 100 }}></View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 50 }}>
                                <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#000000' }}>Maria</Text>
                                <Text style={{ fontSize: 14, color: '#04DE71' }}>+ ₹ 0.00</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                    <TouchableOpacity onPress={() => { props.navigation.navigate(SCREEN.RUBYCHATSCREEN) }} style={styles.chatview}>
                        <View style={{ justifyContent: 'flex-end', flexDirection: 'row', marginTop: 5 }}>
                            <Text style={{ color: '#999999', fontSize: 12, marginRight: 15 }}>2:30 PM</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: -5 }}>
                            <Image source={require('../../assets/images/user3.png')}
                                style={{ width: 70, height: 70, borderRadius: 100, marginLeft: 25 }} />
                            <View style={{ marginLeft: -150, height: 15, width: 15, backgroundColor: '#5AC8FA', borderRadius: 100 }}></View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: -90 }}>
                                <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#000000' }}>Rajan</Text>
                                <Text style={{ fontSize: 14, color: '#04DE71' }}>+ ₹ 20.00</Text>
                            </View>
                            <View style={{ marginRight: 25, width: 30, height: 30, marginTop: 20, alignItems: 'center', justifyContent: 'center', borderRadius: 100, backgroundColor: '#0F74C8' }}>
                                <Text style={{ color: '#FFFFFF' }}>5</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                    <Text style={{ width: WIDTH - 240, fontSize: 12, marginLeft: 20, marginRight: 20, color: '#5F5F5F' }}>BUSINESS CONSULTING</Text>
                    <View style={{ flex: 1, height: 1, backgroundColor: '#BEBEBE', marginLeft: -50, marginRight: 15 }} />
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                    <TouchableOpacity onPress={() => { props.navigation.navigate(SCREEN.RUBYCHATSCREEN) }} style={styles.chatview}>
                        <View style={{ justifyContent: 'flex-end', flexDirection: 'row', marginTop: 5 }}>
                            <Text style={{ color: '#999999', fontSize: 12, marginRight: 15 }}>2:30 PM</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: -5 }}>
                            <Image source={require('../../assets/images/user2.png')}
                                style={{ width: 70, height: 70, borderRadius: 100, marginLeft: 25 }} />
                            <View style={{ marginLeft: -15, height: 15, width: 15, backgroundColor: '#5AC8FA', borderRadius: 100 }}></View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 50 }}>
                                <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#000000' }}>Maria</Text>
                                <Text style={{ fontSize: 14, color: '#04DE71' }}>+ ₹ 0.00</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                    <TouchableOpacity onPress={() => { props.navigation.navigate(SCREEN.RUBYCHATSCREEN) }} style={styles.chatview}>
                        <View style={{ justifyContent: 'flex-end', flexDirection: 'row', marginTop: 5 }}>
                            <Text style={{ color: '#999999', fontSize: 12, marginRight: 15 }}>2:30 PM</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: -5 }}>
                            <Image source={require('../../assets/images/user3.png')}
                                style={{ width: 70, height: 70, borderRadius: 100, marginLeft: 25 }} />
                            <View style={{ marginLeft: -150, height: 15, width: 15, backgroundColor: '#5AC8FA', borderRadius: 100 }}></View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: -90 }}>
                                <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#000000' }}>Rajan</Text>
                                <Text style={{ fontSize: 14, color: '#04DE71' }}>+ ₹ 20.00</Text>
                            </View>
                            <View style={{ marginRight: 25, width: 30, height: 30, marginTop: 20, alignItems: 'center', justifyContent: 'center', borderRadius: 100, backgroundColor: '#0F74C8' }}>
                                <Text style={{ color: '#FFFFFF' }}>5</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                    <TouchableOpacity onPress={() => { props.navigation.navigate(SCREEN.RUBYCHATSCREEN) }} style={styles.chatview}>
                        <View style={{ justifyContent: 'flex-end', flexDirection: 'row', marginTop: 5 }}>
                            <Text style={{ color: '#999999', fontSize: 12, marginRight: 15 }}>2:30 PM</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: -5 }}>
                            <Image source={require('../../assets/images/user2.png')}
                                style={{ width: 70, height: 70, borderRadius: 100, marginLeft: 25 }} />
                            <View style={{ marginLeft: -15, height: 15, width: 15, backgroundColor: '#5AC8FA', borderRadius: 100 }}></View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 50 }}>
                                <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#000000' }}>Maria</Text>
                                <Text style={{ fontSize: 14, color: '#04DE71' }}>+ ₹ 0.00</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ marginBottom: 40 }}></View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default chatHistoryScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EEEEEE"
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