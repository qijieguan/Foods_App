import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';


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
                <TextInput
                    name="email"
                    style={styles.inputView}
                    value={email}
                    onChangeText={email => setEmail(email)}
                    placeholder="Enter Email"
                />
                <TextInput
                    name="password"
                    style={styles.inputView}
                    value={password}
                    secureTextEntry={true}
                    onChangeText={password => setPassword(password)}
                    placeholder="Enter New Password"
                />
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
        marginTop: 80,
        marginLeft: '10%',
        height: 375,
        width: '80%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'gray',
        justifyContent: 'space-around',
        backgroundColor: 'white'
    },
    signInLogo: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: 'lightgreen'
    },
    inputView: {
        marginLeft: '5%',
        width: '90%',
        borderWidth: 1,
        borderColor: 'gray'  
    },
    SignUpText : {
        marginLeft: 30,
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