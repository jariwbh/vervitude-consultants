import React, { useEffect, useCallback, useState } from 'react';
import { View, Text, Dimensions, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity, Image, StatusBar } from 'react-native';
import * as SCREEN from '../../context/screen/screenName';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ChatMenu from '../../components/ChatMenu/ChatMenu';
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;
//
import AsyncStorage from '@react-native-community/async-storage';
import { AUTHUSER } from '../../context/actions/type';
//
import { GiftedChat } from 'react-native-gifted-chat';
import { renderDay, renderBubble, renderInputToolbar } from './customChatProps';
import firestore from '@react-native-firebase/firestore';
//
import Loader from '../../components/loader/index';
import moment from 'moment';
import GeneralStatusBarColor from '../../components/StatusBarStyle/GeneralStatusBarColor';
const defaultProfile = 'https://res.cloudinary.com/dnogrvbs2/image/upload/v1613538969/profile1_xspwoy.png';
import crashlytics, { firebase } from "@react-native-firebase/crashlytics";

const rubychatScreen = (props, { navigation }) => {
	const [loading, setloading] = useState(false);
	const [chatId, setchatId] = useState(null);
	const [sender, setsender] = useState(null);
	const [messages, setMessages] = useState([]);
	const [hideInput, setHideInput] = useState(false);

	const User = props.route.params.item;
	// Chat Module - Auto Initiate //
	useEffect(
		() => {
			AsyncStorage.getItem(AUTHUSER).then((res) => {
				let sender = JSON.parse(res)._id;
				setloading(true);
				setsender(sender);
				if (User && User.property.endat != null) {
					setHideInput(true);
				} else {
					if (User && User.property.startat) {
						if (!User.property.consultantid.property.live) {
							setHideInput(true);
						} else {
							setHideInput(false);
						}
					}
				}
				if (!User.property.consultantid.property.live) {
					setHideInput(true);
				}
				newChat(sender, User.contextid._id).then((id) => {
					setchatId(id);
					let getMessages = firestore()
						.collection('chat')
						.doc(id)
						.collection('messages')
						.orderBy('order', 'desc');
					getMessages.onSnapshot((snap) => {
						let messages = snap.docs.map((item) => item.data());
						setMessages(messages);
						setloading(false);
					});
				});
			});
		},
		[navigation]
	);

	const newChat = async (sender, item) => {
		let getChatId = firestore().collection('chat');
		let snap = await getChatId.doc(User.property.fierbasechatid).get();
		if (snap) {
			//	let snap2 = await getChatId.where('member', 'in', [[item, sender]]).get();
			// 	if (snap2.empty) {
			// 		let ref = await getChatId.add({
			// 			member: [sender, item],
			// 			createdAt: '',
			// 			previewMessage: ''
			// 		});
			// 		return ref.id;
			// 	} else {
			// 		return snap2.docs[0].id;
			// 	}
			// } else {
			//return snap.docs[0].id;
			return snap.id;
		}
	};

	const onSend = useCallback((messages = []) => {
		sendpushalertmsgCheck(messages[0].text);
		let setMessage = firestore().collection('chat').doc(User.property.fierbasechatid).collection('messages').doc();
		for (let i = 0; i < messages.length; i++) {
			const { text, user, createdAt } = messages[i];
			firestore()
				.collection('chat')
				.doc(User.property.fierbasechatid)
				.update({ previewMessage: { previewMessage: messages[0].text, read: false }, createdAt: createdAt.toString() })

			const message = {
				_id: Math.random(),
				text,
				user,
				createdAt: createdAt.toString(),
				order: firestore.FieldValue.serverTimestamp(),
				sent: true,
				received: true,
				panding: false
			};
			setMessage.set(message);
		}
	});

	const EndChat = () => (
		User.property.endat ?
			<View style={{ alignItems: 'center', margin: 5 }}>
				<Text style={{ fontSize: 14, color: '#000000' }}>{`Your Chat is close in this Date ${User && moment(User.property.endat).format("MMM Do YYYY")}`}</Text>
				<Text style={{ fontSize: 14, color: '#000000' }}>{`and time ${User && moment(User.property.endat).format('LTS')}`}</Text>
			</View>
			:
			<View style={{ alignItems: 'center', margin: 5 }}>
				<Text style={{ fontSize: 14, color: '#000000', textAlign: 'center' }}>{`Consultant Currently Offline Dose `}</Text>
				<Text style={{ fontSize: 14, color: '#000000', textAlign: 'center' }}>{`not allowed chat`}</Text>
			</View>
	)

	async function sendpushalert(registrationid, message, subject) {
		var form = {
			to: registrationid,
			priority: "high",
			notification: {
				sound: "default",
				title: subject.toLowerCase().split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' '),
				body: message
			}
		};
		var formData = JSON.stringify(form);
		await fetch('https://fcm.googleapis.com/fcm/send', {
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
				"Authorization": "key=AAAAEnSG7us:APA91bF_fsNvJ-RoDW56GfT8wyg4nYt78wBlcsyVb4Sa5kzqVWHLU-kWsueU9HcOoOX6qF8Esu9BoCHPNvTT6zntXmOd6UQ-ygrPxP42ldjwqDH0DzW5U2bf4UlPXL1NswPsLFaRNT3x"
			},
			body: formData
		})
			.then(response => response.json())
			.then((responseData) => {
				//console.log('responseData', responseData);
			})
			.catch(error => {
				firebase.crashlytics().recordError(error);
				//this.setState({ errorMessage: error });
				console.error('There was an error!', error);
			});
	}

	function sendpushalertmsgCheck(message) {
		let userInformation = User.contextid;
		if (userInformation) {
			if (userInformation.anroiddevices && userInformation.anroiddevices.length !== 0) {
				userInformation.anroiddevices.forEach(elementAndroidDevices => {
					if (
						elementAndroidDevices.registrationid &&
						elementAndroidDevices.registrationid != ""
					)
						sendpushalert(elementAndroidDevices.registrationid, message, userInformation.fullname)
				});
			}

			if (userInformation.iosdevices && userInformation.iosdevices.length !== 0) {
				userInformation.iosdevices.forEach(elementIosDevices => {
					if (
						elementIosDevices.registrationid &&
						elementIosDevices.registrationid != ""
					)
						sendpushalert(elementIosDevices.registrationid, message, userInformation.fullname)
				});
			}
		}
	}

	return (
		<SafeAreaView style={styles.container}>
			<GeneralStatusBarColor hidden={false} translucent={true} backgroundColor="transparent" barStyle="dark-content" />
			<View
				style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginTop: 30 }}>
				<View style={{ justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
					<TouchableOpacity style={styles.chatIcon} onPress={() => { props.navigation.goBack(null) }}>
						<AntDesign name='arrowleft' size={24} color='#5AC8FA' />
					</TouchableOpacity>
					<Image
						source={{ uri: User.contextid.profilepic ? User.contextid.profilepic : defaultProfile }}
						style={{ width: 50, height: 52, borderRadius: 100, marginLeft: 5 }}
					/>
					{
						User.contextid.property.live ?
							<FontAwesome name='circle' size={15} color='#5AC8FA' style={{ marginLeft: -20, marginTop: -40 }} />
							:
							<FontAwesome name='circle' size={15} color='#EEEEEE' style={{ marginLeft: -20, marginTop: -40 }} />
					}
					<View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'column', marginLeft: 15 }}>
						<Text style={{ fontSize: 20, color: '#5AC8FA', textTransform: 'capitalize' }}>{User.contextid.fullname.split(' ')[0]}</Text>
						<Text style={{ fontSize: 10, color: '#000000' }}>{User.contextid.property.live ? 'Online' : 'Ofline'}</Text>
					</View>
				</View>
				{/* <View
					style={{
						justifyContent: 'center',
						alignItems: 'center',
						marginLeft: 100,
						marginRight: 0
					}}
				>
					<Image source={require('../../assets/images/chat.png')} style={{ width: 45, height: 22 }} />
					<Text style={{ fontSize: 12, color: '#5AC8FA', position: 'absolute' }}>20K</Text>
				</View> */}
				<View style={{ justifyContent: 'flex-end' }}>
					<ChatMenu onPress={() => { props.navigation.navigate(SCREEN.CHATHISTORYSCREEN) }} />
				</View>
			</View>
			<ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={'always'}>
				<View style={{ justifyContent: 'center', alignItems: 'center' }}>
					<View style={styles.chatview}>
						<GiftedChat
							keyboardShouldPersistTaps={'always'}
							user={{ _id: sender }}
							isAnimated={true}
							messages={messages}
							onSend={onSend}
							renderAvatar={null}
							alwaysShowSend={true}
							renderBubble={(props) => renderBubble(props, navigation)}
							// renderDay={renderDay}
							minInputToolbarHeight={80}
							renderInputToolbar={hideInput ? () => <EndChat /> : renderInputToolbar}
						/>
					</View>
					<View style={{ marginBottom: 10 }} />
				</View>
			</ScrollView>
			{loading ? <Loader /> : null}
		</SafeAreaView>
	);
};

export default rubychatScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#EEEEEE'
	},
	chatview: {
		marginTop: 20,
		width: WIDTH,
		backgroundColor: '#FFFFFF',
		borderRadius: 30,
		height: HEIGHT / 1.5 + 100,
		shadowOpacity: 0.5,
		shadowRadius: 1,
		shadowOffset: {
			height: 0,
			width: 0
		},
		elevation: 3
	},
	chatIcon: {
		width: 40,
		height: 40,
		borderRadius: 100,
		marginLeft: 20,
		alignItems: 'center',
		justifyContent: 'center'
	},
});
