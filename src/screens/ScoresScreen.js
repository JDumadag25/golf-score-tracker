import React, { useContext, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import ScoreContext from '../context/ScoreContext';

const ScoresScreen = ({ navigation }) => {
    const { scores } = useContext(ScoreContext);
    console.log('scores', scores);

    // Remember how to refactor this
    const scoreMap = () => {
        scores.map((score) => {
            return (
                <View>
                    <Text>{score.courseName}</Text>
                    <Text>{score.totalScore}</Text>
                </View>
            );
        });
    };

    return (
        <View className="flex-1 justify-center items-center ">
            <Text>Hello</Text>
            {scores.map((score) => {
                return (
                    <View>
                        <Text>{score.courseName}</Text>
                        <Text>{score.totalScore}</Text>
                    </View>
                );
            })}
        </View>
    );
};

export default ScoresScreen;
