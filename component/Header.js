import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Feather from 'react-native-vector-icons/dist/Feather';


const Header = () => {
    
    return (
        <View style={styles.header}>
            <Text style={styles.logo}>
                <Text>FoodsApp</Text>
            </Text>
            <Feather 
                name="menu"
                size={30}
                color="white"
                onPress={() => {}}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        height: 50,
        fontSize: 20,
        letterSpacing: 2,
        textAlign: 'center',
        color: 'white',
        paddingTop: 12,
        marginLeft: 130,
        marginRight: 95
    },
});

export default Header;