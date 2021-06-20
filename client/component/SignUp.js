import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

const SignUp = () => {

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");

    const handleSubmit = () => {
        console.log(fname + lname);
        setFname("");
        setLname("");
        setEmail("");
        setPassword("");
        setConfirmPass("");
    };


    return (
        <View style={styles.signUpView}>
            <Text style={styles.signUpLogo}>
                Sign Up
            </Text>
            <TextInput
                name="fname"
                style={styles.inputView}
                value={fname}
                onChangeText={fname => setFname(fname)}
                placeholder="Enter First Name"
            />
            <TextInput
                name="lname"
                style={styles.inputView}
                value={lname}
                onChangeText={lname => setLname(lname)}
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
            <TextInput
                name="confirm_pass"
                style={styles.inputView}
                value={confirmPass}
                secureTextEntry={true}
                onChangeText={confirmPass => setPassword(confirmPass)}
                placeholder="Confirm New Password"
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
    signUpView: {
        height: '100%',
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: 'white',
    },
    signUpLogo: {
        marginTop: 30,
        marginBottom: 30, 
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: 'cyan'
    },
    inputView: {
        marginLeft: '5%',
        marginTop: 10,
        marginBottom: 10,
        width: '90%',
        borderWidth: 1,
        borderColor: 'gray',
        fontSize: 14  
    },
    buttonView: {
        marginLeft: '5%',
        marginTop: 50,
        width: '90%',
        height: 50,
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

export default SignUp;