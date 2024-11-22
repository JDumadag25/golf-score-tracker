import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const AuthButton = ({ onPress, label }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            className="items-center justify-center h-11 bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
            <Text className="text-white">{label}</Text>
        </TouchableOpacity>
    );
};

export default AuthButton;
