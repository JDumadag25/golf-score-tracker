import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import ScoreContext from '../context/ScoreContext';

const GolfScoreScreen = ({ navigation }) => {
    const {
        hole,
        totalScore,
        toPar,
        nextHole,
        roundType,
        totalRounds,
        totalScoreTest,
        getTotalRoundScores,
        getToPar,
        toParTest,
        goToPreviousHole,
    } = useContext(ScoreContext);

    const [score, setScore] = useState('');
    const [par, setPar] = useState('');

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getTotalRoundScores();
            getToPar();
        });

        return unsubscribe;
    }, [navigation]);

    const submitHole = () => {
        nextHole(score, par);

        if (totalRounds.length + 1 === roundType) {
            navigation.navigate('Finish Screen');
        } else {
            navigation.push('Score Screen');
            setScore('');
            setPar('');
        }
    };

    const goBack = () => {
        goToPreviousHole();
        navigation.goBack();
    };

    return (
        <View className="items-center flex-1 m-10  ">
            <View className="flex ">
                <Text className="text-3xl">Hole {totalRounds.length + 1} </Text>
            </View>
            <View className="flex  mt-10">
                <Text className="text-3xl">
                    Current Score: {totalScoreTest} ({toParTest}){' '}
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
                {score && par ? (
                    <TouchableOpacity
                        className="bg-green-300 font-bold py-2 px-4 rounded-full h-full w-full items-center justify-center "
                        onPress={submitHole}
                    >
                        <Text className="text-center text-lg">Next</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        className="bg-gray-300 font-bold py-2 px-4 rounded-full h-full w-full items-center justify-center disabled"
                        disabled={true}
                    >
                        <Text className="text-center text-lg">Next</Text>
                    </TouchableOpacity>
                )}
            </View>

            <View className="mt-5 flex-row p-5 ">
                <View className=" mr-5  ">
                    <TouchableOpacity
                        className={`bg-green-300 text-white font-bold  rounded-full w-24 h-7 justify-center`}
                        onPress={goBack}
                    >
                        <Text className="text-center">Go Back</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        className={`bg-green-300 text-white font-bold rounded-full w-24  h-7 justify-center`}
                    >
                        <Text className="text-center">End Round</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default GolfScoreScreen;
