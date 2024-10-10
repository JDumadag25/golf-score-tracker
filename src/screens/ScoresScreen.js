import React, { useContext, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import ScoreContext from '../context/ScoreContext';

const ScoresScreen = ({ navigation }) => {
    const { scores } = useContext(ScoreContext);
    return (
        <View className="flex-1 justify-center items-center ">
            <Text>Scores: {scores}</Text>
        </View>
    );
};

export default ScoresScreen;
