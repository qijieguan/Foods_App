import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';


const CartItem = ({item, onDelete}) => {
    return (
        <View style={styles.itemView}>
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.itemText}>${item.price}</Text>
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
        borderWidth: 1,
        borderColor: 'gray',
        height: 60,
        backgroundColor: 'white'
    },
    itemText: {
        textAlign: 'center',
        width: '40%',
        fontSize: 20,
        color: 'red',
        paddingBottom: 5
    }
});

export default CartItem;