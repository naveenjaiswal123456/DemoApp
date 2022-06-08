import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Colors } from '../assets/colors';
import { Font } from '../assets/font';

const Button = ({ onPress, title, style, textStyle, colorOne, colorTwo }) => (
    <TouchableOpacity onPress={onPress}>
        <LinearGradient
            //start={{x: 0.0, y: 1.0}} end={{x: 0.0, y: 1.0}}
            useAngle={true}
            colors={[colorOne, colorTwo]}
            style={[style, styles.appButtonContainer]}>
            <Text style={[textStyle, styles.appButtonText]}>{title}</Text>
        </LinearGradient>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    // ...
    appButtonContainer: {
        //elevation: 8,
        borderRadius: 30,
        paddingVertical: 16,
        alignSelf: 'center',
        width: 160
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        alignSelf: "center",
        fontFamily: Font.RobotoBold,
    }
});
export default Button;