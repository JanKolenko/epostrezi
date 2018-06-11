import * as React from 'react';
import { Platform, View, ImageBackground, StyleSheet, Text } from 'react-native';

export enum LetterSpacing {
    ExtraSmall,
    Small,
    Medium,
    Large
}

export enum Font {
    Regular,
    Bold
}

export enum ColorFont {
    White,
    LightGrey,
    Grey,
    DarkGrey,
    Black,
    Red
}

export enum SizeFont {
    ExtraSmall,
    Small,
    Medium,
    Large,
    ExtraLarge
}

interface IFontAleoProps {
    color?: ColorFont;
    size?: SizeFont;
    font?: Font;
    alignCenter?: boolean;
    marginBottom?: number;
    paddingLeft?: number;
    letterSpacing?: LetterSpacing;
}

export default class FontAleo extends React.Component<IFontAleoProps> {

    styles = StyleSheet.create({
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

    render(): JSX.Element {
        
        return (
            <Text style={this.styles.aleoStyle}>{this.props.children}</Text>
        );
    }

    private getFont(): string {
        if (this.props.font === Font.Bold) {
            return 'AvenirNext-Bold';
        }

        return 'Avenir Next';
    }

    private getLetterSpacing(): number {
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

    private getFontSize(): number {
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

    private getFontColor(): string {
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