import React from 'react';
import { StyleSheet } from 'react-native';
import BottomTab from './BottomTab.js';
import Stack from './Stack.js';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = () => {

    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={BottomTab}/>
            <Drawer.Screen name="Sign In" component={Stack}/>
        </Drawer.Navigator>
    );
};

const styles = StyleSheet.create({

});

export default Drawer;