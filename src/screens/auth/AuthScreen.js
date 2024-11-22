import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AuthButton from '../../components/auth/Button';
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
                    <AuthButton
                        label="Sign Up"
                        onPress={() => navigation.navigate('Sign Up Screen')}
                    />
                    <AuthButton
                        label="Sign In"
                        onPress={() => navigation.navigate('Sign In Screen')}
                    />
                </View>
            </View>
        </View>
    );
};

export default AuthScreen;
