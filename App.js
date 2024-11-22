import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from './src/screens/auth/SignInScreen';
import SignUpScreen from './src/screens/auth/SignUpScreen';
import AuthScreen from './src/screens/auth/AuthScreen';
import StartScreen from './src/screens/StartScreen';
import GolfScoreScreen from './src/screens/GolfScoreScreen';
import FinishScreen from './src/screens/FinishScreen';
import ScoresScreen from './src/screens/ScoresScreen';
import AccountScreen from './src/screens/account/AccountScreen';

import { ScoreProvider } from './src/context/ScoreContext';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
    SafeAreaProvider,
    useSafeAreaInsets,
} from 'react-native-safe-area-context';

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
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
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
            <Tab.Screen name="Account" component={AccountScreen} />
        </Tab.Navigator>
    );
};

export default function App() {
    return (
        <ScoreProvider>
            <SafeAreaProvider>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name="Auth" component={AuthScreen} />
                        <Stack.Screen
                            name="Sign In Screen"
                            component={SignInScreen}
                        />
                        <Stack.Screen
                            name="Sign Up Screen"
                            component={SignUpScreen}
                        />

                        <Stack.Screen name="Main" component={TabNavigator} />
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        </ScoreProvider>
    );
}
