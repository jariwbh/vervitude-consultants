import React, { Component } from 'react'
import { Text, View, Dimensions, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import * as STYLES from './styles';

export default class registerScreen extends Component {
    render() {
        return (
            <SafeAreaView style={STYLES.styles.container}>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    <Text style={{ fontSize: 20, color: '#FFFFFF', fontWeight: 'bold' }}>Create Account</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
                    <View style={STYLES.styles.inputView}>
                        <TextInput
                            style={STYLES.styles.TextInput}
                            placeholder="Full Name"
                            type='clear'
                            placeholderTextColor="#ABAFB3"
                            returnKeyType="next"
                            blurOnSubmit={false}
                        />
                    </View>
                    <View style={STYLES.styles.inputView} >
                        <TextInput
                            style={STYLES.styles.TextInput}
                            placeholder="Email"
                            type='clear'
                            placeholderTextColor="#ABAFB3"
                            returnKeyType="next"
                            autoCapitalize="none"
                            autoCompleteType="email"
                            textContentType="emailAddress"
                            keyboardType="email-address"
                            blurOnSubmit={false}
                            ref={this.secondTextInputRef}
                        />
                    </View>
                    <View style={STYLES.styles.inputView} >
                        <TextInput
                            style={STYLES.styles.TextInput}
                            placeholder="Mobile Number"
                            type='clear'
                            placeholderTextColor="#ABAFB3"
                            returnKeyType="done"
                            keyboardType="number-pad"
                            ref={this.TeardTextInputRef}
                        />
                    </View>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    <TouchableOpacity style={STYLES.styles.sineBtn} onPress={() => { }} >
                        <Text style={STYLES.styles.sineText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 10, justifyContent: 'center', flexDirection: 'row' }} >
                    <Text style={STYLES.styles.innerText}> Don't have an account? </Text>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('LoginScreen') }} >
                        <Text style={STYLES.styles.baseText}>Signin</Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        )
    }
}
