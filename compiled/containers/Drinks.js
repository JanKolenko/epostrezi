import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default class Drinks extends React.Component {
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(View, { style: styles.container_body },
                React.createElement(Image, { style: { width: 32, height: 32, marginBottom: 12 }, source: require('../../img/Exclamation/exclamation.png') }),
                React.createElement(FontAwesome, { style: { fontSize: 14, letterSpacing: 1.1 } }, "Coming soon"))));
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container_body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
//# sourceMappingURL=Drinks.js.map