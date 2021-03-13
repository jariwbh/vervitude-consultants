import React, { Component } from 'react'
import { Text, View, ImageBackground, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import { FORGOTPASSWORDSCREEN, HOMESCREEN, REGISTERSCREEN } from '../../context/screen/screenName';
import * as STYLES from './styles';

export default class loginScreen extends Component {
    render() {
        return (
            <SafeAreaView style={STYLES.styles.container}>
                <ImageBackground
                    source={require('../../assets/images/background.png')}
                    style={STYLES.styles.backgroundImage}>
                    <Image source={require('../../assets/images/icon.png')} style={STYLES.styles.imageView} />
                    <View>
                        <View style={{ marginTop: -25, marginLeft: 50 }}>
                            <Text style={STYLES.styles.textColor}>Too many</Text>
                            <Text style={STYLES.styles.textColor}>answers</Text>
                            <Text style={STYLES.styles.textColor}>on Google?</Text>
                        </View>
                        <View style={{ marginTop: 20, marginLeft: 50 }}>
                            <Text style={STYLES.styles.textColor}>Ask the</Text>
                            <Text style={STYLES.styles.textColor}>Exports</Text>
                        </View>
                        <View style={STYLES.styles.centeView}>
                            <View style={STYLES.styles.boxView}>
                                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
                                    <TouchableOpacity style={STYLES.styles.loginBtn} onPress={() => this.props.navigation.navigate(HOMESCREEN)} >
                                        <Text style={STYLES.styles.loginbtnText}>Sign in with Google</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                                    <TouchableOpacity style={STYLES.styles.loginBtn2} onPress={() => this.props.navigation.navigate(HOMESCREEN)} >
                                        <Text style={STYLES.styles.loginbtnText2}>Sign in with Email Address</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ alignItems: 'flex-end', marginTop: 15 }}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate(FORGOTPASSWORDSCREEN)}>
                                        <Text style={STYLES.styles.forgottext}>Forgot Password?</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={STYLES.styles.centeView} >
                                <TouchableOpacity onPress={() => this.props.navigation.navigate(REGISTERSCREEN)} >
                                    <Text style={STYLES.styles.createText}>Create An account</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        )
    }
}
