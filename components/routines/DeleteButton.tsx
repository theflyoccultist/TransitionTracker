import React from "react";
import { Text, Pressable } from "react-native";
import styles from '@/src/styles/MorningChecklistStyle';

interface DeleteButtonProps {
    onPress: () => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ onPress }) => {
    return(
        <Pressable style={styles.box} onPress={onPress}>
             <Text style={styles.crossmark}>X</Text>
        </Pressable>
    )
}

export default DeleteButton;