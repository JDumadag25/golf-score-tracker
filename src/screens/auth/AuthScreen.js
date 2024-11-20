import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const AuthScreen = ({ navigation }) => {
    const insets = useSafeAreaInsets();

    return (
        <View
            className="flex flex-col top-10"
            style={{
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
                paddingLeft: insets.left,
                paddingRight: insets.right,
            }}
        >
            <View className="basis-1/4 justify-center items-center ">
                <Text>Golf Score Tracker</Text>
            </View>
            <View className="basis-1/4 justify-center items-center ">
                <Text>Golf Score Tracker Description</Text>
            </View>
            <View className="basis-1/2 ">
                <View className="mx-8 ">
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Sign In Screen')}
                        className="items-center justify-center h-11 bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        <Text className="text-white">Sign In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Sign Up Screen')}
                        className="items-center justify-center h-11 bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        <Text className="text-white">Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default AuthScreen;
