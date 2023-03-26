import {Text, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'

export default function CustomButton({label, onPress}) {
  return (
    <TouchableOpacity
      	onPress={onPress}
      	style={ styles.container }>
      	<Text
        	style={ styles.text }
		>
        {label}
		</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
	container: {
        backgroundColor: '#87cefa',
        padding: 20,
        borderRadius: 10,
        marginBottom: 30,
	},
	text: {
		fontSize: 16,
		color: '#000',
		fontWeight: '700',
		textAlign: 'center'
	}
})
