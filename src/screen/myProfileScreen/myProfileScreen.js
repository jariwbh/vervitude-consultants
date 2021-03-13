import React, { Component } from 'react'
import { Text, View, Dimensions, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import * as STYLES from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default class myProfileScreen extends Component {
    render() {
        return (
            <SafeAreaView style={STYLES.styles.container}>
                <View>
                    <Text>hello</Text>
                </View>
                <View style={STYLES.styles.cardview}>
                    <View style={STYLES.styles.profileview}>
                        <View style={{ marginTop: 20 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Protima Bannerjee</Text>
                            <Text>#Protima123</Text>
                        </View>
                        <Image source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }}
                            style={{ alignItems: 'center', height: 70, width: 70, marginTop: 2, borderRadius: 50 }}
                        />
                    </View>
                    <TouchableOpacity style={{ flexDirection: 'row', marginTop: 10 }}>
                        <FontAwesome name="user-circle-o" size={24} color='#36D3FF' style={{ marginLeft: 15 }} />
                        <Text style={{ marginLeft: 20 }}>My Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', marginTop: 10 }}>
                        <MaterialCommunityIcons name="circle-half-full" size={24} color='#36D3FF' style={{ marginLeft: 15 }} />
                        <Text style={{ marginLeft: 20 }}>Mode Settings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Ionicons name="ios-chatbubble-ellipses" size={24} color='#36D3FF' style={{ marginLeft: 15 }} />
                        <Text style={{ marginLeft: 20 }}>My conversation</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Ionicons name="card" size={24} color='#36D3FF' style={{ marginLeft: 15 }} />
                        <Text style={{ marginLeft: 20 }}>My Spends</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', marginTop: 10 }}>
                        <AntDesign name="heart" size={24} color='#36D3FF' style={{ marginLeft: 15 }} />
                        <Text style={{ marginLeft: 20 }}>Favorite Topic</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', marginTop: 10 }}>
                        <FontAwesome name="question-circle" size={24} color='#36D3FF' style={{ marginLeft: 15 }} />
                        <Text style={{ marginLeft: 20 }}>Help & Support</Text>
                    </TouchableOpacity>
                    <View>
                        <TouchableOpacity style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Image source={require('../../assets/images/Vector3.png')} style={{ height: 20, width: 20, marginLeft: 15 }} />
                            {/* <MaterialIcons name="payment" size={24} color='#36D3FF' style={{ marginLeft: 15 }} /> */}
                            <Text style={{ marginLeft: 20 }}>invite a Consultant</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{ flexDirection: 'row', marginTop: 10 }}>
                        <FontAwesome5 name="exclamation-triangle" size={24} color='#36D3FF' style={{ marginLeft: 15 }} />
                        <Text style={{ marginLeft: 20 }}>My Disputes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Image source={require('../../assets/images/2.png')} style={{ height: 20, width: 20, marginLeft: 15 }} />
                        <Text style={{ marginLeft: 20 }}>Vervitude</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', marginTop: 10 }}>
                        <AntDesign name="logout" size={20} color='#36D3FF' style={{ marginLeft: 15 }} />
                        <Text style={{ marginLeft: 20 }}>Log Out</Text>
                    </TouchableOpacity>
                </View>
                {/* <View style={{ marginBottom: 10 }}></View> */}
            </SafeAreaView>
        )
    }
}
