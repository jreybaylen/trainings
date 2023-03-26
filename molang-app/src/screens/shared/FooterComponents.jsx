import { Text } from 'react-native'
import { Button, HStack } from 'native-base'
import { useNavigation } from '@react-navigation/native'

import footerStyles from '../utils/footer-component-styles'

const FooterComponent = () => {
    const router = useNavigation()
    const handleNavigateGreetingsQuiz = () => {
        router.navigate( 'GreetingsQuiz' )
	}
    const Back = () => {
        router.goBack() 
    }

    return (
        <HStack
            style={ footerStyles.hStack }
        >
            <Button
                onPress={ handleNavigateGreetingsQuiz }
                style={ {
                ...footerStyles.footerButton,
                ...footerStyles.button,
                ...footerStyles.marginLeft
                } }
            >
                <Text
                    style={ footerStyles.quizText }
                >
                    Quiz
                </Text>
            </Button>
            <Button 
                onPress={ Back }
                style={ {
                    ...footerStyles.footerButton,
                    ...footerStyles.button
                } }
            >
                <Text
                    style={ footerStyles.quizText }
                >
                    Back
                </Text>
            </Button>
        </HStack>
    )
}

export default FooterComponent
