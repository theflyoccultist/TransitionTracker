import React, { useState } from "react";
import { TextInput, View } from "react-native";
import styles from "@/src/styles/MorningChecklistStyle";
import ChecklistItem from "./CheckListItem";
import Button from "@/components/Button"

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
    const [ newTask, setNewTask ] = useState('');

    const toggleCompletion = (index: number) => {
        const updatedTasks = tasks.map((task, i) =>
        i === index? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    const updateTaskText = (index: number, newTask: string) => {
        const updatedTasks = tasks.map((task, i) =>
            i === index? { ...task, task: newTask } : task
            );
            setTasks(updatedTasks);
    };

    const deleteTask = (index: number) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    const addTask = () => {
        if (newTask.trim()) {
            const newTaskObject = { task: newTask, completed: false };
            setTasks([...tasks, newTaskObject]);
            setNewTask('');
        }
    };

    return (
        <View style={styles.container}>

            <View style={styles.addTaskContainer}>
                <TextInput 
                    style={styles.addTaskInput}
                    placeholder="Add a new task..."
                    value={newTask}
                    onChangeText={setNewTask}
                />
                <Button title="Add" onPress={addTask} />
            </View>

            {tasks.map((item, index) => (
                <ChecklistItem 
                    key={index}
                    task={item.task}
                    completed={item.completed}
                    onToggle={() => toggleCompletion(index)}
                    onUpdateTask={(newTask: string) => updateTaskText(index, newTask)}
                    onDelete={() => deleteTask(index)}
                />
            ))}
        </View>
    );
};

export default MorningChecklist;