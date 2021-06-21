import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';


const ListItem = ({item, addCart}) => {

    return (
        <View style={styles.itemView}>  
            <Image 
                style={styles.itemImg}
                source={{
                    uri: item.imgURL
                }}
            />
            <View style={{width: '60%', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={styles.itemName}>
                    {item.name}
                </Text>
                <Text style={styles.itemText}>
                        ${(item.price).toFixed(2)}     cal. {item.calories}
                </Text>
                <TouchableOpacity style={styles.getView} onPress={() => {addCart(item)}}>
                    <Text style={styles.getText}>
                        GET
                    </Text>
                </TouchableOpacity>
            </View>     
        </View>
    );
};

const styles = StyleSheet.create({
    itemView: {
        height: 150,
        width: 400,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: 'gray',
        shadowColor: '#000',
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 10,
    },
    itemImg: {
        width: '40%', 
        height: 150,
        borderWidth: 1,
        borderColor: 'gray'
    },
    itemName: {
        marginBottom: 10,
        textAlign: 'center',
        color: 'red',
        fontSize: 20,
        fontWeight: 'bold',
    },
    itemText: {
        marginBottom: 10,
        textAlign: 'center',
        color: 'red',
        fontSize: 16,
        fontWeight: 'bold',
    },
    getView: {
        justifyContent: 'center',
        height: 60,
        width: 60,
        backgroundColor: 'crimson',
        borderRadius: 50,
        shadowColor: '#000',
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 10,
    },
    getText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
    }
});

export default ListItem;