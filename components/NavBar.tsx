import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../src/styles/NavBarStyle';

const NavBar: React.FC = () => {
    return(
    <View style={styles.container}>
        <TouchableOpacity onPress={() => {console.log("menu pressed")}}>
            <Image
                source={require('@/assets/icons/menu.png')}
                style={styles.menuIcon}
            />
        </TouchableOpacity>

        <Text style={styles.title}>My App</Text>
    </View>
    );
};

export default NavBar;