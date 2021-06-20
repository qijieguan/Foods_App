import React from 'react';
import { StyleSheet} from 'react-native';
import Menu from '../Menu.js';
import MenuExpand from '../MenuExpand.js';
import { createStackNavigator } from '@react-navigation/stack';


const MenuStack = () => {
    
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator initialRouteName="Menu">
            <Stack.Screen name="Menu" component={Menu}
                options={{
                    headerTintColor: 'white',
                    headerStyle: {
                        backgroundColor: 'orange'
                    }
                }}
            />
            <Stack.Screen name="Category" component={MenuExpand}
                options={{
                    headerTintColor: 'white',
                    headerStyle: {
                        backgroundColor: 'orange'
                    }
                }}
            />
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create(

);

export default MenuStack;