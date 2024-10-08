import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface Styles {
  title: TextStyle;
  container: ViewStyle;
  module: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f0f0f0',
  },
  module: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
});

export default styles;

