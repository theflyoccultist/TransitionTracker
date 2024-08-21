import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from '@/src/styles/CheckboxStyle';

interface CheckBoxProps {
    label: string;
    onToggle?: (checked: boolean) => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({ label, onToggle }) => {
    const [checked, setChecked] = useState(false);

    const handleCheck = () => {
        setChecked(prev => {
            const newChecked = !prev;
            if (onToggle) {
                onToggle(newChecked);
            }
            return newChecked;
        });
    };
    
    
    return(
        <TouchableOpacity style={styles.container} onPress={handleCheck}>
            <View style={[styles.box, checked && styles.boxChecked]}>
             {checked && <Text style={styles.checkmark}>✓</Text>}
            </View>
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    )
}

export default CheckBox;