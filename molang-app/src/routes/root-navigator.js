import Home from '../screens/home'
import Alphabet from '../screens/home/Alphabet'
import Greetings from '../screens/home/Greetings'
import WhatsNew from '../screens/home/WhatsNew'
import Leaderboard from '../screens/home/Leaderboard'
import CategoryGreetings from '../screens/category/Greetings'
import School from '../screens/category/School'
import Travel from '../screens/category/Travel'
import BuySome from '../screens/category/BuySome'
import CategoryContent from '../screens/shared/CategoryContent'
import Letters from '../screens/shared/Letters'
import SignIn from '../screens/home/SignIn'
import Register from '../screens/home/Register'
import AlphabetQuiz from '../screens/shared/AlphabetQuiz'
import GreetingsQuiz from '../screens/shared/GreetingsQuiz'

const options = {
    headerShown: false
}

// const mainOptions = 
// {
//         //   headerTitle: (props) => <LogoTitle {...props} />,
//           headerRight: () => (
//             <Button
//               onPress={() => alert('This is a button!')}
//               title="Info"
//               color="#fff"
//             />
//           ),
//         }}

export const ROOT_NAVIGATOR = [
    {
        id: 'main',
        name: 'Main',
        component: Home,
        // mainOptions
    },
    {
        id: 'alphabet',
        name: 'Alphabet',
        component: Alphabet
    },
    {
        id: 'greetings',
        name: 'Greetings',
        component: Greetings
    },
    {
        id: 'updates',
        name: 'Updates', 
        component: WhatsNew 
    },
    {
        id: 'Leaderboard',
        name: 'Leaderboard',
        component: Leaderboard
    },
    {
        id: 'category-reetings',
        name: 'CategoryGreetings',
        component: CategoryGreetings,
        options
    },
    {
        id: 'school',
        name: 'School',
        component: School,
        options
    },
    {
        id: 'travel',
        name: 'Travel',
        component: Travel,
        options
    },
    {
        id: 'buy-some',
        name: 'BuySome',
        component: BuySome,
        options
    },
    {
        id: 'category-content',
        name: 'CategoryContent',
        component: CategoryContent,
        options
    },
    {
        id: 'alphabet-content',
        name: 'AlphabetContent',
        component: Letters,
        options
    },
    {
        id: 'SignIn',
        name: 'SignIn',
        component: SignIn,
        options
    },
    {
        id: 'Register',
        name: 'Register',
        component: Register,
        options
    },
    {
        id: 'AlphabetQuiz',
        name: 'AlphabetQuiz',
        component: AlphabetQuiz,
        options
    },
    {
        id: 'GreetingsQuiz',
        name: 'GreetingsQuiz',
        component: GreetingsQuiz,
        options
    }
]