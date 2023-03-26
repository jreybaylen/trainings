import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView, View, Text, StyleSheet,  TouchableOpacity } from 'react-native'

import InputField from '../shared/InputField'
import CustomButton from '../shared/CustomButton'

export default SignIn = () => {
	const router = useNavigation()
	return (
		<SafeAreaView 
			style={ styles.body }
		>
			<View 
				style={ styles.container }
			>
				<View 
					style={ styles.textContainer }
				>
					<Text
						style={ styles.text }
					>
						Sign In
					</Text>
				</View>
				<InputField
					label={'Email ID'}
					keyboardType="email-address"
				/>
				<InputField
					label={'Password'}
					inputType="password"
					// fieldButtonLabel={"Forgot?"}
					fieldButtonFunction={() => {}}
				/>
				<CustomButton 
					label={"Login"} 
					onPress={() => router.navigate('Main')}
					// onPress={ handleNavigateMain }
				/>
				<View
					style={ styles.registerContainer }
				>
					<Text>New to the app?{'\t'}</Text>
					<TouchableOpacity
						// onPress={() => navigation.navigate('Register')}
						onPress={() => router.navigate('Register')}
					>
						<Text 
							style={ styles.register }
						> 
							Register
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create ({
	body: {
		flex: 1, 
		justifyContent: 'center'
	},
	container: {
		paddingHorizontal: '6%'
	},
	textContainer: {
		marginBottom: '20%',
		alignItems: 'center'
	},
	text: {
		fontSize: 50,
		color: '#333',
		marginBottom: 30,
		fontWeight: 'bold'
	},
	registerContainer: {
		marginBottom: 30,
		flexDirection: 'row',
		justifyContent: 'center'
	},
	register: {
		color: 'blue' ,
		fontWeight: '700'
	}
})