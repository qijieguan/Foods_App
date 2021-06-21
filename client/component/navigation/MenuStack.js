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
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontSize: 24,
                        fontWeight: 'bold',
                    },
                    headerStyle: {
                        height: 60,
                        backgroundColor: 'orange'
                    }
                }}
            />
            <Stack.Screen name="Category" component={MenuExpand}
                options={{
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontSize: 20,
                        fontWeight: 'bold'
                    },
                    headerStyle: {
                        backgroundColor: 'orange',
                    }
                }}
            />
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create(

);

export default MenuStack;