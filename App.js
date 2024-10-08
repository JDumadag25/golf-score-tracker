import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from './src/screens/SignInScreen';
import StartScreen from './src/screens/StartScreen';
import GolfScoreScreen from './src/screens/GolfScoreScreen';
import FinishScreen from './src/screens/FinishScreen';
import ScoresScreen from './src/screens/ScoresScreen';
import { ScoreProvider } from './src/context/ScoreContext';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
// const RoundStack = createNativeStackNavigator();
const ScoresStack = createNativeStackNavigator();

const RoundStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="StartScreen" component={StartScreen} />
            <Stack.Screen name="Score Screen" component={GolfScoreScreen} />
        </Stack.Navigator>
    );
};

export default function App() {
    return (
        <ScoreProvider>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    <Tab.Screen name="RoundStack" component={RoundStack} />
                    <Tab.Screen name="Scores" component={ScoresScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        </ScoreProvider>
    );
}
