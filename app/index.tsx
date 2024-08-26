import React from 'react';
import { SafeAreaView, ScrollView, View, Text } from "react-native";
import styles from "@/src/styles/CommonStyles";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import NavBar from '@/components/NavBar';
import QuoteGenerator from '@/components/QuoteGenerator';
import MorningChecklist from '@/components/routines/MorningChecklist';
import PhotoGallery from '@/components/imagelibrary/PhotoGallery';
import Habit from '@/components/progresstracker/Habit';

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <NavBar />
      <ScrollView>
        <View style={styles.module}>
          <QuoteGenerator />
        </View>

        <View style={styles.module}>
          <Text style={styles.title}>Daily Routine Checklist</Text>
          <MorningChecklist />
        </View>

        <View style={styles.module}>
          <Text style={styles.title}>Image Library</Text>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <PhotoGallery />
          </GestureHandlerRootView>
        </View>

        <View style={styles.module}>
        <Text style={styles.title}>How far have you progressed into your transition?</Text>
          <Habit />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
