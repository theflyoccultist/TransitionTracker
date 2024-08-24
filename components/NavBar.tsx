import React from "react";
import { View, Text, Image, Pressable } from 'react-native';
import styles from '../src/styles/NavBarStyle';

const NavBar: React.FC = () => {
    return(
    <View style={styles.container}>
        <Pressable onPress={() => {console.log("Hamburger menu pressed")}}>
            <Image
                source={require('@/assets/icons/menu.png')}
                style={styles.menuIcon}
            />
        </Pressable>

        <Text style={styles.title}>Bienvenue Zkeleton Witch!</Text>

        <Pressable onPress={() => {console.log("settings pressed")}}>
            <Image
                source={require('@/assets/icons/settings.png')}
                style={styles.settingsIcon}
            />
        </Pressable>
    </View>
    );
};

export default NavBar;