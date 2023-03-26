import React from 'react'
import { Text, View, SafeAreaView, StyleSheet } from 'react-native'
import { Button, HStack } from 'native-base'
import { useNavigation } from '@react-navigation/native'

export default function GreetingsMain () {
	const router = useNavigation()
	const Greetings = () => {
		router.navigate( 'CategoryGreetings' ) 
	}
	const School = () => {
		router.navigate( 'School' ) 
	}
	const Travel = () => {
		router.navigate( 'Travel' ) 
	}
	const BuySome = () => {
		router.navigate( 'BuySome' ) 
	}

	return (
		<SafeAreaView
			contentInsetAdjustmentBehavior="automatic"
			style={ styles.container }
		>
			<Button
				onPress={ Greetings }
				style={ styles.quiz }
			>
				<HStack 
					style={ styles.hStack }
				>
					<View
						style={ styles.textCon }
					>
						<Text 
							style={ styles.quizText }
						>
							GREETINGS
						</Text>
					</View>
					<View 
						style={ styles.iCon }
					>
					</View>
				</HStack>
			</Button>
			<Button
				onPress={ School }
				style={ styles.quiz }
			>
				<HStack 
					style={ styles.hStack }
				>
					<View
						style={ styles.textCon }
					>
						<Text 
							style={ styles.quizText }
						>
							SCHOOL
						</Text>
					</View>
					<View 
						style={ styles.iCon }
					>
					</View>
				</HStack>
			</Button>  
			<Button
				onPress={ Travel }
				style={ styles.quiz }
			>
				<HStack 
					style={ styles.hStack }
				>
					<View
						style={ styles.textCon }
					>
						<Text 
							style={ styles.quizText }
						>
							TRAVEL
						</Text>
					</View>
					<View 
						style={ styles.iCon }
					>
					</View>
				</HStack>
			</Button>  
			<Button
				onPress={ BuySome }
				style={ styles.quiz }
			>
				<HStack 
					style={ styles.hStack }
				>
					<View
						style={ styles.textCon }
					>
						<Text 
							style={ styles.quizText }
						>
							BUYING SOMETHING
						</Text>
					</View>
					<View 
						style={ styles.iCon }
					>
					</View>
				</HStack>
			</Button>    
		</SafeAreaView>
	)
}

const styles = StyleSheet.create ({
	container: {
		height: '100%',
	},
	quiz: {
		width: '80%',
		height: '20%',
		borderWidth: 2,
		marginTop: '5%',
		marginLeft: '10%',
		alignItems: 'center',
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		borderBottomLeftRadius: 30,
		borderBottomRightRadius: 30,
		backgroundColor: '#87cefa'
	},
	quizText: {
		fontSize: 30,
		color: '#000',
		fontWeight:'bold',
		textAlign: 'center'
	},
	iCon: {
		width: '30%',
		height: '100%',
		backgroundColor: 'green'
	},
	hStack: {
		width: '100%',
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center'
	},
	textCon: {
		width: '70%',
		height: '100%',
		justifyContent: 'center'
	}
}) 