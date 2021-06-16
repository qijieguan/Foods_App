import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const Category = ({ onSelect }) => {
    return (
        <View style={styles.categoryList}>
            <TouchableOpacity style={styles.categoryView} onPress={() => onSelect("all")}>
                <Text style={styles.categoryText}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryView} onPress={() => onSelect("burger")}>
                <Text style={styles.categoryText}>Burger</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryView} onPress={() => onSelect("side")}>
                <Text style={styles.categoryText}>Side</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryView} onPress={() => onSelect("beverage")}>
                <Text style={styles.categoryText}>Beverage</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    categoryList: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    categoryView: {
        marginLeft: 8,
        marginRight: 8,
        height: 65,
        width: 65,
        borderRadius: 50,
        backgroundColor: 'crimson',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 10,
    },
    categoryText: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
    }
});

export default Category;