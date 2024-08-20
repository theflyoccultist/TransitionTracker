import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface Styles {
    container: ViewStyle;
    title: TextStyle;
}

const styles = StyleSheet.create<Styles>({
    container: {
        display: 'flex',
        backgroundColor: '#FFFFFF',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 5,
    },
    title: {
        color: '#333333',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default styles;


// .navbar-icon {
//     width: 24px;
//     height: 24px;
//     fill: #333333;
// }
