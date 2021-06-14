import React from 'react';
import { StyleSheet } from 'react-native';
import SignIn from '../SignIn.js';
import SignUp from '../SignUp.js';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = () => {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator initialRouteName="Sign In"  >
            <Stack.Screen name="Sign In" component={SignIn}/>
            <Stack.Screen name="Sign Up" component={SignUp}/>
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({

});

export default Stack;