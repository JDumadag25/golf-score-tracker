import React, { useContext, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const AuthScreen = ({ navigation }) => {
    return (
        <View className="flex-1 justify-center items-center border-red-300 ">
            <Text>Golf Score Tracker</Text>
            <Text>Have An Account? Sign In</Text>

            <TouchableOpacity
                className="bg-green-300 text-white font-bold py-2 px-4 rounded-full"
                onPress={() => navigation.navigate('Sign In')}
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

export default AuthScreen;
