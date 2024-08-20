import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface Styles {
  input: ViewStyle;
  label: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  input: {
    height: 40,
    borderColor: '#6200ee',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: '#333333',
    marginBottom: 5,
    marginLeft: 5,
},
});

export default styles;

// .input-field {
//     width: 100%;
//     border: 1px solid #CCCCCC;
// }