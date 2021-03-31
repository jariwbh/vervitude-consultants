import React, { Component } from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView, Modal, TextInput } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen';
import MenuButton from '../../components/ProfileMenuButton/ProfileMenuButton';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as SCREEN from '../../context/screen/screenName';
import * as STYLES from './styles';

export default class myProfileScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            showModalVisible: false,
            showMessageModalVisible: false
        };
    }
    showModalVisible = (visible) => {
        this.setState({ showModalVisible: visible });
    }

    showModalVisibleSubmit = (visible) => {
        this.setState({ showModalVisible: visible });
        this.showMessageModalVisible(true);
    }

    showMessageModalVisible = (visible) => {
        this.setState({ showMessageModalVisible: visible });
    }

    render() {
        const { showModalVisible, showMessageModalVisible } = this.state;
        return (
            <SafeAreaView style={STYLES.styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View>
                        <View style={{ marginTop: hp('5%'), justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row' }} >
                            <View style={{ marginRight: hp('2%') }}>
                                <MenuButton onPress={() => { this.props.navigation.navigate(SCREEN.HOMESCREEN) }} />
                            </View>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate(SCREEN.NOTIFICATIONSCREEN)}>
                                <Image source={require('../../assets/images/notificationicon.png')} style={{ height: 30, width: 25 }} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ height: hp('7'), width: wp('35%'), backgroundColor: '#FFFFFF', flexDirection: 'row', borderRadius: hp('3%'), alignItems: 'center', justifyContent: 'center', marginLeft: wp('20%') }}>
                                <Text style={{ fontSize: hp('2.8%'), color: '#5AC8FA' }}>5324.00</Text>
                                <View style={{ width: 25, height: 25, backgroundColor: '#5AC8FA', alignItems: 'center', marginLeft: hp('2%'), borderRadius: hp('3%'), justifyContent: 'center' }}>
                                    <FontAwesome name="rupee" size={20} color='#FFFFFF' />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={STYLES.styles.centerView}>
                        <View style={STYLES.styles.cardview}>
                            <View style={{ justifyContent: 'space-around', flexDirection: 'row', marginTop: hp('3%') }}>
                                <View>
                                    <Text style={{ fontWeight: 'bold', fontSize: hp('3%') }}>Ranjan  Pathak</Text>
                                    <Text>#protima123</Text>
                                </View>
                                <Image source={require('../../assets/images/user3.png')}
                                    style={STYLES.styles.profileImage}
                                />
                            </View>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate(SCREEN.EDITSCREEN)}
                                style={{ flexDirection: 'row', marginTop: hp('1%') }}>
                                <Image source={require('../../assets/images/profileicon.png')} style={{ height: 30, width: 30, marginLeft: hp('3%') }} />
                                <Text style={{ marginLeft: wp('4%'), color: '#4D4D4D', fontSize: hp('2.5%') }}>My Profile</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate(SCREEN.CHATHISTORYSCREEN)}
                                style={{ flexDirection: 'row', marginTop: hp('3.5%') }}>
                                <Image source={require('../../assets/images/conversation.png')} style={{ height: 30, width: 30, marginLeft: hp('3%') }} />
                                <Text style={{ marginLeft: wp('4%'), color: '#4D4D4D', fontSize: hp('2.5%') }}>My conversations</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: hp('4%'), marginBottom: hp('1%') }}
                                onPress={() => this.props.navigation.navigate(SCREEN.MYEARINGSCREEN)}>
                                <Image source={require('../../assets/images/Group.png')} style={{ height: 20, width: 30, marginLeft: hp('3%') }} />
                                <Text style={{ marginLeft: wp('4%'), color: '#4D4D4D', fontSize: hp('2.5%') }}>My Earnings</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flexDirection: 'row', marginTop: hp('3.2%') }}
                                onPress={() => this.props.navigation.navigate(SCREEN.SELECTCATEGORYSCREEN)}>
                                <Image source={require('../../assets/images/categories.png')} style={{ height: 30, width: 30, marginLeft: hp('3%') }} />
                                <Text style={{ marginLeft: wp('4%'), color: '#4D4D4D', fontSize: hp('2.5%') }}>My Categories</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flexDirection: 'row', marginTop: hp('3.5%') }} onPress={() => this.showModalVisible(true)}>
                                <Image source={require('../../assets/images/Help.png')} style={{ height: 30, width: 30, marginLeft: hp('3%') }} />
                                <Text style={{ marginLeft: wp('4%'), color: '#4D4D4D', fontSize: hp('2.5%') }}>Help & Support</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flexDirection: 'row', marginTop: hp('3.5%') }} onPress={() => this.props.navigation.navigate(SCREEN.INVITESCREEN)}>
                                <Image source={require('../../assets/images/invite.png')} style={{ height: 30, width: 30, marginLeft: hp('3%') }} />
                                <Text style={{ marginLeft: wp('4%'), color: '#4D4D4D', fontSize: hp('2.5%') }}>Invite a Consultant</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flexDirection: 'row', marginTop: hp('15%') }} onPress={() => this.props.navigation.navigate(SCREEN.LOGINSCREEN)}>
                                <Image source={require('../../assets/images/logout.png')} style={{ height: 25, width: 30, marginLeft: hp('3%') }} />
                                <Text style={{ marginLeft: wp('4%'), color: '#4D4D4D', fontSize: hp('2.5%') }}>LogOut</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginBottom: hp('5%') }}></View>
                </ScrollView>

                {/* Help & Support model Pop */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={showModalVisible}
                    onRequestClose={() => { this.showModalVisible(!showModalVisible) }}
                >

                    <View style={STYLES.styles.centerView}>
                        <View style={STYLES.styles.modalView}>
                            <View style={{ marginTop: hp('5%') }}></View>
                            <View style={STYLES.styles.inputView}>
                                <TextInput
                                    style={STYLES.styles.TextInput}
                                    placeholder="Subject"
                                    type='clear'
                                    returnKeyType="next"
                                    placeholderTextColor="#999999"
                                />
                            </View>

                            <View style={STYLES.styles.textAreainputView}>
                                <TextInput
                                    style={STYLES.styles.TextareaInput}
                                    placeholder="Write Your Descripation"
                                    type='clear'
                                    returnKeyType="done"
                                    placeholderTextColor="#999999"
                                    blurOnSubmit={false}
                                    numberOfLines={3}
                                    multiline={true}
                                />
                            </View>

                        </View>
                        <View style={{ marginTop: hp('2%'), flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => { this.showModalVisibleSubmit(!showModalVisible) }}
                                style={STYLES.styles.savebtn}>
                                <Text style={{ fontSize: hp('2%'), color: '#FFFFFF' }}>Submit</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.showModalVisible(!showModalVisible) }}
                                style={STYLES.styles.cancelbtn}>
                                <Text style={{ fontSize: hp('2%'), color: '#000000' }}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                {/* message model Pop */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={showMessageModalVisible}
                    onRequestClose={() => { this.showMessageModalVisible(!showMessageModalVisible) }}
                >
                    <View style={STYLES.styles.centerView}>
                        <View style={STYLES.styles.msgModalView}>
                            <Image source={require('../../assets/images/smileicon.png')} style={{ marginTop: hp('2%'), height: 40, width: 40 }} />
                            <Text style={{ marginTop: hp('2%'), fontSize: hp('2%') }}>Sorry to hear about the issue</Text>
                            <Text style={{ fontSize: hp('2%') }}>Your quiry has been Submit</Text>
                            <Text style={{ marginTop: hp('2%'), fontSize: hp('2%') }}>You will hear from us very soon</Text>
                        </View>
                        <View style={{ justifyContent: 'center', flexDirection: 'row', marginTop: hp('2%') }}>
                            <TouchableOpacity onPress={() => { this.showMessageModalVisible(!showMessageModalVisible) }}
                                style={STYLES.styles.cancelbtn}>
                                <Text style={{ fontSize: hp('2%'), color: '#000000' }}>Ok</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </SafeAreaView>
        )
    }
}


