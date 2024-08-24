import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import Checkbox from './Checkbox';
import DeleteButton from './DeleteButton';
import styles from '@/src/styles/MorningChecklistStyle';

interface ChecklistItemProps {
  task: string;
  completed: boolean;
  onToggle: () => void;
  onUpdateTask: (newTask: string) => void;
  onDelete: () => void;
}

const ChecklistItem: React.FC<ChecklistItemProps> = ({ task, completed, onToggle, onUpdateTask, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    onUpdateTask(editedTask);
  };

  return (
    <View style={styles.taskContainer}>
      <Checkbox isChecked={completed} onPress={onToggle} />
      {isEditing ? (
        <TextInput
          style={styles.taskTextInput}
          value={editedTask}
          onChangeText={setEditedTask}
          onBlur={handleSave} // Save the edited task when input loses focus
        />
      ) : (
        <Pressable onPress={handleEdit}>
          <Text style={[styles.taskText, completed && styles.completedTask]}>{task}</Text>
        </Pressable>
      )}
        <DeleteButton onPress={onDelete} />
    </View>
  );
};

export default ChecklistItem;