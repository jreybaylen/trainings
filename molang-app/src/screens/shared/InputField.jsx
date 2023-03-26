import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'

export default function InputField({
  label,
  icon,
  inputType,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction,
}) {
  return (
    <View
		style={ styles.container }
	>
		{ inputType == 'password' ? 
			( <TextInput
				placeholder={label}
				keyboardType={keyboardType}
				style={ styles.textInput }
				secureTextEntry={true}
			/> ) 
			: 
			( <TextInput
				placeholder={label}
				keyboardType={keyboardType}
				style={ styles.textInput }
			/> ) }
    </View>
  )
}

const styles = StyleSheet.create({
	container: {
			flexDirection: 'row',
			borderBottomColor: '#ccc',
			borderBottomWidth: 1,
			paddingBottom: 8,
			marginBottom: 25,
	},
	textInput: {
		flex: 1,
		paddingVertical: 0
	}

})