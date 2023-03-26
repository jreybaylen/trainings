import React, {useState} from 'react'
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import DatePicker from 'react-native-date-picker'

import InputField from '../shared/InputField'
import CustomButton from '../shared/CustomButton'

export default Register = () => {
	const [date, setDate] = useState(new Date())
	const [open, setOpen] = useState(false)
	const [dobLabel, setDobLabel] = useState('Date of Birth')
	const router = useNavigation()

	return (
		<SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
			<ScrollView
				showsVerticalScrollIndicator={false}
				style={ styles.padding }
			>
				<View 
					style={ styles.textContainerSI }
				>
					<Text
						style={ styles.textSI }
					>
						Sign Up
					</Text>
				</View>
				<InputField
					label={ 'Username' }
					keyboardType="email-address"
				/>
				<InputField
					label={ 'Password' }
					inputType="password"
				/>
				<InputField
					label={'Name'}
				/>
				<InputField
					label={ 'Age' }
					keyboardType="numeric"
				/>
				<View
					style={ styles.doLabelContainer }
				>
					<TouchableOpacity 
						onPress={ () => setOpen(true) }
					>
						<Text 
							style={ styles.doLabelText }
						>
							{ dobLabel }
						</Text>
					</TouchableOpacity>
				</View>
				<DatePicker
					modal
					open={ open }
					date={ date }
					mode={ 'date' }
					maximumDate={ new Date( '2005-01-01' ) }
					minimumDate={ new Date( '1980-01-01' ) }
					onConfirm={ date => {
						setOpen( false )
						setDate( date )
						setDobLabel( date.toDateString() )
					} }
					onCancel={ () => {
						setOpen( false )
					} }
				/>
				<CustomButton 
					label={ 'Register' } 
					onPress={() => {}} 
				/>
				<View
					style={ styles.logInCon }
				>
					<Text>Already registered?{ '\t' }</Text>
					<TouchableOpacity 
						onPress={ () => router.goBack() }
					>
						<Text 
							style={ styles.logInText }
						> 
							Login
						</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	padding: {
		paddingTop: '10%',
		paddingHorizontal: '8%'
	},
	textContainerSI: {
		marginBottom: '10%',
		alignItems: 'center'
	},
	textSI: {
		fontSize: 40,
		color: '#333',
		marginBottom: '10%',
		fontWeight: 'bold',
	},
	doLabelContainer: {
		paddingBottom: '4%',
		marginBottom: '10%',
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderBottomColor: '#ccc'
	},
	doLabelText: { 
		marginTop: 5,
		marginLeft: 5, 
		color: '#666' 
	},
	logInCon: {
		flexDirection: 'row',
		justifyContent: 'center'
	},
	logInText: {
		color: 'blue',
		fontWeight: '700'
	}
})