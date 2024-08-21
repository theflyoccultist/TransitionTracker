import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface Styles {
  container: ViewStyle;
  box: ViewStyle;
  boxChecked: ViewStyle;
  checkmark: TextStyle;
  label: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
  },
  box: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#6200ee',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  boxChecked: {
    backgroundColor: '#6200ee',
  },
  checkmark: {
    color: '#ffffff',
    fontSize: 16,
  },
  label: {
    fontSize: 16,
    color: '#333333',
    marginRight: 10,
  },
});

export default styles;
