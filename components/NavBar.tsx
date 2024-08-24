import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../src/styles/NavBarStyle';

const NavBar: React.FC = () => {
    return(
    <View style={styles.container}>
        <TouchableOpacity onPress={() => {console.log("Hamburger menu pressed")}}>
            <Image
                source={require('@/assets/icons/menu.png')}
                style={styles.menuIcon}
            />
        </TouchableOpacity>

        <Text style={styles.title}>Bienvenue Zkeleton Witch!</Text>

        <TouchableOpacity onPress={() => {console.log("settings pressed")}}>
            <Image
                source={require('@/assets/icons/settings.png')}
                style={styles.settingsIcon}
            />
        </TouchableOpacity>
    </View>
    );
};

export default NavBar;