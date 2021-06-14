import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


const Home = () => {
    return (
        <View style={styles.homeView}>
            <Text style={styles.homeText}> Welcome! Exclusive Deals and Express Order! </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    homeView: {
        alignItems: 'center',
        height: '100%',
        backgroundColor: 'bisque'
    },
    homeText: {
        textAlign: 'center',
        marginTop: 200,
        width: '70%',
        fontSize: 30,
        color: 'orange'
    }
});

export default Home;