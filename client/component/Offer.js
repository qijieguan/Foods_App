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
        height: '100%',
        backgroundColor: 'bisque'
    },
    offerText: {
        textAlign: 'center',
        marginTop: 200,
        width: '70%',
        fontSize: 30,
        color: 'orange'
    }
});

export default Offer;