import React from 'react';
import { TextInput, Text, View, StyleSheet, Image } from 'react-native';
import { Colors } from '../assets/colors';
import { Font } from '../assets/font';

const Input = ({ value, onChangeText, placeHolder, secureTextEntry, style, keyboardType='default', defaultValue}) => {

    const { inputStyle, containerStyle } = styles;

    return (
        <View style={[containerStyle, style]}>
            <TextInput
                keyboardType={keyboardType}
                numberOfLines={1}
                style={inputStyle}
                placeholder={placeHolder}
                secureTextEntry={secureTextEntry}
                autoCorrect={false}
                value={value}
                onChangeText={onChangeText}
                defaultValue={defaultValue}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        height: 50,
        borderWidth: 0.5,
        borderColor: 'grey',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.white
    },
    inputStyle: {
        height: 50,
        //marginHorizontal: 15,
        fontSize: 16,
        width: '85%',
        paddingHorizontal: 10,
        color: Colors.black,
        fontFamily: Font.RobotoMedium
    }
})

export default Input;