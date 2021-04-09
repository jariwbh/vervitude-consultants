import React from 'react'
import { View, Text, Image, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as SCREEN from '../../context/screen/screenName';
import * as STYLE from './styles'

const selectCategoryScreen = (props) => {
    return (
        <SafeAreaView style={STYLE.styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 30 }}>

                    <View style={{ justifyContent: 'flex-start' }}>
                        <TouchableOpacity onPress={() => props.navigation.goBack(null)}>
                            <AntDesign name="arrowleft" color="#5AC8FA" size={24} style={{ marginLeft: 15 }} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ justifyContent: 'flex-end' }}>
                        <TouchableOpacity onPress={() => { props.navigation.navigate(SCREEN.MYPROFILESCREEN) }}
                            style={STYLE.styles.submitbtn}>
                            <Text style={{ fontSize: 14, color: '#5AC8FA' }}>Submit</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
                    <View style={STYLE.styles.graficview}>
                        <Text style={{ fontSize: 20, marginLeft: 20 }}>Graphic Design</Text>
                        <TouchableOpacity>
                            <AntDesign name="closecircleo" size={20} color='#000000' style={{ marginRight: 20 }} />
                        </TouchableOpacity>
                    </View>

                    <View style={STYLE.styles.uxview}>
                        <Text style={{ fontSize: 20, marginLeft: 20 }}>UX Design</Text>
                        <TouchableOpacity>
                            <AntDesign name="closecircleo" size={20} color='#000000' style={{ marginRight: 20 }} />
                        </TouchableOpacity>
                    </View>

                    <View style={STYLE.styles.interiorview}>
                        <Text style={{ fontSize: 20, marginLeft: 20 }}>Interior Design</Text>
                        <TouchableOpacity>
                            <AntDesign name="closecircleo" size={20} color='#000000' style={{ marginRight: 20 }} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ marginTop: 20, justifyContent: 'space-evenly', flexDirection: 'row' }}>
                    <View >
                        <TouchableOpacity>
                            <Image source={require('../../assets/images/icoutlinedesignservices.png')}
                                style={{ width: 70, height: 70, borderRadius: 10 }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 12, textAlign: 'center', marginTop: 5 }}>DESIGN</Text>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Image source={require('../../assets/images/icroundbusinesscenter.png')}
                                style={{ width: 70, height: 70, borderRadius: 10 }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 12, textAlign: 'center', marginTop: 5 }}>BUSINESS</Text>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Image source={require('../../assets/images/entypoareagraph.png')}
                                style={{ width: 70, height: 70, borderRadius: 10 }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 12, textAlign: 'center', marginTop: 5 }}>MARKETING</Text>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Image source={require('../../assets/images/entypoareagraph.png')}
                                style={{ width: 70, height: 70, borderRadius: 10 }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 12, textAlign: 'center', marginTop: 5 }}>MARKETING</Text>
                    </View>
                </View>
                <View style={{ marginTop: 20, justifyContent: 'space-evenly', flexDirection: 'row' }}>
                    <View >
                        <TouchableOpacity>
                            <Image source={require('../../assets/images/grommeticonstechnology.png')}
                                style={{ width: 70, height: 70, borderRadius: 10 }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 12, textAlign: 'center', marginTop: 5 }}>TECHNOLOGY</Text>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Image source={require('../../assets/images/icroundbusinesscenter.png')}
                                style={{ width: 70, height: 70, borderRadius: 10 }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 12, textAlign: 'center', marginTop: 5 }}>BUSINESS</Text>
                    </View>
                    <View >
                        <TouchableOpacity>
                            <Image source={require('../../assets/images/icoutlinedesignservices.png')}
                                style={{ width: 70, height: 70, borderRadius: 10 }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 12, textAlign: 'center', marginTop: 5 }}>DESIGN</Text>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Image source={require('../../assets/images/entypoareagraph.png')}
                                style={{ width: 70, height: 70, borderRadius: 10 }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 12, textAlign: 'center', marginTop: 5 }}>MARKETING</Text>
                    </View>
                </View>
                <View style={{ marginTop: 20, justifyContent: 'space-evenly', flexDirection: 'row' }}>
                    <View >
                        <TouchableOpacity>
                            <Image source={require('../../assets/images/grommeticonstechnology.png')}
                                style={{ width: 70, height: 70, borderRadius: 10 }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 12, textAlign: 'center', marginTop: 5 }}>TECHNOLOGY</Text>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Image source={require('../../assets/images/icroundbusinesscenter.png')}
                                style={{ width: 70, height: 70, borderRadius: 10 }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 12, textAlign: 'center', marginTop: 5 }}>BUSINESS</Text>
                    </View>
                    <View >
                        <TouchableOpacity>
                            <Image source={require('../../assets/images/icoutlinedesignservices.png')}
                                style={{ width: 70, height: 70, borderRadius: 10 }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 12, textAlign: 'center', marginTop: 5 }}>DESIGN</Text>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Image source={require('../../assets/images/entypoareagraph.png')}
                                style={{ width: 70, height: 70, borderRadius: 10 }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 12, textAlign: 'center', marginTop: 5 }}>MARKETING</Text>
                    </View>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
                    <TouchableOpacity style={STYLE.styles.applyview} onPress={() => props.navigation.navigate(SCREEN.MYPROFILESCREEN)}>
                        <Text style={{ fontSize: 18, color: '#FFFFFF' }}>Apply</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginBottom: 50 }}></View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default selectCategoryScreen;
