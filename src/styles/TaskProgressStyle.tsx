import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface Styles {
  container: ViewStyle;
  progressBar: ViewStyle;
  filledBar: ViewStyle;
  label: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    padding: 15,
  },
  progressBar: {
    height: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    overflow: 'hidden',
  },
  filledBar: {
    height: '100%',
    backgroundColor: '#03dac6',
  },
  label: {
    fontSize: 14,
    color: '#333333',
    marginBottom: 5,
  },
});

export default styles;