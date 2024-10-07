import React, { useContext, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const SignInScreen = ({ navigation }) => {
    return (
        <View className="flex-1 justify-center items-center ">
            <Text>Golf Score Tracker</Text>
            <Text>Username</Text>
            <TextInput className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-52 p-2.5" />
            <Text>Password</Text>
            <TextInput className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-52 p-2.5" />
            <TouchableOpacity
                className="bg-green-300 text-white font-bold py-2 px-4 rounded-full"
                onPress={() => navigation.navigate('Start Screen')}
            >
                <Text>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity
                className="bg-green-300 text-white font-bold py-2 px-4 rounded-full"
                onPress={() => navigation.navigate('Sign Up Screen')}
            >
                <Text>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SignInScreen;
