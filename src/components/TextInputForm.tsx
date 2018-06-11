import * as React from 'react';
import { Platform, View, ImageBackground, StyleSheet, Text, TextInput } from 'react-native';

// password: Hide text
export interface ITextInputFormProps {
    password?: boolean;
    onChangeText?: (text: string) => void;
}

export default class TextInputForm extends React.Component<ITextInputFormProps> {

  render(): JSX.Element {
    return (
        <TextInput
            placeholderTextColor="rgba(255,255,255,0.7)"
            placeholder={this.props.children.toString()}
            returnKeyType="go"
            secureTextEntry={this.props.password ? true : false}
            style={styles.input}
            onChangeText={text => this.props.onChangeText ? this.props.onChangeText(text) : void 0}
      />
    );
  }
}

const styles = StyleSheet.create({
    input: {
        borderRadius: 2,
        fontSize: 14,
        alignItems: 'center',
        textAlign: 'left',
        alignSelf: 'stretch',
        height: 35,
        backgroundColor: 'rgba(255,255,255,0.1)',
        marginBottom: 15,
        color: '#FFF',
        paddingHorizontal: 8
      },
});