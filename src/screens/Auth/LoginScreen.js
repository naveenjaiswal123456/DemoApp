import React, { useEffect, useState } from 'react';
import {
    Image,
    KeyboardAvoidingView,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View, ActivityIndicator, StatusBar
} from 'react-native';
import { Colors } from '../../assets/colors';
import { Font } from '../../assets/font';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/actions/loginAction';
import Loader from '../../components/Loader';
import { validateEmail } from '../../lib/validation';
import LinearGradient from "react-native-linear-gradient";


const emailIcon = require('../../assets/icons/email.png');
const passwordIcon = require('../../assets/icons/password.png');
const logoIcon = require('../../assets/icons/logo.png');

const LoginScreen = ({ navigation }) => {

    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginResponse = useSelector(state => state.loginReducer.data);
    const loading = useSelector(state => state.loginReducer.loading);
    //console.log(loginResponse);

    //Click events
    const handleLogin = () => {
        //navigation.navigate('Home');

        if (email == '') {
            alert('Please enter email address')
        } else if (validateEmail(email, {}).error) {
            alert('Please enter valid email')
        } else if (password == '') {
            alert('Please enter password')
        } else {
            const request = {
                'email': email,
                'password': password,
            }
            dispatch(login(request));
        }
    }

    const handleSignup = () => {
        navigation.navigate('Signup');
    }

    const handleForgotPassword = () => {
        navigation.navigate('Forgot Password');
    }

    useEffect(() => {
        // if(Object.keys(loginResponse).length != 0 && loginResponse.OK == false){
        //     alert(loginResponse.Messages)
        // }
        // if(Object.keys(loginResponse).length != 0 && loginResponse.OK == true){
        //     navigation.navigate('Home');
        // }

    }, [loginResponse])

    return (
        <>
        <SafeAreaView style={styles.topSafeArea} />
        <SafeAreaView style={styles.containerStyle}>
        <StatusBar barStyle="light-content" />
            <LinearGradient
                //start={{x: 0.0, y: 1.0}} end={{x: 0.0, y: 1.0}}
                colors={[Colors.maize, Colors.primary, Colors.primary]}
                style={{ flex: 1 }}>

                <Loader loading={loading} />

                <KeyboardAvoidingView enabled={true} behavior={Platform.OS === "ios" ? "padding" : ""} style={{ flex: 1, paddingHorizontal: 40 }}>
                    <ScrollView showsVerticalScrollIndicator={false} >
                        <Text style={[styles.label1Style, { fontFamily: Font.RobotoBold }]}>Login</Text>
                        <Text style={styles.emailLabelStyle}>Email</Text>
                        <Input onChangeText={text => setEmail(text)} keyboardType={'email-address'} placeHolder={'Email'} style={styles.inputStyle} />
                        <Text style={[styles.emailLabelStyle, { marginTop: 25 }]}>Password</Text>
                        <Input onChangeText={(text) => { setPassword(text) }} iconHeight={18} secureTextEntry={true} placeHolder={'Password'} style={styles.inputStyle} />
                        {/* <View style={{ marginTop: 20, backgroundColor: 'red', borderRadius: 5, alignSelf: 'center' }}>
                            <Text style={{ fontSize: 15, paddingHorizontal: 10, paddingVertical: 8, color: 'white', fontFamily: Font.RobotoMedium }}>Email or password is not correct</Text>
                        </View> */}
                        <Button onPress={handleLogin} style={styles.buttonStyle} title="LOG IN" colorOne={Colors.aquaGreen} colorTwo={Colors.aquaGreen} />
                        <TouchableOpacity >
                            <Text style={{ fontSize: 15, alignSelf: 'center', marginTop: 30, color: Colors.white, fontFamily: Font.RobotoMedium }}>Forgot my password ?</Text>
                        </TouchableOpacity>

                    </ScrollView>

                </KeyboardAvoidingView>
            </LinearGradient>



        </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: Colors.primary,
        //paddingHorizontal: 40
    },
    label1Style: {
        fontSize: 25,
        alignSelf: 'center',
        marginTop: 30,
        color: Colors.white,
    },
    label2Style: {
        fontSize: 50,
        marginTop: 30,
        color: Colors.black
    },
    label3Style: {
        fontSize: 18,
        marginTop: 10,
        color: Colors.lightGrey
    },
    inputStyle: {
        marginTop: 10,
    },
    buttonStyle: {
        marginTop: 40
    },
    emailLabelStyle: {
        fontFamily: Font.RobotoMedium,
        marginTop: 40,
        fontSize: 16,
        color: Colors.white
    },
    topSafeArea: {
        flex: 0, 
        backgroundColor: Colors.maize
    }, 
});

export default LoginScreen;
