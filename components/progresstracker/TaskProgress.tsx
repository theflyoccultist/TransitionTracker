import React from "react";
import { View, Text } from 'react-native';
import styles from "@/src/styles/TaskProgressStyle";

interface TaskProgressProps {
    label: string;
    progress: number;
}

const TaskProgress: React.FC<TaskProgressProps> = ({ label, progress }) => {
    return (
        <View style={styles.container}>
            <View style={styles.progressBar}>
                <View style={[styles.filledBar, {width: `${progress * 100}%`}]} />
            </View>
            <Text style={styles.label}>{label}</Text>
        </View>
    );
}

export default TaskProgress;