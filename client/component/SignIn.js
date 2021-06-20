import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';


const SignIn = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        setEmail("");
        setPassword("");
    };

    return (
        <View style={styles.container}>
            <View style={styles.signInView}>
                <Text style={styles.signInLogo}>
                    Sign In
                </Text>
                <View style={styles.input_container}>
                    <View style={styles.iconView}>
                        <MaterialCommunityIcons 
                            name="email"
                            size={25}
                            color="white"
                        />
                    </View>
                    <TextInput
                        name="email"
                        style={styles.inputView}
                        value={email}
                        onChangeText={email => setEmail(email)}
                        placeholder="Enter Email"
                    />
                </View>
                <View style={styles.input_container}>
                    <View style={styles.iconView}>
                        <Ionicons 
                            name="eye"
                            size={25}
                            color="white"
                        />
                    </View>
                    <TextInput
                        name="password"
                        style={styles.inputView}
                        value={password}
                        secureTextEntry={true}
                        onChangeText={password => setPassword(password)}
                        placeholder="Enter New Password"
                    />
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Sign Up')}>
                    <Text style={styles.SignUpText}>
                        Sign Up
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonView} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>
                        Submit
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: 'beige'
    },
    signInView: {
        marginTop: 75,
        marginLeft: '10%',
        height: 400,
        width: '80%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'gray',
        shadowColor: '#000',
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 10,
        justifyContent: 'space-around',
        backgroundColor: 'white'
    },
    signInLogo: {
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: 'cyan'
    },
    input_container: {
        flexDirection: 'row',
        marginLeft: '5%',
        width: '90%',
        borderWidth: 1,
        borderColor: 'gray',
    },
    iconView: {
        width: '15%',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'cyan',
    },
    inputView: {
        width: '85%',
        fontSize: 14 
    },
    SignUpText : {
        marginLeft: 30,
        fontSize: 14,
        color: 'blue'
    },  
    buttonView: {
        marginLeft: '5%',
        width: '90%',
        height: 40,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'gray',
        justifyContent: 'space-around',
        backgroundColor: 'cyan',
    }, 
    buttonText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    }
});

export default SignIn;