import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Feather from 'react-native-vector-icons/dist/Feather';
import { DrawerActions } from '@react-navigation/native';
import * as RootNavigation from '../RootNavigation.js';

const Header = () => {

    return (
        <View style={styles.header}>
            <Text style={styles.logo}>
                <Text>FoodsApp</Text>
            </Text>
            <Feather 
                name="menu"
                size={30}
                color="white"
                onPress={() => {RootNavigation.dispatch(DrawerActions.toggleDrawer())}}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 10,
    },
    logo: {
        height: 50,
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 2,
        textAlign: 'center',
        color: 'white',
        paddingTop: 12,
        marginLeft: 130,
        marginRight: 95
    },
});

export default Header;