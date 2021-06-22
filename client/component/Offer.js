import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';


const Offer = () => {

    return(
        <View style={styles.offerView}>
            <Text style={styles.offerText}>
                Offers currently unavailable!
            </Text>
            <MaterialIcons
                name="access-time"
                size={180}
                color="orange"
            />
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
        marginTop: 130,
        marginBottom: 30,
        width: '70%',
        fontSize: 30,
        fontWeight: 'bold',
        color: 'orange'
    }
});

export default Offer;