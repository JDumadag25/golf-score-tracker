import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScoreContext from '../context/ScoreContext';

const FinishScreen = () => {
    const { totalScore, toPar } = useContext(ScoreContext);
    return (
        <View>
            <Text>
                Final Score: {totalScore} ({toPar})
            </Text>
        </View>
    );
};

export default FinishScreen;
