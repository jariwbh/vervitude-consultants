import React, { Component } from 'react'
import { Text, View, SafeAreaView, Dimensions, Image, TouchableOpacity, TextInput, ScrollView, BackHandler } from 'react-native'
import Octicons from 'react-native-vector-icons/Octicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import * as STYLES from './styles';
import MenuButton from '../../components/MenuButton/MenuButton'
import SwitchButton from '../../components/SwittchButton/SwitchButton'
import ChatMenu from '../../components/ChatMenu/ChatMenu'
import { MYPROFILESCREEN } from '../../context/screen/screenName'
import { CHATHISTORYSCREEN } from '../../context/screen/screenName'

export default class homeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
        };
        this._unsubscribeSiFocus = this.props.navigation.addListener('focus', e => {
            BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
        });

        this._unsubscribeSiBlur = this.props.navigation.addListener('blur', e => {
            BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton,
            );
        });
    }

    componentWillUnmount() {
        this._unsubscribeSiFocus();
        this._unsubscribeSiBlur();
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    //mobile back press to call
    handleBackButton = () => {
        BackHandler.exitApp()
        return true;
    }

    render() {
        return (
            <SafeAreaView style={STYLES.styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: "center", justifyContent: 'center', marginTop: hp('2%') }}>
                        <View style={{ marginLeft: hp('8%') }}>
                            <MenuButton onPress={() => { this.props.navigation.navigate(MYPROFILESCREEN) }} />
                        </View>
                        <View style={{ marginLeft: hp('3%') }}>
                            <SwitchButton />
                        </View>
                        <View style={{ marginLeft: hp('25%') }}>
                            <ChatMenu onPress={() => { this.props.navigation.navigate(CHATHISTORYSCREEN) }} />
                        </View>
                    </View>
                    <View style={{ marginTop: hp('3%') }}></View>
                    <TouchableOpacity style={STYLES.styles.filterBtn} onPress={() => { }} >
                        <Octicons size={20} name="settings" color="#FFFFFF" style={{ marginRight: wp('2%') }} />
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
                            <Text style={{ fontSize: hp('3%'), flex: 1, color: '#34A853', marginTop: hp('2%'), marginLeft: wp('5%') }}>₹ 5000.20</Text>
                        </View>

                        <View style={STYLES.styles.cardViewlastHistory}>
                            <View>
                                <Text style={{ marginTop: hp('1%'), marginLeft: wp('10%'), fontWeight: 'bold', fontSize: hp('2.5%'), color: '#555555' }}>Top Earners Of the Week</Text>
                            </View>

                            <View style={{ marginTop: hp('2%'), flexDirection: 'row' }}>
                                <View style={{ flex: 1, height: 1, backgroundColor: '#EEEEEE' }}></View>
                            </View>
                            <View style={{ justifyContent: 'space-evenly', flexDirection: 'row', marginLeft: hp('2%'), marginTop: hp('1%') }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ backgroundColor: '#00D9CE', width: 20, height: 20, marginLeft: hp('-5%'), marginTop: hp('0.5%'), marginRight: hp('3%'), alignItems: 'center', justifyContent: 'center', borderRadius: wp('15%') }}>
                                        <Text style={{ fontSize: hp('2.5%'), color: '#FFFFFF' }}>1</Text>
                                    </View>
                                    <Text style={{ fontSize: hp('2.5%'), color: '#555555' }}>George</Text>
                                </View>
                                <Text style={{ fontSize: hp('2.5%'), color: '#00D9CE' }}>+105%</Text>
                                <Text style={{ fontSize: hp('2.5%'), color: '#34A853' }}>₹ 30k+</Text>
                            </View>

                            <View style={{ marginTop: hp('2%'), flexDirection: 'row' }}>
                                <View style={{ flex: 1, height: 1, backgroundColor: '#EEEEEE' }}></View>
                            </View>
                            <View style={{ justifyContent: 'space-evenly', flexDirection: 'row', marginLeft: hp('2%'), marginTop: hp('1%') }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ backgroundColor: '#00D9CE', width: 20, height: 20, marginLeft: hp('-5%'), marginTop: hp('0.5%'), marginRight: hp('3%'), alignItems: 'center', justifyContent: 'center', borderRadius: wp('15%') }}>
                                        <Text style={{ fontSize: hp('2.5%'), color: '#FFFFFF' }}>2</Text>
                                    </View>
                                    <Text style={{ fontSize: hp('2.5%'), color: '#555555' }}>George</Text>
                                </View>
                                <Text style={{ fontSize: hp('2.5%'), color: '#00D9CE' }}>+105%</Text>
                                <Text style={{ fontSize: hp('2.5%'), color: '#34A853' }}>₹ 30k+</Text>
                            </View>

                            <View style={{ marginTop: hp('2%'), flexDirection: 'row' }}>
                                <View style={{ flex: 1, height: 1, backgroundColor: '#EEEEEE' }}></View>
                            </View>
                            <View style={{ justifyContent: 'space-evenly', flexDirection: 'row', marginLeft: hp('2%'), marginTop: hp('1%') }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ backgroundColor: '#00D9CE', width: 20, height: 20, marginLeft: hp('-5%'), marginTop: hp('0.5%'), marginRight: hp('3%'), alignItems: 'center', justifyContent: 'center', borderRadius: wp('15%') }}>
                                        <Text style={{ fontSize: hp('2.5%'), color: '#FFFFFF' }}>3</Text>
                                    </View>
                                    <Text style={{ fontSize: hp('2.5%'), color: '#555555' }}>George</Text>
                                </View>
                                <Text style={{ fontSize: hp('2.5%'), color: '#00D9CE' }}>+105%</Text>
                                <Text style={{ fontSize: hp('2.5%'), color: '#34A853' }}>₹ 30k+</Text>
                            </View>

                            <View style={{ marginTop: hp('2%'), flexDirection: 'row' }}>
                                <View style={{ flex: 1, height: 1, backgroundColor: '#EEEEEE' }}></View>
                            </View>
                            <View style={{ justifyContent: 'space-evenly', flexDirection: 'row', marginLeft: hp('2%'), marginTop: hp('1%') }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ backgroundColor: '#00D9CE', width: 20, height: 20, marginLeft: hp('-5%'), marginTop: hp('0.5%'), marginRight: hp('3%'), alignItems: 'center', justifyContent: 'center', borderRadius: wp('15%') }}>
                                        <Text style={{ fontSize: hp('2.5%'), color: '#FFFFFF' }}>4</Text>
                                    </View>
                                    <Text style={{ fontSize: hp('2.5%'), color: '#555555' }}>George</Text>
                                </View>
                                <Text style={{ fontSize: hp('2.5%'), color: '#00D9CE' }}>+105%</Text>
                                <Text style={{ fontSize: hp('2.5%'), color: '#34A853' }}>₹ 30k+</Text>
                            </View>

                            <View style={{ marginTop: hp('2%'), flexDirection: 'row' }}>
                                <View style={{ flex: 1, height: 1, backgroundColor: '#EEEEEE' }}></View>
                            </View>
                            <View style={{ justifyContent: 'space-evenly', flexDirection: 'row', marginLeft: hp('2%'), marginTop: hp('1%') }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ backgroundColor: '#00D9CE', width: 20, height: 20, marginLeft: hp('-5%'), marginTop: hp('0.5%'), marginRight: hp('3%'), alignItems: 'center', justifyContent: 'center', borderRadius: wp('15%') }}>
                                        <Text style={{ fontSize: hp('2.5%'), color: '#FFFFFF' }}>5</Text>
                                    </View>
                                    <Text style={{ fontSize: hp('2.5%'), color: '#555555' }}>George</Text>
                                </View>
                                <Text style={{ fontSize: hp('2.5%'), color: '#00D9CE' }}>+105%</Text>
                                <Text style={{ fontSize: hp('2.5%'), color: '#34A853' }}>₹ 30k+</Text>
                            </View>

                            <View style={{ marginTop: hp('2%'), flexDirection: 'row' }}>
                                <View style={{ flex: 1, height: 1, backgroundColor: '#EEEEEE' }}></View>
                            </View>
                            <View style={{ justifyContent: 'space-evenly', flexDirection: 'row', marginLeft: hp('2%'), marginTop: hp('1%') }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ backgroundColor: '#00D9CE', width: 20, height: 20, marginLeft: hp('-5%'), marginTop: hp('0.5%'), marginRight: hp('3%'), alignItems: 'center', justifyContent: 'center', borderRadius: wp('15%') }}>
                                        <Text style={{ fontSize: hp('2.5%'), color: '#FFFFFF' }}>6</Text>
                                    </View>
                                    <Text style={{ fontSize: hp('2.5%'), color: '#555555' }}>George</Text>
                                </View>
                                <Text style={{ fontSize: hp('2.5%'), color: '#00D9CE' }}>+105%</Text>
                                <Text style={{ fontSize: hp('2.5%'), color: '#34A853' }}>₹ 30k+</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}
