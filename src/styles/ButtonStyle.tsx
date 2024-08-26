import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface Styles {
  button: ViewStyle;
  buttonText: TextStyle;
  buttonPrimary: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  button: {
    backgroundColor: '#555A6A',
    borderWidth: 0,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonPrimary: {
    borderWidth: 0,
    backgroundColor: '#FFFFFF',
  },
  buttonSecondary: {
    borderWidth: 0,
    backgroundColor: '#FFFFFF',
  }
});

export default styles;
