import React, { Component } from 'react'
import { Text, View, SafeAreaView, Dimensions, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import * as STYLES from './styles';
import SliderScreen from "../../components/sliderScreen/sliderScreen"

export default class homeScreen extends Component {
    render() {
        return (
            <SafeAreaView>
                <View style={STYLES.styles.statusbar}>
                    <TouchableOpacity >
                        <FontAwesome5 name="search" size={24} color='#808080' style={{ alignItems: "flex-end", justifyContent: 'flex-end', marginLeft: 15 }} />
                    </TouchableOpacity>
                    <TextInput
                        style={STYLES.styles.statInput}
                        placeholder=" Search"
                        type='clear'
                        placeholderTextColor="#737373"
                        returnKeyType="done"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                </View>
                <ScrollView>
                    <View style={{ marginTop: 10 }}>
                        <SliderScreen />
                    </View>
                    <View style={{ marginLeft: 20, marginTop: 20 }}>
                        <Text style={{ fontSize: 20 }}>Reacent Categories</Text>
                    </View>
                    <View style={{ justifyContent: 'space-around', flexDirection: 'row', marginTop: 20 }}>

                        <View style={STYLES.styles.categorie}>
                            <Text style={{ fontSize: 15, marginLeft: 2 }}>hello</Text>
                        </View>
                        <View style={STYLES.styles.categorie}>
                            <Text style={{ fontSize: 15, marginLeft: 2 }}>hello</Text>
                        </View>
                        <View style={STYLES.styles.categorie}>
                            <Text style={{ fontSize: 15, marginLeft: 2 }}>hello</Text>
                        </View>
                        <View style={STYLES.styles.categorie}>
                            <Text style={{ fontSize: 15, marginLeft: 2 }}>hello</Text>
                        </View>
                    </View>
                    <View style={{ marginLeft: 20, marginTop: 20 }}>
                        <Text style={{ fontSize: 20 }}>Top Consultants </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <View style={{ flexDirection: 'column', marginBottom: 5 }}>
                            <TouchableOpacity style={{}} onPress={() => { this.props.navigation.navigate('myProfileScreen') }}>
                                <Image source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }}
                                    style={{ alignItems: 'center', height: 100, width: 100, marginTop: 2, borderRadius: 50 }}
                                />
                            </TouchableOpacity>
                            <View>
                                <Text style={{ fontSize: 20, color: '#000000', textAlign: 'center', marginTop: 10 }}>hello</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'column', marginBottom: 5 }}>
                            <TouchableOpacity style={{}} onPress={() => { }}>
                                <Image source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }}
                                    style={{ alignItems: 'center', height: 100, width: 100, marginTop: 2, borderRadius: 50 }}
                                />
                            </TouchableOpacity>
                            <View>
                                <Text style={{ fontSize: 20, color: '#000000', textAlign: 'center', marginTop: 10 }}>hello</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'column', marginBottom: 5 }}>
                            <TouchableOpacity style={{}} onPress={() => { }}>
                                <Image source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }}
                                    style={{ alignItems: 'center', height: 100, width: 100, marginTop: 2, borderRadius: 50 }}
                                />
                            </TouchableOpacity>
                            <View>
                                <Text style={{ fontSize: 20, color: '#000000', textAlign: 'center', marginTop: 10 }}>hello</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', marginTop: 20, marginRight: 20, marginBottom: 100 }}>
                        <TouchableOpacity >
                            <FontAwesome name="edit" size={24} color='#000000' style={{}} />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}
