import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import * as RootNavigation from '../RootNavigation.js';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';

const Footer = () => {

    return (
        <View style={styles.footer}>
            <TouchableOpacity style={styles.footLi} onPress={() => RootNavigation.navigate('Home')}>
                <Ionicons
                    name="home-outline"
                    size={30}
                    color="white"
                />
            </TouchableOpacity>

            <TouchableOpacity style={styles.footLi} onPress={() => RootNavigation.navigate('Menu')}>
                <MaterialIcons
                    name="menu-book"
                    size={30}
                    color="white"
                />
            </TouchableOpacity>

            <TouchableOpacity style={styles.footLi} onPress={() => RootNavigation.navigate('Offer')}>
                <FontAwesome5
                    name="grin-stars"
                    size={30}
                    color="white"
                />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.footLi} onPress={() => RootNavigation.navigate('Order')}>
                <AntDesign
                    name="shoppingcart"
                    size={30}
                    color="white"
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        marginTop: 760,
        flexDirection: 'row',
        backgroundColor: 'orange',
        position: 'absolute'
    },
    footLi: {
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '25%',
        height: 50,
        borderRightWidth: 1,
        borderColor: 'white'
    },
    footText: {
        fontSize: 16,
        textAlign: 'center',
        color: 'white',
    }
});

export default Footer;