import React from 'react';
import { View, Text } from 'react-native';
import styles from '../src/styles/CardStyle'; // Import the Card styles

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default Card;
