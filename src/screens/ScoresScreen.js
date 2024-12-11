import React, { useContext, useEffect } from 'react';
import {
    View,
    Text,
    FlatList,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import ScoreContext from '../context/ScoreContext';

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
    const ScoreCard = ({ score }) => {
        return (
            <View className="flex-row block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 w-full mb-5 ">
                <View className="basis-1/4  justify-center items-center">
                    <Text className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        {score.item.totalScore}
                    </Text>
                </View>
                <View className="basis-3/4 ">
                    <Text className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        {score.item.courseName}{' '}
                    </Text>
                </View>
            </View>
        );
    };

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
