import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from '../src/styles/InputFieldStyle';


interface InputFieldProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, value, onChangeText }) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default InputField;
