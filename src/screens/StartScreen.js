import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

const StartScreen = ({ navigation }) => {
    return (
        <View>
            <View>
                <Text>Please select your round type</Text>
            </View>

            <View>
                <TouchableOpacity style={styles.button}>
                    <Text>18 Holes</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
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
