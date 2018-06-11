import * as React from 'react';
import { StyleSheet, Text } from 'react-native';
export var LetterSpacing;
(function (LetterSpacing) {
    LetterSpacing[LetterSpacing["ExtraSmall"] = 0] = "ExtraSmall";
    LetterSpacing[LetterSpacing["Small"] = 1] = "Small";
    LetterSpacing[LetterSpacing["Medium"] = 2] = "Medium";
    LetterSpacing[LetterSpacing["Large"] = 3] = "Large";
})(LetterSpacing || (LetterSpacing = {}));
export var Font;
(function (Font) {
    Font[Font["Regular"] = 0] = "Regular";
    Font[Font["Bold"] = 1] = "Bold";
})(Font || (Font = {}));
export var ColorFont;
(function (ColorFont) {
    ColorFont[ColorFont["White"] = 0] = "White";
    ColorFont[ColorFont["LightGrey"] = 1] = "LightGrey";
    ColorFont[ColorFont["Grey"] = 2] = "Grey";
    ColorFont[ColorFont["DarkGrey"] = 3] = "DarkGrey";
    ColorFont[ColorFont["Black"] = 4] = "Black";
    ColorFont[ColorFont["Red"] = 5] = "Red";
})(ColorFont || (ColorFont = {}));
export var SizeFont;
(function (SizeFont) {
    SizeFont[SizeFont["ExtraSmall"] = 0] = "ExtraSmall";
    SizeFont[SizeFont["Small"] = 1] = "Small";
    SizeFont[SizeFont["Medium"] = 2] = "Medium";
    SizeFont[SizeFont["Large"] = 3] = "Large";
    SizeFont[SizeFont["ExtraLarge"] = 4] = "ExtraLarge";
})(SizeFont || (SizeFont = {}));
export default class FontAleo extends React.Component {
    constructor() {
        super(...arguments);
        this.styles = StyleSheet.create({
            aleoStyle: {
                fontSize: this.getFontSize(),
                color: this.getFontColor(),
                fontFamily: this.getFont(),
                alignSelf: this.props.alignCenter ? 'center' : 'auto',
                marginBottom: this.props.marginBottom ? this.props.marginBottom : 0,
                letterSpacing: this.getLetterSpacing(),
                paddingLeft: this.props.paddingLeft ? this.props.paddingLeft : 0
            }
        });
    }
    render() {
        return (React.createElement(Text, { style: this.styles.aleoStyle }, this.props.children));
    }
    getFont() {
        if (this.props.font === Font.Bold) {
            return 'AvenirNext-Bold';
        }
        return 'Avenir Next';
    }
    getLetterSpacing() {
        switch (this.props.letterSpacing) {
            case LetterSpacing.ExtraSmall:
                return 0.5;
            case LetterSpacing.Small:
                return 1;
            case LetterSpacing.Medium:
                return 1.5;
            case LetterSpacing.Large:
                return 2;
            default:
                return 0;
        }
    }
    getFontSize() {
        switch (this.props.size) {
            case SizeFont.ExtraSmall:
                return 12;
            case SizeFont.Small:
                return 14;
            case SizeFont.Large:
                return 24;
            case SizeFont.ExtraLarge:
                return 32;
            case SizeFont.Medium:
            default:
                return 16;
        }
    }
    getFontColor() {
        switch (this.props.color) {
            case ColorFont.LightGrey:
                return 'rgb(199, 200, 204)';
            case ColorFont.Red:
                return 'rgb(184, 54, 34)';
            case ColorFont.White:
                return 'rgb(255, 255, 255)';
            case ColorFont.DarkGrey:
                return 'rgba(0, 0, 0, 0.7)';
            case ColorFont.Grey:
                return 'rgba(96, 96, 96, 0.8)';
            case ColorFont.Black:
            default:
                return 'rgb(0, 0, 0)';
        }
    }
}
//# sourceMappingURL=FontAleo.js.map