import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './app/(tabs)/index';
// import { initDB } from './src/database/Database';
import styles from './src/styles/Styles';


const App: React.FC = () => {
    // useEffect(() => {
    //   Initialize the database when the app loads
    //   initDB();
    // }, []);

    return (
        <SafeAreaView style={styles.safeArea}>
                  <NavigationContainer>
        <Tabs />
      </NavigationContainer>
        </SafeAreaView>
    );
};

export default App;