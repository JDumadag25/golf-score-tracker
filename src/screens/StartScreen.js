import React, { useContext } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import ScoreContext from '../context/ScoreContext';

const StartScreen = ({ navigation }) => {
    const { submitRoundType } = useContext(ScoreContext);

    const setRoundType = (type) => {
        submitRoundType(type);
    };
    return (
        <View>
            <View>
                <Text>Please select your round type</Text>
            </View>

            <View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => setRoundType(18)}
                >
                    <Text>18 Holes</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => setRoundType(3)}
                >
                    <Text>9 Holes</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.inputStyle}>
                <TextInput placeholder="Par" />
            </View>

            <View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Score Screen')}
                >
                    <Text>Play</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        height: 40,
        width: 80,
        borderWidth: 2,
        borderColor: 'red',
    },

    inputStyle: {
        borderColor: 'black',
        borderWidth: 1,
        height: 30,
    },
});

export default StartScreen;
