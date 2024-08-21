import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';

interface Styles {
    container: ViewStyle;
    title: TextStyle;
    menuIcon: ImageStyle;
}

const styles = StyleSheet.create<Styles>({
    container: {
        width: '100%',
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
    menuIcon: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    }
});

export default styles;
