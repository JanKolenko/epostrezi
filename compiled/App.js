import * as React from 'react';
import { Platform, View, Text, StyleSheet, } from 'react-native';
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu'
});
export default class App extends React.Component {
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(Text, { style: styles.welcome }, "Welcome to React Native!"),
            React.createElement(Text, { style: styles.instructions }, "To get started, edit App.js bla"),
            React.createElement(Text, { style: styles.instructions }, instructions)));
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});
//# sourceMappingURL=App.js.map