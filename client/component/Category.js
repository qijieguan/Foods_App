import React from 'react';
import { StyleSheet, ScrollView, Image, Text, TouchableOpacity } from 'react-native';


const Category = ({ onSelect }) => {

    const Img_1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTItBYtuXbI_ZxUARoIYY_n5pALpTWU6LLEnw&usqp=CAU";
    const Img_2 = "https://upload.wikimedia.org/wikipedia/commons/6/67/Fries_2.jpg";
    const Img_3 = "https://cdn.pixabay.com/photo/2015/02/06/16/44/whiskey-626254_1280.jpg";

    return (
        <ScrollView style={styles.categoryList}>
            <TouchableOpacity style={styles.categoryView} onPress={() => onSelect("burger")}>
                <Image 
                    style={styles.categoryImg}
                    source={{
                        uri: Img_1
                    }}
                />
                <Text style={styles.categoryText}>Burgers</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryView} onPress={() => onSelect("side")}>
                <Image 
                    style={styles.categoryImg}
                    source={{
                        uri: Img_2
                    }}
                />
                <Text style={styles.categoryText}>Sides</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryView} onPress={() => onSelect("beverage")}>
                <Image 
                    style={styles.categoryImg}
                    source={{
                        uri: Img_3
                    }}
                />
                <Text style={styles.categoryText}>Beverages</Text>
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
        height: 200,
        width: '90%',
        borderRadius: 10,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 10,
    },
    categoryImg: {
        height: '80%',
        width: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomWidth: 1,
        borderColor: 'gray'
    },
    categoryText: {
        marginTop: 10,
        height: '20%',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    }
});

export default Category;