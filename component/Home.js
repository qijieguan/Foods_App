import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


const Home = () => {
    return (
        <View style={styles.homeView}>
            <Text style={styles.homeText}>Welcome!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    homeView: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        backgroundColor: 'bisque'
    },
    homeText: {
        fontSize: 30,
        color: 'orange'
    }
});

export default Home;