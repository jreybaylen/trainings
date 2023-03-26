import React from 'react'
import { Button, HStack, VStack } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { Text, View, Image, StyleSheet  } from 'react-native'

export default function AlphabetQuiz() {
    const router = useNavigation()
    const Back = () => {
        router.goBack() 
    }
	return (
        <VStack
            style={ styles.body }
        >
            <HStack
                style={ styles.textCon }
            >
                <Text
                    style={ styles.h1 }
                >
                    How do you say {'\n'} "Greetings"?
                </Text>
            </HStack>
            <HStack
                style={ styles.imgCon }
            >
                <Button
                    style={ styles.imgButton }
                >
                    <Text>A</Text>
                    <Image/>
                </Button>
                <Button
                    style={ styles.imgButton }
                >
                    <Text>B</Text>
                    <Image/>
                </Button>
            </HStack>
            <HStack
                style={ styles.imgCon }
            >
                <Button
                    style={ styles.imgButton }
                >
                    <Text>C</Text>
                    <Image/>
                </Button>
                <Button
                    style={ styles.imgButton }
                >
                    <Text>D</Text>
                    <Image/>
                </Button>
            </HStack>
            <HStack 
                style={ styles.footer }
            >
                <Button 
                    onPress={ Back }
                >
                    <Text>Back</Text>
                </Button>
                <Button>
                    <Text>Next</Text>
                </Button>
            </HStack>
        </VStack>
	)
}

const styles = StyleSheet.create({
    body: { 
        backgroundColor: 'yellow',
        height: '100%'
    },
    textCon: { 
        backgroundColor: 'cyan',
        justifyContent: 'center',
        alignItems: 'center',
        height: '20%'
    },
    h1: {
       fontSize: 25,
       fontWeight: 'bold',
       textAlign: 'center'
    },
    imgCon: { 
        backgroundColor: 'green',
        justifyContent: 'space-between',
        marginHorizontal: '2%',
        alignItems: 'center',
        height: '34%'
    },
    imgButton: {
        width: '48%',
        height: '95%'
    },  
    footer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '12%',
    }
})

