import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface Styles {
  button: ViewStyle;
  buttonText: TextStyle;
  buttonPrimary: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  button: {
    backgroundColor: '#E5E5E5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    },
  buttonText: {
    color: '#333333',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  buttonPrimary: {
    backgroundColor: '#FF8A80',
  },
  buttonSecondary: {
    backgroundColor: '#80D8FF',
  }
});

export default styles;

// .button {
//     transition: background-color 0.3s;
// }

// .button:hover {
//     background-color: #CCCCCC;
// }

// .button-primary {
//     color: #FFFFFF;
//     border: none;
// }

// .button-secondary {
//     color: #FFFFFF;
//     border: none;
// }
