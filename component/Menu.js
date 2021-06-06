import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import ListItem from './ListItem.js';
import AsyncStorage from '@react-native-community/async-storage';
import { useIsFocused } from '@react-navigation/native';
import uuid from 'uuid/v4';


const Menu = () => {

    const items = [
        {
            id: uuid(),
            name: 'Cheeseburger',
            price: 4.50,
            category: 'burger',
            calories: 700
        },
        {
            id: uuid(),
            name: 'Spicy Chicken Sandwich',
            price: 5.00,
            category: 'burger',
            calories: 800
        },
        { 
            id: uuid(),
            name: 'Large Fries',
            price: 2.50,
            category: 'side',
            calories: 600
        }, 
        {
            id: uuid(),
            name: '10-pct Chicken Nuggets',
            price: 2.00,
            category: 'side',
            calories: 800
        },
        {
            id: uuid(),
            name: 'Drinks',
            price: 1.50,
            category: 'drinks',
            calories: 150
        },
        {
            id: uuid(),
            name: 'Coffee',
            price: 1.50,
            category: 'drinks',
            calories: 150
        },
        {
            id: uuid(),
            name: 'Shake',
            price: 2.00,
            category: 'drinks',
            calories: 200
        }
    ];

    const [cartItems, setCartItems] = useState([]);
    const isFocused = useIsFocused();

    useEffect(async () => {
        try {
            let items = await AsyncStorage.getItem('cartItems');
            if (items !== null) {
                setCartItems(JSON.parse(items));
            }
            else {
                setCartItems([]);
            }
            console.log('render!')
        } catch (error) {
            console.log(error);
        }
    }, [isFocused])

    const addCart = async (item) => {
        let prevItems = cartItems;
        item.id = uuid();
        prevItems.push(item);
        setCartItems(prevItems);
        await AsyncStorage.setItem("cartItems", JSON.stringify(prevItems));  
    };

    return (
        <View style={styles.menuView}>
            <Text style={styles.menuLogo}>Menu</Text>
            <FlatList 
                data={items} 
                renderItem={({item}) => <ListItem item={item} addCart={addCart}/>} 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    menuView: {
        height: 'auto',
        display: 'flex',
        paddingTop: 15,
        backgroundColor: 'beige',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    menuLogo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'red'
    }
});

export default Menu;