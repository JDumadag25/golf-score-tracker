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
const RoundStack = createNativeStackNavigator();
const ScoresStack = createNativeStackNavigator();

export default function App() {
    return (
        <ScoreProvider>
            <NavigationContainer>
                <RoundStack.Navigator>
                    {/* <RoundStack.Screen
                        name="Sign In Screen"
                        component={SignInScreen}
                    /> */}
                    <RoundStack.Screen
                        name="Start Screen"
                        component={StartScreen}
                    />
                    <RoundStack.Screen
                        name="Score Screen"
                        component={GolfScoreScreen}
                        options={{ headerBackVisible: false }}
                    />
                    <RoundStack.Screen
                        name="Finish Screen"
                        component={FinishScreen}
                    />
                </RoundStack.Navigator>
            </NavigationContainer>
        </ScoreProvider>
    );
}
