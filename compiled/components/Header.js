import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
export default class Food extends React.Component {
    render() {
        return (React.createElement(View, { style: styles.header },
            React.createElement(Text, { style: styles.header_text }, this.props.children)));
    }
}
const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: 'grey',
        height: 60,
        width: '100%',
        paddingTop: 12,
        backgroundColor: 'rgb(255, 255, 255)'
    },
    header_text: {
        fontWeight: 'bold',
        fontSize: 18
    }
});
//# sourceMappingURL=Header.js.map