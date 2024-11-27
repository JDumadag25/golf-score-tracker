import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import ScoreContext from '../context/ScoreContext';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const StartScreen = ({ navigation }) => {
    const insets = useSafeAreaInsets();

    const { submitRoundType, roundType, submitCourseName, courseName } =
        useContext(ScoreContext);

    const setRoundType = (type) => {
        submitRoundType(type);
    };

    const setCourse = (text) => {
        submitCourseName(text);
    };

    return (
        <View
            className="flex flex-col "
            style={{
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
                paddingLeft: insets.left,
                paddingRight: insets.right,
            }}
        >
            <View className="basis-1/4 items-center justify-center">
                <View>
                    <Text className="text-3xl">Course Name</Text>
                </View>
                <TextInput
                    className="bg-gray-50 border mt-5 border-gray-300 text-gray-900 text-sm rounded-lg block w-72 p-2.5"
                    onChangeText={(text) => setCourse(text)}
                />
            </View>

            <View className="basis-1/2 items-center">
                <View className="my-5 ">
                    <Text className="text-3xl">Round type</Text>
                </View>
                <View className="flex-row justify-evenly w-full mb-5">
                    <View className="w-1/3 ">
                        <TouchableOpacity
                            className={
                                roundType === 18
                                    ? `bg-green-300 text-white h-11 font-bold py-2 px-4 rounded-full justify-center`
                                    : `bg-gray-300 text-white h-11 font-bold py-2 px-4 rounded-full justify-center`
                            }
                            onPress={() => setRoundType(18)}
                        >
                            <Text className="text-center">18 Holes</Text>
                        </TouchableOpacity>
                    </View>
                    <View className="w-1/3 ">
                        <TouchableOpacity
                            className={
                                roundType === 9
                                    ? `bg-green-300 text-white h-11 font-bold py-2 px-4 rounded-full justify-center`
                                    : `bg-gray-300 text-white h-11 font-bold py-2 px-4 rounded-full  justify-center`
                            }
                            onPress={() => setRoundType(3)}
                        >
                            <Text className="text-center">9 Holes</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View className=" w-full items-center h-11 mt-5">
                    {roundType && courseName ? (
                        <TouchableOpacity
                            className="bg-green-300 text-white font-bold py-2 px-4 rounded-full w-1/2 justify-center"
                            onPress={() => navigation.navigate('Score Screen')}
                        >
                            <Text className="text-center text-lg">Play</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity
                            className="bg-gray-300 text-white font-bold py-2 px-4 rounded-full w-1/2 justify-center disabled"
                            disabled={true}
                        >
                            <Text className="text-center text-lg">Play</Text>
                        </TouchableOpacity>
                    )}
                </View>
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
