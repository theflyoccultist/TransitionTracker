import React from 'react';
import { View, Text } from 'react-native';
import styles from '../src/styles/CommonStyles';

const MyStyledComponent: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, iOS World!</Text>
    </View>
  );
};

export default MyStyledComponent;