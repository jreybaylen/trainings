import { StyleSheet } from 'react-native'


const categoryStyles = StyleSheet.create ({
	container: {
		paddingTop: '5%',
		paddingLeft: '4%',
		paddingRight: '4%'
	},
	flatlist: {
		paddingBottom: '10%'
	},
	item: {
		width: '30%',
		height: '100%',
		marginRight: '3%',
		marginBottom: '5%'
	},
	button: {
		borderWidth: 2,
		backgroundColor: '#87cefa',
		marginBottom: '5%'
	},
	textContainer: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	text: {
		fontSize: 40,
		color: '#000',
		fontWeight:'bold'
	}
})

export default categoryStyles