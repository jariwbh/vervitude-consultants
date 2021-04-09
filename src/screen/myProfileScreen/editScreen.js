import React from 'react'
import { View, Text, Image, SafeAreaView, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as SCREEN from '../../context/screen/screenName';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import * as STYLE from './styles';

const editScreen = (props) => {
    return (
        <SafeAreaView style={STYLE.Editstyles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 30 }}>
                    <View style={{ justifyContent: 'flex-start' }}>
                        <TouchableOpacity onPress={() => { props.navigation.goBack(null) }}>
                            <AntDesign name="arrowleft" size={24} color='#FFFFFF' style={{ marginLeft: 15 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ justifyContent: 'flex-end' }}>
                        <TouchableOpacity
                            onPress={() => { props.navigation.navigate(SCREEN.DOCUMENTSCREEN) }}
                            style={STYLE.Editstyles.submitbtn}>
                            <Text style={{ fontSize: 14, color: '#5AC8FA' }}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={STYLE.Editstyles.profileview}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../../assets/images/profile.png')}
                                style={{ marginTop: -50, width: 100, height: 100, borderRadius: 100 }} />
                            <TouchableOpacity style={{ marginTop: -60 }}>
                                <Feather name="camera" size={24} color='#FFFFFF' />
                            </TouchableOpacity>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 60, marginBottom: 15 }}>
                            <TouchableOpacity style={STYLE.Editstyles.generalinfitext}>
                                <Text style={{ fontSize: 16, textAlign: 'center', color: '#FFFFFF' }}>General Information</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginLeft: 10, marginTop: 5 }}>
                            <Text style={{ fontSize: 12 }}>First Name</Text>
                        </View>
                        <View style={STYLE.Editstyles.inputView}>
                            <TextInput
                                style={STYLE.Editstyles.TextInputbold}
                                placeholder="Ranjan"
                                type='clear'
                                returnKeyType="next"
                                placeholderTextColor="#000000"
                                blurOnSubmit={false}
                                defaultValue="Ranjan"
                            />
                        </View>

                        <View style={{ marginLeft: 10, marginTop: 5 }}>
                            <Text style={{ fontSize: 12 }}>Last Name</Text>
                        </View>
                        <View style={STYLE.Editstyles.inputView}>
                            <TextInput
                                style={STYLE.Editstyles.TextInputbold}
                                placeholder="Pathak"
                                type='clear'
                                returnKeyType="next"
                                placeholderTextColor="#000000"
                                blurOnSubmit={false}
                                defaultValue="Pathak"
                            />
                        </View>

                        <View style={{ marginLeft: 10, marginTop: 5 }}>
                            <Text style={{ fontSize: 12 }}>User Tag</Text>
                        </View>
                        <View style={STYLE.Editstyles.inputView}>
                            <TextInput
                                style={STYLE.Editstyles.TextInput}
                                placeholder="#pathak"
                                type='clear'
                                returnKeyType="next"
                                placeholderTextColor="#000000"
                                blurOnSubmit={false}
                                defaultValue="#pathak"
                            />
                        </View>

                        <View style={{ marginLeft: 10, marginTop: 5 }}>
                            <Text style={{ fontSize: 12 }}>Phone Number</Text>
                        </View>
                        <View style={STYLE.Editstyles.inputView}>
                            <TextInput
                                style={STYLE.Editstyles.TextInput}
                                placeholder="+91 9923719601"
                                type='clear'
                                returnKeyType="next"
                                placeholderTextColor="#000000"
                                blurOnSubmit={false}
                                defaultValue="+91 9923719601"
                            />
                        </View>

                        <View style={{ marginLeft: 10, marginTop: 5 }}>
                            <Text style={{ fontSize: 12 }}>Email Address</Text>
                        </View>
                        <View style={STYLE.Editstyles.inputView}>
                            <TextInput
                                style={STYLE.Editstyles.TextInput}
                                placeholder="ranjanpathak@gmail.com"
                                type='clear'
                                returnKeyType="next"
                                placeholderTextColor="#000000"
                                blurOnSubmit={false}
                                defaultValue="ranjanpathak@gmail.com"
                            />
                        </View>

                        <View style={{ marginLeft: 10, marginTop: 5 }}>
                            <Text style={{ fontSize: 12 }}>Location</Text>
                        </View>
                        <View style={STYLE.Editstyles.inputView}>
                            <TextInput
                                style={STYLE.Editstyles.TextInput}
                                placeholder="Mumbai"
                                type='clear'
                                returnKeyType="next"
                                placeholderTextColor="#000000"
                                blurOnSubmit={false}
                                defaultValue="Mumbai"
                            />
                            <Ionicons name="location" size={24} color='#000000' />
                        </View>

                        <View style={{ marginLeft: 10, marginTop: 5 }}>
                            <Text style={{ fontSize: 12 }}>About</Text>
                        </View>
                        <View style={STYLE.Editstyles.textAreainputView}>
                            <TextInput
                                style={STYLE.Editstyles.TextareaInput}
                                placeholder="Ranjan is UX Designer working with clients"
                                type='clear'
                                returnKeyType="done"
                                placeholderTextColor="#000000"
                                blurOnSubmit={false}
                                numberOfLines={3}
                                multiline={true}
                                defaultValue="Ranjan is UX Designer working with clients all over the world from last 10 years. Ranjan has worked with more then 100 brands. "
                            />
                        </View>
                        <View style={{ flexDirection: 'column', marginLeft: 20, marginTop: 5 }}>
                            <Text style={{ fontSize: 14 }}>Add Brands</Text>
                        </View>

                        <View style={{ justifyContent: 'space-around', flexDirection: 'row', marginTop: 15 }}>
                            <TouchableOpacity style={STYLE.Editstyles.brandstyle}>
                                <Image source={require('../../assets/images/a1.png')} style={{
                                    width: 80, height: 80, borderRadius: 100, borderColor: '#AAAAAA', borderWidth: 1
                                }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginLeft: -70 }}>
                                <AntDesign name="closecircleo" size={20} color='#000000' style={{ backgroundColor: '#ffffff', borderRadius: 100 }} />
                            </TouchableOpacity>

                            <TouchableOpacity style={STYLE.Editstyles.brandstyle}>
                                <Image source={require('../../assets/images/b1.png')} style={{ width: 80, height: 80, borderRadius: 100, borderColor: '#AAAAAA', borderWidth: 1 }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginLeft: -70 }}>
                                <AntDesign name="closecircleo" size={20} color='#000000' style={{ backgroundColor: '#ffffff', borderRadius: 100 }} />
                            </TouchableOpacity>

                            <TouchableOpacity style={STYLE.Editstyles.brandstyle}>
                                <Image source={require('../../assets/images/c1.png')} style={{ width: 80, height: 80, borderRadius: 100, borderColor: '#AAAAAA', borderWidth: 1 }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginLeft: -70 }}>
                                <AntDesign name="closecircleo" size={20} color='#000000' style={{ backgroundColor: '#ffffff', borderRadius: 100 }} />
                            </TouchableOpacity>
                        </View>

                        <View style={{ justifyContent: 'space-around', flexDirection: 'row', marginTop: 15 }}>
                            <TouchableOpacity style={STYLE.Editstyles.brandstyle}>
                                <Image source={require('../../assets/images/d1.png')} style={{
                                    width: 80, height: 80, borderRadius: 100, borderColor: '#AAAAAA', borderWidth: 1
                                }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginLeft: -70 }}>
                                <AntDesign name="closecircleo" size={20} color='#000000' style={{ backgroundColor: '#ffffff', borderRadius: 100 }} />
                            </TouchableOpacity>

                            <TouchableOpacity style={STYLE.Editstyles.brandstyle}>
                                <Image source={require('../../assets/images/e1.png')} style={{ width: 80, height: 80, borderRadius: 100, borderColor: '#AAAAAA', borderWidth: 1 }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginLeft: -70 }}>
                                <AntDesign name="closecircleo" size={20} color='#000000' style={{ backgroundColor: '#ffffff', borderRadius: 100 }} />
                            </TouchableOpacity>

                            <TouchableOpacity style={STYLE.Editstyles.brandstyle}>
                                <Image source={require('../../assets/images/PLUS.png')} style={{ width: 80, height: 80, borderRadius: 100, borderColor: '#AAAAAA', borderWidth: 1 }} />
                            </TouchableOpacity>
                        </View>

                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
                            <TouchableOpacity onPress={() => { props.navigation.navigate(SCREEN.DOCUMENTSCREEN) }} style={STYLE.Editstyles.generalinfitext}>
                                <Text style={{ fontSize: 16, textAlign: 'center', color: '#FFFFFF' }}>Document Information</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                            <TouchableOpacity onPress={() => { props.navigation.navigate(SCREEN.BANKINFOSCREEN) }} style={STYLE.Editstyles.generalinfitext}>
                                <Text style={{ fontSize: 16, textAlign: 'center', color: '#FFFFFF' }}>Banking Information</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginBottom: 20 }}></View>
                    </View>
                    <View style={{ marginBottom: 20 }}></View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default editScreen;
