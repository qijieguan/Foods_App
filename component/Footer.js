import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import * as RootNavigation from '../RootNavigation.js';


const Footer = () => {

    return (
        <View style={styles.footer}>
            <TouchableOpacity style={styles.footLi} onPress={() => RootNavigation.navigate('Home')}>
                <Text style={styles.footText}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.footLi}>
                <Text style={styles.footText}>Offers</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.footLi} onPress={() => RootNavigation.navigate('Menu')}>
                <Text style={styles.footText}>Menu</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.footLi} onPress={() => RootNavigation.navigate('Order')}>
                <Text style={styles.footText}>Order</Text>
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