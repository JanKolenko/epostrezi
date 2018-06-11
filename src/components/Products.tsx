import * as React from 'react';
import { Platform, View, ImageBackground, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { IDrinks } from '../interfaces/Epostrezi';
import FontAleo, { SizeFont, Font, ColorFont, LetterSpacing } from './FontAleo';

interface IProductsProps {
    product: IDrinks;

    onPress?: () => void;
}

export default class Category extends React.Component<IProductsProps> {

  render(): JSX.Element {

    return (
      <TouchableOpacity style={styles.container} onPress={e => this.props.onPress ? this.props.onPress() : void 0}>
        <View style={{width: '100%', alignItems: 'flex-end', paddingRight: 10, paddingTop: 10}}>
          <FontAleo size={SizeFont.ExtraSmall} font={Font.Bold} color={ColorFont.DarkGrey}>{this.props.product.price}</FontAleo>
        </View>
        <Image 
            style={styles.image}
            source={{uri: this.props.product.photo}}
        />  
        <FontAleo size={SizeFont.ExtraSmall} font={Font.Bold} color={ColorFont.Grey} letterSpacing={LetterSpacing.ExtraSmall}>{this.props.product.name.toUpperCase()}</FontAleo>
      </TouchableOpacity>
    );
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