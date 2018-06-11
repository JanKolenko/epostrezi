import * as React from 'react';
import { Platform, View, ImageBackground, StyleSheet, Text, Image, TouchableOpacity, LayoutAnimation } from 'react-native';
import { ICategory, IDrinks } from '../interfaces/Epostrezi';
import FontAleo, { Font, SizeFont, ColorFont } from './FontAleo';
import { observable } from 'mobx';
import AccountStore from '../stores/AccountStore';
import CategoryPicker from '../services/CategoryPicker';
import { observer } from 'mobx-react';

interface IHeaderProps {
    category?: ICategory;
    index?: number;
    onPress?: () => void;
}

@observer
export default class Category extends React.Component<IHeaderProps> {

  private maxItems = AccountStore.data.drinks.length;
  private animate = 88;

  render(): JSX.Element {
    let res = this.getDrinksMenuImage(this.props.index);
    return (
      <View style={this.getBorder(this.props.index)}>
      <TouchableOpacity style={this.buttonStyle(this.props.index)} onPress={e => this.props.onPress ? this.pressed() : void 0}>
        <Image 
          style={this.getImageStyle(this.props.index)}
          source={{uri: this.props.category.photo}}
        />
        {/* <FontAleo font={Font.Bold} color={ColorFont.Grey}>{this.props.category.name}</FontAleo> */}
      </TouchableOpacity>
      </View>
    );
  }

  private getBorder(index: number): {} {
    let circle = CategoryPicker.isFocused === index ?  66 : 56;
    LayoutAnimation.configureNext( LayoutAnimation.Presets.spring );

    return {
      height: circle === 66 ? 66 : 56,
      width: circle === 66 ? 66 : 56,
      marginLeft: 8, 
      marginRight: 8, 
      alignItems: 'center', 
      justifyContent: 'center', 
      borderRadius: circle === 66 ? 66 / 2 : 56 / 2,
      borderWidth: 2, 
      borderColor: CategoryPicker.isFocused === index ? 'rgb(255,127,80)' : '#e1e1e1'
    };
  }

  private getImageStyle(index: number): {} {
    return {
      tintColor: CategoryPicker.isFocused === index ? 'rgb(255,127,80)' : 'rgba(0, 0, 0, 0.7)',
      width: 40,
      height: 40
    };
  }
  private pressed(): void {
    CategoryPicker.isFocused = this.props.index;
    console.log(CategoryPicker.isFocused);
    this.props.onPress();
  }

    private getDrinksMenuImage(index: number): {} {
      
      switch (this.props.category.name) {
        case 'piva':
          return require('../../img/DrinksMenu/Beers.png');

        case 'hotDrinks':
          return require('../../img/DrinksMenu/HotDrinks.png');

        case 'coldDrinks':
          return require('../../img/DrinksMenu/ColdDrinks.png');
        
        case 'wine':
          return require('../../img/DrinksMenu/Wine.png');

        default:
          return '..';
      }
    }

    private buttonStyle(index: number): {} {
      let circle = CategoryPicker.isFocused === index ?  56 : 46;
      // LayoutAnimation.configureNext( LayoutAnimation.Presets.spring );

      return {
        width: circle === 56 ? 56 : 46,
        height: circle === 56 ? 56 : 46,
        borderRadius: circle === 56 ? 56 / 2 : 46 / 2,
        backgroundColor: 'rgba(128, 128, 128, 0.1)',
        marginLeft: 4,
        marginRight: 4,
        justifyContent: 'center',
        alignItems: 'center',
      };
    }

    private getCircle(index: number): number {
      // console.log(CategoryPicker.isFocused);
      console.log(index);
      let razlika = CategoryPicker.isFocused - index;
      if (razlika < 0) {
        razlika = razlika * -1;
      }
      switch (razlika) {
        case 0: return 80;
        case 1: return 70;
        case 2: return 60;
        default: return 50;
      }

    }
}