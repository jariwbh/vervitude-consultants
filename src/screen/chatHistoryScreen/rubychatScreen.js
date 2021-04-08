import React, { useEffect, useCallback, useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import * as SCREEN from '../../context/screen/screenName';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ChatMenu from '../../components/ChatMenu/ChatMenu';
//
import AsyncStorage from '@react-native-community/async-storage';
import { AUTHUSER } from '../../context/actions/type';
//
import { GiftedChat } from 'react-native-gifted-chat';
import { renderDay, renderBubble, renderInputToolbar } from './customChatProps';
import firestore from '@react-native-firebase/firestore';
//
const rubychatScreen = ({ navigation }) => {
	const [ chatId, setchatId ] = useState(null);
	const [ sender, setsender ] = useState(null);
	const [ messages, setMessages ] = useState([]);

	// Chat Module - Auto Initiate //
	useEffect(
		() => {
			AsyncStorage.getItem(AUTHUSER).then((res) => {
				let sender = JSON.parse(res)._id;
				setsender(sender);
				newChat(sender, '605845dcac1539438768c833').then((id) => { 
					setchatId(id);
					let getMessages = firestore()
						.collection('chat')
						.doc(id)
						.collection('messages')
						.orderBy('order', 'desc');
					getMessages.onSnapshot((snap) => {
						let messages = snap.docs.map((item) => item.data());
						setMessages(messages);
					});
				});
			});
		},
		[ navigation ]
	);

	const newChat = async (sender, item) => {
		let getChatId = firestore().collection('chat');
		let snap = await getChatId.where('member', 'in', [ [ sender, item ] ]).get();
		if (snap.empty) {
			let snap2 = await getChatId.where('member', 'in', [ [ item, sender ] ]).get();
			if (snap2.empty) {
				let ref = await getChatId.add({
					member: [ sender, item ],
					createdAt: '',
					previewMessage: ''
				});
				return ref.id;
			} else {
				return snap2.docs[0].id;
			}
		} else {
			return snap.docs[0].id;
		}
	};

	const onSend = useCallback((messages = []) => {
		let setMessage = firestore().collection('chat').doc(chatId).collection('messages').doc();
		for (let i = 0; i < messages.length; i++) {
			const { text, user, createdAt } = messages[i];
			firestore()
				.collection('chat')
				.doc(chatId)
				.update({ previewMessage: messages[0].text, createdAt: createdAt.toString() });

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

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View
					style={{
						justifyContent: 'space-between',
						alignItems: 'center',
						flexDirection: 'row',
						marginTop: hp('5%')
					}}
				>
					<TouchableOpacity
						style={styles.chatIcon}
						onPress={() => {
							navigation.navigate(SCREEN.CHATHISTORYSCREEN);
						}}
					>
						<AntDesign name="arrowleft" size={24} color="#5AC8FA" />
					</TouchableOpacity>

					<Image
						source={require('../../assets/images/user4.png')}
						style={{ width: 50, height: 52, borderRadius: hp('7%'), marginLeft: hp('1%') }}
					/>
					<FontAwesome
						name="circle"
						size={15}
						color="#5AC8FA"
						style={{ marginLeft: wp('-4%'), marginTop: wp('-10%') }}
					/>
					<View
						style={{
							justifyContent: 'center',
							alignItems: 'center',
							flexDirection: 'column',
							marginLeft: hp('2%')
						}}
					>
						<Text style={{ fontSize: hp('3%'), color: '#5AC8FA' }}>Ruby</Text>
						<Text style={{ fontSize: hp('1.5%'), color: '#000000' }}>Online</Text>
					</View>

					<View
						style={{
							marginTop: hp('0%'),
							justifyContent: 'center',
							alignItems: 'center',
							marginLeft: wp('25%'),
							marginRight: wp('1%')
						}}
					>
						<Image source={require('../../assets/images/chat.png')} style={{ width: 50, height: 25 }} />
						<Text style={{ fontSize: hp('2%'), color: '#5AC8FA', position: 'absolute' }}>20K</Text>
					</View>
					<ChatMenu />
				</View>

				<View style={styles.chatview}>
					<GiftedChat
						user={{ _id: sender }}
						isAnimated={true}
						messages={messages}
						onSend={onSend}
						renderAvatar={null}
						alwaysShowSend={true}
						renderBubble={(props) => renderBubble(props, navigation)}
						// renderDay={renderDay}
						minInputToolbarHeight={80}
						renderInputToolbar={renderInputToolbar}
					/>
				</View>
				<View style={{ marginBottom: hp('10%') }} />
			</ScrollView>
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
		marginTop: hp('3%'),
		width: wp('100%'),
		backgroundColor: '#FFFFFF',
		borderRadius: hp('5%'),
		height: hp('80%'),
		shadowOpacity: 0.5,
		shadowRadius: 1,
		shadowOffset: {
			height: 0,
			width: 0
		},
		elevation: 3
	},
	chatIcon: {
		width: wp('7%'),
		height: wp('7%'),
		borderRadius: hp('6%'),
		marginLeft: wp('5%'),
		alignItems: 'center',
		justifyContent: 'center'
	},
	inputview: {
		flexDirection: 'row',
		backgroundColor: '#fff',
		borderColor: '#737373',
		shadowOpacity: 0.5,
		shadowRadius: 2,
		shadowOffset: {
			height: 0,
			width: 0
		},
		elevation: 2,
		width: wp('90%'),
		height: hp('8%'),
		borderRadius: hp('2%'),
		alignItems: 'center',
		justifyContent: 'center'
	},
	inputtext: {
		fontSize: hp('2.5%'),
		flex: 1,
		marginLeft: wp('4%')
	},
	categoryIcon: {
		width: wp('7%'),
		height: wp('7%'),
		marginRight: wp('10%'),
		alignItems: 'center',
		justifyContent: 'center'
	}
});
