import * as React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
export default class Footer extends React.Component {
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(TouchableOpacity, { style: styles.container_item, onPress: e => this.props.onPress ? this.props.onPress() : void 0 },
                React.createElement(Image, { source: require('../../img/Menu/FoodBlack.png') })),
            React.createElement(TouchableOpacity, { style: styles.container_item, onPress: e => this.props.onPress ? this.props.onPress() : void 0 },
                React.createElement(Image, { source: require('../../img/Menu/DrinkBlack.png') })),
            React.createElement(TouchableOpacity, { style: styles.container_item, onPress: e => this.props.onPress ? this.props.onPress() : void 0 },
                React.createElement(Image, { source: require('../../img/Menu/QRScan.png') })),
            React.createElement(TouchableOpacity, { style: styles.container_item, onPress: e => this.props.onPress ? this.props.onPress() : void 0 },
                React.createElement(Image, { source: require('../../img/Menu/FavoritesBlack.png') })),
            React.createElement(TouchableOpacity, { style: styles.container_item, onPress: e => this.props.onPress ? this.props.onPress() : void 0 },
                React.createElement(Image, { source: require('../../img/Menu/UserBlack.png') }))));
    }
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        flexDirection: 'row'
    },
    container_item: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 1,
        borderColor: 'rgb(199, 200, 204)'
    }
});
//# sourceMappingURL=Footer.js.map