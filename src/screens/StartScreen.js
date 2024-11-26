import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import ScoreContext from '../context/ScoreContext';

const StartScreen = ({ navigation }) => {
    const { submitRoundType, roundType, submitCourseName } =
        useContext(ScoreContext);

    const setRoundType = (type) => {
        submitRoundType(type);
    };

    const setCourse = (text) => {
        submitCourseName(text);
    };

    return (
        <View className="flex-1 items-center ">
            <View className="flex-initial mt-10">
                <Text className="text-3xl">Course Name</Text>
            </View>
            <TextInput
                className="bg-gray-50 border mt-5 border-gray-300 text-gray-900 text-sm rounded-lg block w-72 p-2.5"
                onChangeText={(text) => setCourse(text)}
            />
            <View className="flex-initial mt-10">
                <Text className="text-3xl">Round type</Text>
            </View>

            <View className="flex-initial mt-5 h-20 flex-row p-5 ">
                <View className=" flex-auto mr-5">
                    <TouchableOpacity
                        className={
                            roundType === 18
                                ? `bg-green-300 text-white font-bold py-2 px-4 rounded-full`
                                : `bg-gray-300 text-white font-bold py-2 px-4 rounded-full`
                        }
                        onPress={() => setRoundType(18)}
                    >
                        <Text className="text-center">18 Holes</Text>
                    </TouchableOpacity>
                </View>
                <View className="flex-auto ">
                    <TouchableOpacity
                        className={
                            roundType === 9
                                ? `bg-green-300 text-white font-bold py-2 px-4 rounded-full`
                                : `bg-gray-300 text-white font-bold py-2 px-4 rounded-full`
                        }
                        onPress={() => setRoundType(3)}
                    >
                        <Text className="text-center">9 Holes</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* <View className="flex-initial w-full items-center justify-center ">
                <TextInput
                    placeholder="Enter Course Par"
                    className="`w-full bg-neutral-100 dark:bg-neutral-900 border border-black/20 dark:border-white/20 rounded-md h-12 px-4 text-neutral-950 dark:text-neutral-50"
                />
            </View> */}

            <View className="h-14 w-32 mt-5  items-center justify-center ">
                {roundType ? (
                    <TouchableOpacity
                        className="bg-green-300 text-white font-bold py-2 px-4 rounded-full h-full w-full items-center justify-center"
                        onPress={() => navigation.navigate('Score Screen')}
                    >
                        <Text className="text-center text-lg">Play</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        className="bg-gray-300 text-white font-bold py-2 px-4 rounded-full h-full w-full items-center justify-center disabled"
                        disabled={true}
                    >
                        <Text className="text-center text-lg">Play</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default StartScreen;

// import React, { useContext, useEffect } from 'react';
// import { View, Text, TextInput, TouchableOpacity } from 'react-native';

// const StartScreen = ({ navigation }) => {
//     return (
//         <View className="flex-1 justify-center items-center ">
//             <Text>Start</Text>
//         </View>
//     );
// };

// export default StartScreen;
