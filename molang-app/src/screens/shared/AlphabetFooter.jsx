import { Text } from 'react-native'
import { Button, HStack } from 'native-base'
import { useNavigation } from '@react-navigation/native'

import footerStyles from '../utils/footer-component-styles'

const FooterComponent = () => {
	const router = useNavigation()
    const handleNavigateAlphabetQuiz = () => {
        router.navigate( 'AlphabetQuiz' )
	}

    return (
        <HStack
            style={ footerStyles.hStack }
        >
            <Button
                onPress={ handleNavigateAlphabetQuiz }
                style={ {
                ...footerStyles.footerButtonAlphabet,
                ...footerStyles.button,
                ...footerStyles.marginLeft
                } }
            >
                <Text
                    style={ footerStyles.alphabetQuizText }
                >
                    READY FOR THE QUIZ
                </Text>
            </Button>
        </HStack>
    )
}

export default FooterComponent
