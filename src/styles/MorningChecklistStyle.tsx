import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface Styles {
  container: ViewStyle;
  taskContainer: ViewStyle;
  taskText: TextStyle;
  taskTextInput: TextStyle;
  completedTask: TextStyle;
  box: ViewStyle;
  checkmark: TextStyle;
  crossmark: TextStyle;
  addTaskContainer: ViewStyle;
  addTaskInput: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 15,
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  taskText: {
    fontSize: 16,
    color: '#333',
  },
  taskTextInput: {
    fontSize: 16,
    color: '#333',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completedTask: {
    textDecorationLine: 'line-through',
    color: '#aaa',
  },
  box: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#6200ee',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkmark: {
    color: '#6200ee',
    fontSize: 18,
  },
  crossmark: {
    color: '#ff0000',
    fontSize: 18,
  },
  addTaskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  addTaskInput: {
    flex: 1,
    fontSize: 10,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginRight: 10,
  },
});

export default styles;
