import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';


const Home = () => {
    return (
        <View style={styles.homeView}>
            <Text style={styles.homeText}> Welcome! Exclusive Deals and Express Order! </Text>
            <Ionicons
                name="restaurant-outline"
                size={120}
                color="orange"
                style={{marginLeft: 20}}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    homeView: {
        alignItems: 'center',
        height: '100%',
        backgroundColor: 'bisque',
    },
    homeText: {
        textAlign: 'center',
        marginTop: 130,
        marginBottom: 30,
        width: '70%',
        fontSize: 30,
        fontWeight: 'bold',
        color: 'orange'
    }
});

export default Home;