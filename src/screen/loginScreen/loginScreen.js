import React, { Component } from 'react'
import { Text, View, Dimensions, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import * as STYLES from './styles';

export default class loginScreen extends Component {
    render() {
        return (
            <SafeAreaView style={STYLES.styles.container}>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    <Text style={{ fontSize: 20, color: '#FFFFFF', fontWeight: 'bold' }}>LogIn</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
                    <View style={STYLES.styles.cardview}>
                        <View style={STYLES.styles.inputView}>
                            <TextInput
                                style={STYLES.styles.TextInput}
                                placeholder="User Name"
                                placeholderTextColor="#323643"
                                type='clear'
                                returnKeyType="next"
                                blurOnSubmit={false}
                            />
                        </View>
                        <View style={STYLES.styles.inputView} >
                            <TextInput
                                style={STYLES.styles.TextInput}
                                placeholder="**********"
                                type='clear'
                                placeholderTextColor="#323643"
                                secureTextEntry={true}
                                returnKeyType="done"
                                ref={this.secondTextInputRef}
                            />
                        </View>
                    </View>
                </View>
                <View style={{ alignItems: 'flex-end', marginRight: 46, marginTop: 15 }}>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('ForgotPassword') }}>
                        <Text style={{ fontSize: 15, color: '#FFFFFF' }}>Forgot password?</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    <TouchableOpacity style={STYLES.styles.loginBtn} onPress={() => { this.props.navigation.navigate('HomeScreen') }} >
                        <Text style={STYLES.styles.loginText}>Sign In</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 20, justifyContent: 'center', flexDirection: 'row' }} >
                    <Text style={STYLES.styles.innerText}> Don't have an account? </Text>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('RegisterScreen') }} >
                        <Text style={STYLES.styles.baseText}>Create</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}
