import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Font } from '../assets/font';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import { Colors } from '../assets/colors';

const menuDots = require('../assets/icons/dots_vertical.png');

const Header = (props) => {
    console.log('Props=> ', props);
    const [visible, setVisible] = useState(false);

    const hideMenu = () => setVisible(false);

    const showMenu = () => setVisible(true);
    return (
        <View>
            <View style={{ flexDirection: 'row', paddingVertical: 15, paddingHorizontal: 10, alignItems: 'center', justifyContent: 'space-between', backgroundColor: Colors.header }}>
                {
                    props.onBackPress ? <TouchableOpacity onPress={props.onBackPress}>
                        <Image resizeMode={'contain'} source={require('../assets/icons/ic_back.png')} style={{ width: 20, height: 20, tintColor: Colors.white }} />
                    </TouchableOpacity> : <Image style={{ width: 20, height: 20 }} />
                }

                <Text style={[styles.headerTextStyle]}>{props.name}</Text>

                <View>
                    <Menu
                        visible={visible}
                        anchor={<TouchableOpacity onPress={props.showMenu ? showMenu : null}>
                            <Image
                                resizeMethod={'auto'}
                                resizeMode={'contain'}
                                style={{ height: 20, width: 20, tintColor: 'white' }}
                                source={props.showMenu ? menuDots : null}
                            />
                        </TouchableOpacity>}
                        onRequestClose={hideMenu}
                    >
                        <MenuItem onPress={() => { props.navigation.navigate("My Profile"); hideMenu() }}>Profile</MenuItem>
                        <MenuItem onPress={() => { props.navigation.navigate("PaymentInfo"); hideMenu() }}>Payment Info</MenuItem>
                        <MenuItem onPress={() => { props.navigation.navigate("Home"); hideMenu() }}>Your Albums</MenuItem>
                        <MenuItem onPress={() => { props.navigation.navigate("History"); hideMenu() }}>Orders History</MenuItem>
                        <MenuItem onPress={() => { props.navigation.navigate("My Cart"); hideMenu() }}>View Cart</MenuItem>
                        <MenuItem onPress={() => { props.navigation.navigate("Login"); hideMenu() }}>Login</MenuItem>
                    </Menu>
                </View>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    headerTextStyle: {
        color: 'white',
        fontSize: 20,
        fontFamily: Font.SemiBold,
        marginTop: 0,
        marginStart: 10
    },
});

export default Header;