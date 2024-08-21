import React from 'react';
import { SafeAreaView, ScrollView } from "react-native";
import styles from "@/src/styles/CommonStyles";
import NavBar from '@/components/NavBar';
import Button from '@/components/Button';
import CheckBox from '@/components/Checkbox';
import TaskProgress from '@/components/TaskProgress';

export default function Index() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <NavBar />
      <ScrollView contentContainerStyle={styles.content}>
        <CheckBox label="Task 1" />
        <CheckBox label="Task 2" />
        <TaskProgress label="Progress" progress={0.5} />
        <Button title='Button 1' onPress={() => console.log("button 1 pressed")}/>
        <Button title='Button 2' onPress={() => console.log("button 2 pressed")}/>

      </ScrollView>
    </SafeAreaView>
  );
}
