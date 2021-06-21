import React from 'react';
import { StyleSheet, View } from 'react-native';
import Category from './Category.js';;


const Menu = ({ navigation }) => {

    const onSelect = category => {
        navigation.navigate("Category",
            {selectCategory: category}
        );
    };

    return (
        <View style={styles.menuView}>
            <Category onSelect={onSelect}/>
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

export default Menu;