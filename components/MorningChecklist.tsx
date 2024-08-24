import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import CheckBox from "./Checkbox";
import styles from "@/src/styles/MorningChecklistStyle";

interface Task {
    task: string;
    completed: boolean;
}

const initialTasks: Task[] = [
    {task: 'exfoliate face', completed: true},
    {task: 'hydrate face', completed: true},
    {task: 'daily voice training', completed: false},
    {task: 'put on the solar cream', completed: false},
    {task: 'put on the perfume', completed: false},
];

const MorningChecklist: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>(initialTasks);

    const toggleCompletion = (index: number) => {
        const updatedTasks = tasks.map((task, i) =>
        i === index? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    return (
        <View style={styles.container}>
            {tasks.map((item, index) => (
                <Pressable
                    key={index}
                    onPress={() => toggleCompletion(index)}
                >
                    <CheckBox isChecked={item.completed} onPress={() => toggleCompletion(index)} />
                    <Text style={[styles.taskText, item.completed && styles.completedTask]}>
                        {item.task}
                    </Text>
                </Pressable>
            ))}
        </View>
    );
};

export default MorningChecklist;