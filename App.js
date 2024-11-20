import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from './src/screens/auth/SignInScreen';
import SignUpScreen from './src/screens/auth/SignUpScreen';
import AuthScreen from './src/screens/auth/AuthScreen';
import StartScreen from './src/screens/StartScreen';
import GolfScoreScreen from './src/screens/GolfScoreScreen';
import FinishScreen from './src/screens/FinishScreen';
import ScoresScreen from './src/screens/ScoresScreen';

import { ScoreProvider } from './src/context/ScoreContext';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Auth = createNativeStackNavigator();
// const RoundStack = createNativeStackNavigator();
const ScoresStack = createNativeStackNavigator();

const AuthStack = () => {
    <Auth.Navigator>
        <Auth.Screen name="Auth Screen" component={AuthScreen} />
    </Auth.Navigator>;
};

const RoundStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Start Screen" component={StartScreen} />
            <Stack.Screen name="Score Screen" component={GolfScoreScreen} />
            <Stack.Screen name="Finish Screen" component={FinishScreen} />
        </Stack.Navigator>
    );
};

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tab.Screen name="RoundStack" component={RoundStack} />
            <Tab.Screen name="Scores" component={ScoresScreen} />
        </Tab.Navigator>
    );
};

export default function App() {
    return (
        <ScoreProvider>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    <Stack.Screen name="Auth" component={AuthScreen} />
                    <Stack.Screen name="Sign In" component={SignInScreen} />
                    <Stack.Screen name="Sign Up" component={SignUpScreen} />

                    <Stack.Screen name="Main" component={TabNavigator} />
                </Stack.Navigator>
            </NavigationContainer>
        </ScoreProvider>
    );
}
