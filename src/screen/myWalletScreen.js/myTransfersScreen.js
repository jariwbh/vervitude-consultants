import React, { Component } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import * as STYLES from './styles';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'


export default class myTransfersScreen extends Component {
    render() {
        return (
            <SafeAreaView style={STYLES.styles.container}>
                <View>
                    <View style={{ marginTop: hp('3%'), justifyContent: 'space-around', flexDirection: 'row' }}>
                        <TouchableOpacity>
                            <AntDesign name="arrowleft" size={40} color='#00D9CE' style={{ marginLeft: hp('0%') }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('myTransfersScreen') }}
                            style={{ width: wp('30%'), backgroundColor: '#34a853', flexDirection: 'row', borderRadius: hp('3%'), alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: '#FFFFFF', }}>5324.00</Text>
                            <View style={{ width: 25, height: 25, backgroundColor: '#FFFFFF', alignItems: 'center', marginLeft: hp('2%'), borderRadius: hp('3%'), justifyContent: 'center' }}>
                                <FontAwesome name="rupee" size={20} color='#34a853' style={{ marginLeft: hp('0%') }} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}
