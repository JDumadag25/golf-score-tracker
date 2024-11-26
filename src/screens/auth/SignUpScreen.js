import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const SignUpScreen = ({ navigation }) => {
    const insets = useSafeAreaInsets();

    return (
        <View
            className="flex flex-col top-5"
            style={{
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
                paddingLeft: insets.left,
                paddingRight: insets.right,
            }}
        >
            <View className="basis-10 justify-center items-center">
                <Text>Sign Up</Text>
            </View>
            <View className="basis-1/2 justify-center items-center ">
                <View className="basis-1/4 w-full px-6 ">
                    <Text>Email</Text>
                    <TextInput className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 mt-3" />
                </View>
                <View className="basis-1/4 w-full px-6 ">
                    <Text>Username</Text>
                    <TextInput className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 mt-3" />
                </View>
                <View className="basis-1/4 w-full px-6 ">
                    <Text>Password</Text>
                    <TextInput className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 mt-3" />
                </View>
                <View className="basis-1/4 w-full px-6 ">
                    <Text>Confirm Password</Text>
                    <TextInput className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 mt-3" />
                </View>
            </View>
            <View className="basis-1/4 mt-6">
                <View className="mx-8 ">
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Sign In Screen')}
                        className="items-center justify-center h-11 bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        <Text className="text-white">Sign Up</Text>
                    </TouchableOpacity>
                    {/* TEMPORARY */}
                    <View className="mx-8 ">
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Main')}
                            className="items-center justify-center h-11 bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            <Text className="text-white">
                                TEMP GO TO MAIN PAGE
                            </Text>
                        </TouchableOpacity>
                    </View>
                    {/* TEMPORARY */}
                </View>
            </View>
        </View>
    );
};

export default SignUpScreen;
