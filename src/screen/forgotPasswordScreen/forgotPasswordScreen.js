import React, { Component } from 'react';
import { View, Text, Dimensions, TextInput, ScrollView, ImageBackground, TouchableOpacity, SafeAreaView } from 'react-native';
import * as STYLES from './styles';

export default class forgotPasswordScreen extends Component {
    render() {
        return (
            <SafeAreaView style={STYLES.styles.container}>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }}> Forgot Password </Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
                        <View style={STYLES.styles.inputview} >
                            <TextInput
                                style={STYLES.styles.TextInput}
                                placeholder="Password"
                                type='clear'
                                placeholderTextColor="#ABAFB3"
                                secureTextEntry={true}
                                returnKeyType="done"
                                keyboardType="numeric"
                            />
                        </View>
                        <View style={STYLES.styles.inputview} >
                            <TextInput
                                style={STYLES.styles.TextInput}
                                placeholder="Confrim Password"
                                type='clear'
                                placeholderTextColor="#ABAFB3"
                                secureTextEntry={true}
                                returnKeyType="done"
                                keyboardType="numeric"
                            />
                        </View>
                    </View>
                    <View style={{ marginTop: 10, flexDirection: 'row', marginRight: 70, alignItems: 'flex-end', justifyContent: 'flex-end' }} >
                        <Text style={STYLES.styles.innerText}> Back to </Text>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('LoginScreen') }} >
                            <Text style={STYLES.styles.baseText}>Login</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity style={STYLES.styles.forBtn} onPress={() => { }}>
                            <Text style={STYLES.styles.forText}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}


