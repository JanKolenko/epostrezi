import * as React from 'react';
import { Platform, View, ImageBackground, StyleSheet, Text, TouchableOpacity } from 'react-native';

import ColorPalete from '../interfaces/ColorPalete';

export enum ButtonType {
    OpacityButton,
    FillButton,
}

interface IButtonProps {
    type: ButtonType;
    color?: string;

    onPress?: () => void;
}

export default class Buttom extends React.Component<IButtonProps> {

  render(): JSX.Element {
    return (
      <TouchableOpacity style={this.getButtonStyle()} onPress={e => this.props.onPress ? this.props.onPress() : void 0}>
        <Text style={this.getTextStyle()}>{this.props.children}</Text>
      </TouchableOpacity>
    );
  }

  private getButtonColor(): string {
      switch (this.props.type) {
        case ButtonType.OpacityButton:
            return 'rgba(0, 0, 0, 0)';
        case ButtonType.FillButton:
        default:
            return this.props.color ? this.props.color : ColorPalete.white;
      }
  }

  private getButtonStyle(): {} {
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

  private getTextStyle(): {} {
      return {
        fontWeight: 'bold',
        color: this.props.type === ButtonType.OpacityButton ? ColorPalete.white : 'rgb(255, 255, 255)',
        textAlign: 'center'
      };
  }
}