import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';


const SignIn = () => {

    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        console.log(fname + " " + lname);
        setFName("");
        setLName("");
        setEmail("");
        setPassword("");
    };

    return (
        <View style={styles.signInView}>
            <Text style={styles.signInLogo}>
                Sign In
            </Text>
            <TextInput
                name="fname"
                style={styles.inputView}
                value={fname}
                onChangeText={fname => setFName(fname)}
                placeholder="Enter First Name"
            />
            <TextInput
                name="lname"
                style={styles.inputView}
                value={lname}
                onChangeText={lname => setLName(lname)}
                placeholder="Enter Last Name"
            />
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
            <TouchableOpacity style={styles.buttonView} onPress={handleSubmit}>
                <Text style={styles.buttonText}>
                    Submit
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    signInView: {
        marginTop: 60,
        marginLeft: '10%',
        height: 500,
        width: '80%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'gray',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    signInLogo: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: 'lightgreen'
    },
    inputView: {
        width: '90%',
        borderWidth: 1,
        borderColor: 'gray'  
    },
    buttonView: {
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