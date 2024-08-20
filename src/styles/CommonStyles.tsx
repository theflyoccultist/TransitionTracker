import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface Styles {
  safeArea: ViewStyle;
  container: ViewStyle;
  text: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Customize as needed
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
});

export default styles;

