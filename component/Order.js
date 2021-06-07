import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useIsFocused } from '@react-navigation/native';
import CartItem from './CartItem.js';


const Order = () => {

    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [deleteItem, setDeleteItem] = useState(false);
    const isFocused = useIsFocused();

    useEffect(async () => {
        try {
            let items = await AsyncStorage.getItem('cartItems');
            if (items !== null) {
                setCartItems(JSON.parse(items));
                calcBalance(JSON.parse(items));
            }
            else {
                setCartItems([]);
            }
            console.log('render!');
        } catch (error) {
            console.log(error);
        }
    }, [isFocused]);

    const calcBalance = (items) => {
        let calcTotal = 0;
        for (i = 0; i < items.length; ++i) {
            calcTotal += items[i].price;
        }
        setTotalPrice(calcTotal);
    };

    const cancelOrder = async () => {
        await AsyncStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
    };

    const onDelete = async (itemID) => {
        setDeleteItem(!deleteItem);
        let prevItems = cartItems;
        prevItems = prevItems.filter(item => item.id !== itemID);
        setCartItems(prevItems);
        calcBalance(prevItems);
        if (prevItems.length > 0) {
            await AsyncStorage.setItem("cartItems", JSON.stringify(prevItems));
        }
        else {
            await AsyncStorage.clear();
        }
    };

    return(
        <View style={styles.orderView}>
            <FlatList 
                data={cartItems}
                renderItem={({item}) => <CartItem item={item} onDelete={onDelete}/>}
            />
            <Text style={styles.total}>
                Total: ${totalPrice}
            </Text>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.cancelBtnView} onPress={cancelOrder}>
                    <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.payBtnView}>
                    <Text style={styles.buttonText}>Pay</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    orderView: {
        paddingTop: 40,
        height: '100%',
        backgroundColor: 'bisque'
    },
    total: {
        top: 500,
        left: 250,
        position: 'absolute',
        fontSize: 24,
        color: 'red',
        zIndex: 2
    },
    btnContainer: {
        top: 575,
        position: 'absolute',
        width: '100%',
        zIndex: 2
    },
    cancelBtnView: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        backgroundColor: 'red',
    },
    payBtnView: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        backgroundColor: 'green'
    },
    buttonText: {
        color: 'white',
        fontSize: 20
    }
});

export default Order;