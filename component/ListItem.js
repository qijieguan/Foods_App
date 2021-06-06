import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';


const ListItem = ({item, addCart}) => {

    return (
        <View style={styles.itemView}>
            <Text style={styles.itemText}>
                {item.name}
            </Text>
            <Text style={styles.itemText}>
                ${item.price}
            </Text>
            <Text style={styles.itemText}>
                cal. {item.calories}
            </Text>
            <TouchableOpacity style={styles.getView} onPress={() => {addCart(item)}}>
                <Text style={styles.getText}>
                    GET
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    itemView: {
        height: 60,
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'gray',
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    itemText: {
        textAlign: 'center',
        width: '26.6%',
        color: 'red',
        fontSize: 16
    },
    getView: {
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: 'red',
        width: '20%',
    },
    getText: {
        textAlign: 'center',
        color: 'white',
    }
});

export default ListItem;