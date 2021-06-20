import React from 'react';
import { StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';

const Category = ({ onSelect }) => {
    return (
        <ScrollView style={styles.categoryList}>
            <TouchableOpacity style={styles.categoryView} onPress={() => onSelect("burger")}>
                <Text style={styles.categoryText}>Burger</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryView} onPress={() => onSelect("side")}>
                <Text style={styles.categoryText}>Side</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryView} onPress={() => onSelect("beverage")}>
                <Text style={styles.categoryText}>Beverage</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    categoryList: {
        marginBottom: 20,
        width: '100%',
    },
    categoryView: {
        marginLeft: '5%',
        marginTop: 35,
        marginBottom: 35,
        height: 150,
        width: '90%',
        borderRadius: 5,
        backgroundColor: 'cyan',
        justifyContent: 'center',
        alignItems: 'center',
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