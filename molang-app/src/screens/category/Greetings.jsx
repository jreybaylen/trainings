import React from 'react'
import { Text, View, FlatList  } from 'react-native'
import { Button } from 'native-base'
import { useNavigation } from '@react-navigation/native'

import { GREETINGS_DATA } from '../../data/greetings'
import FooterComponent from '../shared/FooterComponents'
import categoryStyles from '../utils/category-styles'

export default function Greetings() {
	const router = useNavigation()

	return (
		<View
			style={ categoryStyles.container }
		>
			<FlatList
				data={ GREETINGS_DATA }
				keyExtractor={( item ) => item.id }
				renderItem={({ item }) => {
				const handleTestRoutes = () => {
					router.navigate( 'CategoryContent', item )
				}

				return (
					<Button
						onPress={ handleTestRoutes }
						title={ item.letter }
						style={ categoryStyles.button }
					>
						<View 
							style={ categoryStyles.textContainer }
						>
							<Text
								style={ categoryStyles.text }
							>
								{ item.name }
							</Text>
						</View>
					</Button>
				)
				}}
				ListFooterComponent={ FooterComponent }
				contentContainerStyle={ categoryStyles.flatlist }
			/>
		</View>
	)
}
