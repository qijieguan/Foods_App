import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import ListItem from './ListItem.js';
import Category from './Category.js';
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
            category: 'beverage',
            calories: 150
        },
        {
            id: uuid(),
            name: 'Coffee',
            price: 1.50,
            category: 'beverage',
            calories: 150
        },
        {
            id: uuid(),
            name: 'Shake',
            price: 2.00,
            category: 'beverage',
            calories: 200
        }
    ];

    const [cartItems, setCartItems] = useState([]);
    const [isAdd, setIsAdd] = useState(false);
    const [selectItems, setSelectItems] = useState(items);
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
            setIsAdd(false);
            //console.log('render!')
        } catch (error) {
            console.log(error);
        }
    }, [isFocused, isAdd])

    const addCart = async (item) => {
        let prevItems = cartItems;
        item.id = uuid();
        prevItems.push(item);
        setCartItems(prevItems);
        setIsAdd(true);
        await AsyncStorage.setItem("cartItems", JSON.stringify(prevItems));  
    };

    const onSelect = category => {
        let prevItems = items;
        if (category === "all") {}
        else if (category === "burger") {
            prevItems = prevItems.filter(item => item.category === "burger");
        }
        else if (category === "side") {
            prevItems = prevItems.filter(item => item.category === "side");
        }
        else {
            prevItems = prevItems.filter(item => item.category === "beverage");
        }
        setSelectItems(prevItems);
    };

    return (
        <View style={styles.menuView}>
            <Text style={styles.menuLogo}>Menu</Text>
            <Category onSelect={onSelect}/>
            <FlatList 
                data={selectItems} 
                renderItem={({item}) => <ListItem item={item} addCart={addCart}/>} 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    menuView: {
        height: '100%',
        display: 'flex',
        paddingTop: 15,
        backgroundColor: 'bisque',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    menuLogo: {
        paddingBottom: 10,
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'red'
    },
});

export default Menu;