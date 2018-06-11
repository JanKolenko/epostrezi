import * as React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import FontAleo, { SizeFont, Font, ColorFont, LetterSpacing } from './FontAleo';
export default class Category extends React.Component {
    render() {
        return (React.createElement(TouchableOpacity, { style: styles.container, onPress: e => this.props.onPress ? this.props.onPress() : void 0 },
            React.createElement(View, { style: { width: '100%', alignItems: 'flex-end', paddingRight: 10, paddingTop: 10 } },
                React.createElement(FontAleo, { size: SizeFont.ExtraSmall, font: Font.Bold, color: ColorFont.DarkGrey }, this.props.product.price)),
            React.createElement(Image, { style: styles.image, source: { uri: this.props.product.photo } }),
            React.createElement(FontAleo, { size: SizeFont.ExtraSmall, font: Font.Bold, color: ColorFont.Grey, letterSpacing: LetterSpacing.ExtraSmall }, this.props.product.name.toUpperCase())));
    }
}
const styles = StyleSheet.create({
    container: {
        width: '33.3%',
        borderRightWidth: 0.5,
        borderBottomWidth: 0.5,
        borderColor: 'rgb(199, 200, 204)',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(255, 255, 255)',
        paddingBottom: 5
    },
    image: {
        width: 35,
        height: 50,
        resizeMode: 'contain',
        marginBottom: 12,
    }
});
//# sourceMappingURL=Products.js.map