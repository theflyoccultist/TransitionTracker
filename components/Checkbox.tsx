import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from '@/src/styles/MorningChecklistStyle';

interface CheckBoxProps {
    isChecked: boolean;
    onPress: () => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({ isChecked, onPress }) => {
    return(
        <Pressable style={styles.box} onPress={onPress}>
             {isChecked && <Text style={styles.checkmark}>✓</Text>}
        </Pressable>
    )
}

export default CheckBox;