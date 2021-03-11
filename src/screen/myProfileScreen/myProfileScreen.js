import React, { Component } from 'react'
import { Text, View, Dimensions, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import * as STYLES from './styles';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default class myProfileScreen extends Component {
    render() {
        return (
            <SafeAreaView style={STYLES.styles.container}>
                <View>
                    <Text>hello</Text>
                </View>
                <View style={STYLES.styles.cardview}>
                    <View style={{ justifyContent: 'space-around', flexDirection: 'row', marginTop: 5 }}>
                        <View style={{ marginTop: 20 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Protima Bannerjee</Text>
                            <Text>#Protima123</Text>
                        </View>
                        <Image source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }}
                            style={{ alignItems: 'center', height: 100, width: 100, marginTop: 2, borderRadius: 50 }}
                        />
                    </View>
                    <TouchableOpacity style={{ flexDirection: 'row', marginTop: 20 }}>
                        <EvilIcons name="user" size={24} color='#808080' style={{ marginLeft: 15 }} />
                        <Text style={{ marginLeft: 20 }}>My Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', marginTop: 20 }}>
                        <EvilIcons name="user" size={24} color='#808080' style={{ marginLeft: 15 }} />
                        <Text style={{ marginLeft: 20 }}>My conversation</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', marginTop: 20 }}>
                        <MaterialIcons name="payment" size={24} color='#808080' style={{ marginLeft: 15 }} />
                        <Text style={{ marginLeft: 20 }}>Payments</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', marginTop: 20 }}>
                        <AntDesign name="heart" size={24} color='#808080' style={{ marginLeft: 15 }} />
                        <Text style={{ marginLeft: 20 }}>Favorite Topic</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', marginTop: 180 }}>
                        <AntDesign name="logout" size={24} color='#808080' style={{ marginLeft: 15 }} />
                        <Text style={{ marginLeft: 20 }}>Log Out</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginBottom: 10 }}></View>
            </SafeAreaView>
        )
    }
}
