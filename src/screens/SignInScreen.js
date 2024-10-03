import React, { useContext, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const SignInScreen = ({ navigation }) => {
    return (
        <View className="flex-1 justify-center items-center ">
            <Text>Hello</Text>
            <TextInput className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-20 p-2.5" />
            <TextInput className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-20 p-2.5" />
        </View>
    );
};

export default SignInScreen;
