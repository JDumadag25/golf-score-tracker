import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from './src/screens/StartScreen';
import GolfScoreScreen from './src/screens/GolfScoreScreen';
import FinishScreen from './src/screens/FinishScreen';
import { ScoreProvider } from './src/context/ScoreContext';
const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <ScoreProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Start Screen" component={StartScreen} />
                    <Stack.Screen
                        name="Score Screen"
                        component={GolfScoreScreen}
                        options={{ headerBackVisible: false }}
                    />
                    <Stack.Screen
                        name="Finish Screen"
                        component={FinishScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </ScoreProvider>
    );
}
