import React from 'react';
import { StyleSheet } from 'react-native';
import BottomTab from './BottomTab.js';
import Stack from './Stack.js';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'


const Drawer = () => {

    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator initialRouteName="Home"
            drawerContentOptions={{
                labelStyle: {
                    fontSize: 16,
                    fontWeight: 'bold'
                },
            }}
        >
            <Drawer.Screen name="Home" component={BottomTab}
                options={{
                    drawerIcon: () => (
                        <Ionicons
                            name="home-outline"
                            size={30}
                            color="cornflowerblue"
                        />
                    ),
                }}
            />
            <Drawer.Screen name="Sign In" component={Stack}
                options={{
                    drawerIcon: () => (
                        <MaterialIcons
                            name="account-box"
                            size={30}
                            color="cornflowerblue"
                        />
                    ),
                }} 
            />
        </Drawer.Navigator>
    );
};

const styles = StyleSheet.create({

});

export default Drawer;