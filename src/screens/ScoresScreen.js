import React, { useContext, useEffect } from 'react';
import {
    View,
    Text,
    FlatList,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import ScoreContext from '../context/ScoreContext';
import ScoreCard from '../components/ScoreCard';

const ScoresScreen = ({ navigation }) => {
    const { scores } = useContext(ScoreContext);
    // console.log('scores', scores);

    // Remember how to refactor this
    // const scoreMap = () => {
    //     scores.map((score) => {
    //         return (
    //             <View className="flex-2 border-2 border-red-100">
    //                 <Text>{score.courseName}</Text>
    //                 <Text>{score.totalScore}</Text>
    //             </View>
    //         );
    //     });
    // };

    return (
        <View className="flex-1 justify-center items-center m-5">
            <FlatList
                data={scores}
                renderItem={(score) => <ScoreCard score={score} />}
            />
        </View>
    );
};

export default ScoresScreen;
