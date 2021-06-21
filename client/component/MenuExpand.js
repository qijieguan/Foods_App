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
            calories: 700,
            imgURL: 'https://cdn.pixabay.com/photo/2020/06/07/14/28/cute-5270656_1280.jpg'
        },
        {
            id: uuid(),
            name: 'Spicy Chicken Sandwich',
            price: 5.00,
            category: 'burger',
            calories: 800,
            imgURL: 'https://cdn.pixabay.com/photo/2013/07/13/12/15/chicken-159496_1280.png'
        }
    ];

    const side = [
        { 
            id: uuid(),
            name: 'Large Fries',
            price: 2.50,
            category: 'side',
            calories: 600,
            imgURL: 'https://live.staticflickr.com/3704/9622271807_7c3142fdff_b.jpg'
        }, 
        {
            id: uuid(),
            name: '10-pct Chicken Nuggets',
            price: 2.00,
            category: 'side',
            calories: 800,
            imgURL: 'https://cdn.pixabay.com/photo/2017/04/29/01/11/gold-nugget-2269847_1280.jpg'
        }
    ];

    const drink = [
        {
            id: uuid(),
            name: 'Drinks',
            price: 1.50,
            category: 'beverage',
            calories: 150,
            imgURL: 'https://thumbs.dreamstime.com/z/golden-whiskey-pouring-lowball-bourbon-being-poured-glass-over-white-background-126311216.jpg'
        },
        {
            id: uuid(),
            name: 'Coffee',
            price: 1.50,
            category: 'beverage',
            calories: 150,
            imgURL: 'https://cdn1.photostockeditor.com/c/1712/cup-coffee-latte-in-white-ceramic-mug-drink-drink-image.jpg'
        },
        {
            id: uuid(),
            name: 'Shake',
            price: 2.00,
            category: 'beverage',
            calories: 200,
            imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxh53A7jOs4LUVvHwD6eS5BfPBSA6Lm6M51Q&usqp=CAU'
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