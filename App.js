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
const RoundStack = createNativeStackNavigator();
const ScoresStack = createNativeStackNavigator();

const MyTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Start" component={StartScreen} />
            <Tab.Screen name="Scores" component={ScoresScreen} />
        </Tab.Navigator>
    );
};

export default function App() {
    return (
        <ScoreProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={MyTabs} />
                    <Stack.Screen
                        name="Score Screen"
                        component={GolfScoreScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </ScoreProvider>
    );
}
