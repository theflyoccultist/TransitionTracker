import React from 'react';
import { SafeAreaView, ScrollView, View, Text } from "react-native";
import styles from "@/src/styles/CommonStyles";

import NavBar from '@/components/NavBar';
import QuoteGenerator from '@/components/QuoteGenerator';
import MorningChecklist from '@/components/routines/MorningChecklist';
import PhotoGallery from '@/components/imagelibrary/PhotoGallery';
import Progress from '@/components/Progress';

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
          <PhotoGallery />
        </View>

        <View style={styles.module}>
        <Text style={styles.title}>How far have you progressed into your transition?</Text>
          <Progress />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
