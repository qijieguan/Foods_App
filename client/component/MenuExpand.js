import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import ListItem from './ListItem.js';
import AsyncStorage from '@react-native-community/async-storage';
import { useIsFocused } from '@react-navigation/native';
import uuid from 'uuid/v4';


const MenuExpand = ({ route }) => {

    const burger = [
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
        }
    ];

    const side = [
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
        }
    ];

    const drink = [
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
    const [category, setCategory] = useState([]);
    const [isAdd, setIsAdd] = useState(false);

    const {selectCategory} = route.params;
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
            if (selectCategory === "burger") {
                setCategory(burger);
            }
            else if (selectCategory === "side") {
                setCategory(side);
            }
            else {
                setCategory(drink);
                console.log("drinks!");
            }
            console.log(selectCategory);
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

    return (
        <View style={styles.menuView}>
            <FlatList 
                data={category} 
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
});

export default MenuExpand;