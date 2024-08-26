import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import Button from '../Button';
import TaskProgress from './TaskProgress';

type Habit = {
    id: string;
    title: string;
    description?: string;
    progress: string[];
    streak: number;
};


const Habit = () => {
    const [habits, setHabits] = useState<Habit[]>([]);

    const [isEditing, setIsEditing] = useState<string | null>(null);
    const [editedTask, setEditedTask] = useState<string>("")

    const createHabit = (title: string, description?: string) => {
        const newHabit: Habit = {
            id: new Date().getTime().toString(),
            title,
            description,
            progress: [],
            streak: 0,
        };
        setHabits([...habits, newHabit]);
    };

    const markHabitComplete = (habitId: string) => {
        setHabits((prevHabits) =>
        prevHabits.map((habit) => {
            if (habit.id === habitId) {
            const today = new Date().toISOString().slice(0, 10); // Get today's date in YYYY-MM-DD format
            if (!habit.progress.includes(today)) {
                habit.progress.push(today); // Mark today's date as complete
                habit.streak += 1; // Increment streak
            }
            }
            return habit;
        })
        );
    };    

    const handleEdit = (habitId: string, title: string) => {
        setIsEditing(habitId);
        setEditedTask(title);
      };
    
      const handleSave = (habitId: string) => {
        setHabits((prevHabits) =>
        prevHabits.map((habit) => {
            if (habit.id === habitId) {
                habit.title = editedTask;
            }
            return habit;
        }));
        setIsEditing(null);
      };

    return (
        <View>
            {habits.map((habit) => (
                <View key={habit.id}>
                    {isEditing === habit.id? (
                        <TextInput 
                            value={editedTask}
                            onChangeText={setEditedTask}
                            onBlur={() => handleSave(habit.id)} 
                    />                        
                    ): (
                        <Text onPress={() => handleEdit(habit.id, habit.title)}>
                            {habit.title}
                        </Text>
                    )}

                    <Text>Steak: {habit.streak}</Text>
                    <Button
                        title="Mark as Complete"
                        onPress={() => markHabitComplete(habit.id)}
                    />
                    <TaskProgress label='Your Progress' progress={habit.progress.length / 7} />
                </View>
            ))}
            <Button title="Add Habit" onPress={() => createHabit("New Habit")} />
        </View>
    );
};

export default Habit;