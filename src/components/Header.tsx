import * as React from 'react';
import Navigation from 'react-navigation';
import { Platform, View, ImageBackground, StyleSheet, Text } from 'react-native';

interface IHeaderProps {
    navigation?: Navigation;
    image?: string;
    name?: string;
    theme?: string;
}

export default class Food extends React.Component<IHeaderProps> {

  render(): JSX.Element {
    return (
      <View style={styles.header}>
        <Text style={styles.header_text}>{this.props.children}</Text>
      </View>
    );
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