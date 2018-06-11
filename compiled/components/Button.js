import * as React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import ColorPalete from '../interfaces/ColorPalete';
export var ButtonType;
(function (ButtonType) {
    ButtonType[ButtonType["OpacityButton"] = 0] = "OpacityButton";
    ButtonType[ButtonType["FillButton"] = 1] = "FillButton";
})(ButtonType || (ButtonType = {}));
export default class Buttom extends React.Component {
    render() {
        return (React.createElement(TouchableOpacity, { style: this.getButtonStyle(), onPress: e => this.props.onPress ? this.props.onPress() : void 0 },
            React.createElement(Text, { style: this.getTextStyle() }, this.props.children)));
    }
    getButtonColor() {
        switch (this.props.type) {
            case ButtonType.OpacityButton:
                return 'rgba(0, 0, 0, 0)';
            case ButtonType.FillButton:
            default:
                return this.props.color ? this.props.color : ColorPalete.white;
        }
    }
    getButtonStyle() {
        return {
            justifyContent: 'center',
            height: 35,
            width: '100%',
            borderRadius: 2,
            borderWidth: this.props.type === ButtonType.OpacityButton ? 1.2 : 0,
            borderColor: this.props.type === ButtonType.OpacityButton ? 'rgba(255, 255, 255, 0.2)' : '',
            backgroundColor: this.getButtonColor()
        };
    }
    getTextStyle() {
        return {
            fontWeight: 'bold',
            color: this.props.type === ButtonType.OpacityButton ? ColorPalete.white : 'rgb(255, 255, 255)',
            textAlign: 'center'
        };
    }
}
//# sourceMappingURL=Button.js.map