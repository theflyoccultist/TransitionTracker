import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';

interface Styles {
    container: ViewStyle;
    title: TextStyle;
    menuIcon: ImageStyle;
    settingsIcon: ImageStyle;
}

const styles = StyleSheet.create<Styles>({
    container: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 5,
    },
    title: {
        color: '#1E2029',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    menuIcon: {
        width: 30,
        height: 30,
        tintColor: '#1E2029',
        resizeMode: 'contain',
    },
    settingsIcon: {
        width: 30,
        height: 30,
        tintColor: '#1E2029',
        resizeMode: 'contain',
    }
});

export default styles;
