import React, { useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ScoreContext from '../context/ScoreContext';

const FinishScreen = ({ navigation }) => {
    const { totalScoreTest, toParTest, getTotalRoundScores, getToPar } =
        useContext(ScoreContext);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getTotalRoundScores();
            getToPar();
        });

        return unsubscribe;
    }, [navigation]);
    return (
        <View className="flex-1 justify-center items-center ">
            <View>
                <Text className="text-3xl">
                    Final Score: {totalScoreTest} ({toParTest})
                </Text>
            </View>
            <View className="flex-initial mt-5 h-20 flex-row p-5 ">
                <View className=" flex-auto mr-5">
                    <TouchableOpacity className="bg-green-300 text-white font-bold py-2 px-4 rounded-full">
                        <Text className="text-center">Save Score</Text>
                    </TouchableOpacity>
                </View>
                <View className="flex-auto ">
                    <TouchableOpacity className="bg-green-300 text-white font-bold py-2 px-4 rounded-full">
                        <Text className="text-center">Delete Round</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default FinishScreen;
