import React from 'react';
import { StyleSheet } from 'react-native';
import Login from '../Login.js';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTab from './BottomTab.js';

const Drawer = () => {

    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={BottomTab}/>
            <Drawer.Screen name="Login" component={Login}/>
        </Drawer.Navigator>
    );
};

const styles = StyleSheet.create({

});

export default Drawer;