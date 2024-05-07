import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
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
        <View className="items-center flex-1 m-10  ">
            <View className="flex ">
                <Text className="text-3xl">Hole {hole} </Text>
            </View>
            <View className="flex  mt-10">
                <Text className="text-3xl">
                    Current Score: {totalScore} ({toPar}){' '}
                </Text>
            </View>

            <View className="flex-row  mt-10 items-center">
                <Text className="text-center text-lg pr-5">Par</Text>
                <TextInput
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-20 p-2.5"
                    onChangeText={(newPar) => setPar(newPar)}
                    value={par}
                    keyboardType="number-pad"
                />
            </View>
            <View className="flex-row mt-10 items-center">
                <Text className="text-center text-lg pr-4">Score</Text>
                <TextInput
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-20 p-2.5"
                    onChangeText={(newScore) => setScore(newScore)}
                    value={score}
                    keyboardType="number-pad"
                />
            </View>
            <View className="h-12  mt-9 w-40">
                <TouchableOpacity
                    className="bg-green-300 font-bold py-2 px-4 rounded-full h-full w-full items-center justify-center disabled"
                    onPress={submitHole}
                >
                    <Text className="text-center text-lg">Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default GolfScoreScreen;
