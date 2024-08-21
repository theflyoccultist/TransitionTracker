import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface Styles {
  safeArea: ViewStyle;
  title: TextStyle;
  content: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  safeArea: {
    flex: 1,
    backgroundColor: '#f9f9f9', // Customize as needed
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    padding: 15,
  }
});

export default styles;

// .section {
//   margin-bottom: 30px;
// }

// .section-title {
//   margin-bottom: 15px;
// }

// .section-content {
//   display: flex;
//   flex-direction: column;
//   gap: 15px;
// }


