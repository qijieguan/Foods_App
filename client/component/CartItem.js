import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';


const CartItem = ({item, onDelete}) => {
    return (
        <View style={styles.itemView}>
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.itemText}>${(item.price).toFixed(2)}</Text>
            <AntDesign
                name="close" 
                size={30}
                color='firebrick'
                onPress={() => onDelete(item.id)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    itemView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'gray',
    },
    itemText: {
        textAlign: 'center',
        width: '40%',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red',
        paddingBottom: 5
    }
});

export default CartItem;