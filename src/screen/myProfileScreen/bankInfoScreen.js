import React from 'react'
import { View, Text, Image, SafeAreaView, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as SCREEN from '../../context/screen/screenName';
import Feather from 'react-native-vector-icons/Feather';
import * as STYLE from './styles';

const bankInfoScreen = (props) => {
    return (
        <SafeAreaView style={STYLE.Bankstyles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 30 }}>
                    <View style={{ justifyContent: 'flex-start' }}>
                        <TouchableOpacity onPress={() => { props.navigation.goBack(null) }}>
                            <AntDesign name="arrowleft" size={24} color='#FFFFFF' style={{ marginLeft: 15 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ justifyContent: 'flex-end' }}>
                        <TouchableOpacity
                            onPress={() => { props.navigation.navigate(SCREEN.MYPROFILESCREEN) }}
                            style={STYLE.Bankstyles.submitbtn}>
                            <Text style={{ fontSize: 14, color: '#5AC8FA' }}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={STYLE.Bankstyles.profileview}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../../assets/images/profile.png')}
                                style={{ marginTop: -50, width: 100, height: 100, borderRadius: 100 }} />
                            <TouchableOpacity style={{ marginTop: -60 }}>
                                <Feather name="camera" size={24} color='#FFFFFF' />
                            </TouchableOpacity>
                        </View>

                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 60 }}>
                            <TouchableOpacity style={STYLE.Bankstyles.generalinfitext} onPress={() => { props.navigation.navigate(SCREEN.EDITSCREEN) }}>
                                <Text style={{ fontSize: 16, textAlign: 'center', color: '#FFFFFF' }}>General Information</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                            <TouchableOpacity style={STYLE.Bankstyles.generalinfitext} onPress={() => { props.navigation.navigate(SCREEN.DOCUMENTSCREEN) }}>
                                <Text style={{ fontSize: 16, textAlign: 'center', color: '#FFFFFF' }}>Document Information</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                            <TouchableOpacity style={STYLE.Bankstyles.generalinfitext} >
                                <Text style={{ fontSize: 16, textAlign: 'center', color: '#FFFFFF' }}>Banking Information</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginLeft: 15, marginTop: 15 }}>
                            <Text style={{ fontSize: 12 }}>Name on Account</Text>
                        </View>
                        <View style={STYLE.Bankstyles.inputView}>
                            <TextInput
                                style={STYLE.Bankstyles.TextInput}
                                placeholder="Ranjan Pathak"
                                type='clear'
                                returnKeyType="next"
                                placeholderTextColor="#000000"
                                blurOnSubmit={false}
                                defaultValue="Ranjan Pathak"
                            />

                        </View>
                        <View style={{ marginLeft: 15, marginTop: 15 }}>
                            <Text style={{ fontSize: 12 }}>Bank Name</Text>
                        </View>
                        <View style={STYLE.Bankstyles.inputView}>
                            <TextInput
                                style={STYLE.Bankstyles.TextInput}
                                placeholder="ICIC Bank"
                                type='clear'
                                returnKeyType="next"
                                placeholderTextColor="#000000"
                                blurOnSubmit={false}
                                defaultValue="ICIC Bank"
                            />

                        </View>
                        <View style={{ marginLeft: 15, marginTop: 15 }}>
                            <Text style={{ fontSize: 12 }}>IFSC Code</Text>
                        </View>
                        <View style={STYLE.Bankstyles.inputView}>
                            <TextInput
                                style={STYLE.Bankstyles.TextInput}
                                placeholder="ICIC0323"
                                type='clear'
                                returnKeyType="next"
                                placeholderTextColor="#000000"
                                blurOnSubmit={false}
                                defaultValue="ICIC0323"
                            />
                            <TouchableOpacity>
                                <Feather name="search" size={20} color='#555555' style={{ marginRight: 10 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginLeft: 15, marginTop: 15 }}>
                            <Text style={{ fontSize: 12 }}>Account Type</Text>
                        </View>
                        <View style={{ marginTop: 5, flexDirection: 'row', marginLeft: 20 }}>
                            <TouchableOpacity style={{ width: 100, backgroundColor: '#80d4ff', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 100, marginRight: 10 }}>
                                <Text style={{ color: '#000000', fontSize: 12 }}>Saving</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: 100, backgroundColor: '#F4F4F4', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 100 }}>
                                <Text style={{ color: '#000000', fontSize: 12 }}>Currrent</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginLeft: 15, marginTop: 15 }}>
                            <Text style={{ fontSize: 12 }}>Account Number</Text>
                        </View>
                        <View style={STYLE.Bankstyles.inputView}>
                            <TextInput
                                style={STYLE.Bankstyles.TextInput}
                                placeholder="1234567890"
                                type='clear'
                                returnKeyType="next"
                                placeholderTextColor="#000000"
                                blurOnSubmit={false}
                                defaultValue="1234567890"
                            />

                        </View>
                        <View style={{ marginLeft: 15, marginTop: 15 }}>
                            <Text style={{ fontSize: 12 }}>Repeat Account Number</Text>
                        </View>
                        <View style={STYLE.Bankstyles.inputView}>
                            <TextInput
                                style={STYLE.Bankstyles.TextInput}
                                placeholder="1234567890"
                                type='clear'
                                returnKeyType="next"
                                placeholderTextColor="#000000"
                                blurOnSubmit={false}
                                defaultValue="1234567890"
                            />

                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                            <View style={STYLE.Bankstyles.ChequeBoxStyle}>
                                <TouchableOpacity>
                                    <Feather name="camera" size={24} color='#000000' />
                                </TouchableOpacity>
                                <Text style={{ color: '#000000', fontSize: 12 }}>CANCELD CHEQUE</Text>
                            </View>
                            <View style={{ marginBottom: 25 }}></View>
                        </View>
                    </View>
                </View>
                <View style={{ marginBottom: 20 }}></View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default bankInfoScreen

