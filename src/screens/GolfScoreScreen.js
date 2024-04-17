import React, { useState, useContext } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
} from 'react-native';
import ScoreContext from '../context/ScoreContext';

const GolfScoreScreen = ({ navigation }) => {
    const { hole, totalScore, toPar, nextHole, roundType } =
        useContext(ScoreContext);

    const [score, setScore] = useState('');
    const [par, setPar] = useState('');

    const submitHole = () => {
        nextHole(score, par);
        setScore('');
        setPar('');
        if (hole > roundType - 1) {
            navigation.navigate('Finish Screen');
        }
    };

    return (
        <View>
            <View>
                <Text>
                    Current Score: {totalScore} ({toPar}){' '}
                </Text>
            </View>
            <View>
                <Text>Hole {hole} </Text>
            </View>
            <View style={styles.inputStyle}>
                <TextInput
                    placeholder="Hole Par"
                    onChangeText={(newPar) => setPar(newPar)}
                />
            </View>
            <View style={styles.inputStyle}>
                <TextInput
                    placeholder="Strokes"
                    onChangeText={(newScore) => setScore(newScore)}
                />
            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={submitHole}>
                    <Text>Next</Text>
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

export default GolfScoreScreen;
