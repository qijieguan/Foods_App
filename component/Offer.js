import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Offer = () => {

    return(
        <View style={styles.offerView}>
            <Text style={styles.offerText}>
                Offers currently unavailable!
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    offerView: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        backgroundColor: 'bisque'
    },
    offerText: {
        fontSize: 30,
        color: 'orange'
    }
});

export default Offer;