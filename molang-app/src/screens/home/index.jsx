import React from 'react'
import { Button, VStack, HStack } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView, StyleSheet, Text, Image, View } from 'react-native'

import AlphabetIcon from '../../assets/icon-alphabet.png'
import GreetingsIcon from '../../assets/icon-greetings.png'
import UpdateIcon from '../../assets/icon-update.png'
import LeaderboardIcon from '../../assets/icon-leaderboard.png'

export default function Home () {
	const router = useNavigation()
	const handleNavigateAlphabet = () => {
		router.navigate('Alphabet')
	}
	const handleNavigateGreetings = () => {
		router.navigate('Greetings')
	}
	// const handleNavigateLeaderboard = () => {
	// router.navigate('Leaderboard')
	// }
	const handleNavigateUpdates = () => {
		router.navigate('Updates')
	}
	const handleNavigateLeaderboard = () => {
	router.navigate('SignIn')
	}

	return (
		<SafeAreaView
			contentInsetAdjustmentBehavior="automatic"
		>
			<HStack
				style={ styles.hStack }
			>
				<VStack 
					style={ {
					...styles.vsWidth,
					...styles.height
					} }
				>
					<Button
						title="Learn More"
						style={ {
							...styles.button,
							...styles.buttonBorder
						} }
						onPress={ handleNavigateAlphabet }
					>
						<View
							style={ styles.textCon }
						>
							<Text
								style={ { 
									...styles.text,
									...styles.fontSize
								} }
							>
								Alphabet
							</Text>    
						</View>
						<View
							style={ styles.imageCon }
						>
							<Image
								source={ AlphabetIcon }
							/>
						</View>
					</Button>   
					<Button
						title="Update"
						style={ {
							...styles.button,
							...styles.buttonBorder
						} }
						onPress={ handleNavigateLeaderboard }
					>
						<View
							style={ styles.textCon }
						>
							<Text
								style={ { 
									...styles.text,
									...styles.fontSize
								} }
							>
								Leaderboard
							</Text>
						</View>
						<View
							style={ styles.imageCon }
						>
							<Image
								style={ styles.image }
								source={ LeaderboardIcon }
							/>
						</View>
					</Button>
				</VStack>
				<VStack
					style={ {
						...styles.vsWidth,
						...styles.height
					} }
				>
					<Button
						title="Learn More"
						style={ {
							...styles.button,
							...styles.buttonBorder
						} }
						onPress={ handleNavigateGreetings }
					>
						<View
							style={ styles.textCon }
						>
							<Text
								style={ { 
									...styles.text,
									fontSize: 16
								} }
							>
								Greetings And Common Phrases
							</Text>    
						</View>
						<View
							style={ styles.imageCon }
						>
							<Image
								style={ styles.image }
								source={ GreetingsIcon }
							/>
						</View>
					</Button>   
					<Button
						title="Update"
						style={ {
							...styles.button,
							...styles.buttonBorder
						} }
						onPress={ handleNavigateUpdates }
					>
						<View
							style={ styles.textCon }
						>
							<Text
								style={ { 
									...styles.text,
									...styles.fontSize
								} }
							>
							Updates
							</Text>
						</View>
						<View
							style={ styles.imageCon }
						>
							<Image
								style={ styles.image }
								source={ UpdateIcon }
							/>
						</View>
					</Button>
				</VStack>
			</HStack>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create ({
	hStack: {
		width: '100%',
		height: '100%',	
		paddingTop: '2%',
		paddingLeft: '2%',
		paddingRight: '2%',
		paddingBottom: '2%',
		justifyContent: 'space-between'
	},
	vsWidth: {
		width: '49%',
		justifyContent: 'space-between'
	},
	button: {
		height: '49%',
		width: '100%',
		position: 'relative',
		backgroundColor: '#87cefa'
	},
	buttonBorder: {
		borderWidth: 2,
		borderRadius: 20
	},
	textCon: {
		height: '20%',
		justifyContent: 'center'
	},
	fontSize:{
		fontSize: 22,
		textAlign: 'center'
	},
	text: {
		color: '#000',
		fontWeight: 'bold',
	},
	imageCon: {
		height: '80%',
		paddingTop: '30%',
		position: 'relative',
		left: '6%',
		bottom: '-4.5%'
	}
})




