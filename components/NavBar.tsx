import React from "react";
import { View, Text } from 'react-native';
import styles from '../src/styles/NavBarStyle';

const NavBar: React.FC = () => {
    return(
    <View style={styles.container}>
        <Text style={styles.title}>My App</Text>
    </View>
    );
};

export default NavBar;