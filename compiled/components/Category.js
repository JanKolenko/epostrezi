var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from 'react';
import { View, Image, TouchableOpacity, LayoutAnimation } from 'react-native';
import AccountStore from '../stores/AccountStore';
import CategoryPicker from '../services/CategoryPicker';
import { observer } from 'mobx-react';
let Category = class Category extends React.Component {
    constructor() {
        super(...arguments);
        this.maxItems = AccountStore.data.drinks.length;
        this.animate = 88;
    }
    render() {
        let res = this.getDrinksMenuImage(this.props.index);
        return (React.createElement(View, { style: this.getBorder(this.props.index) },
            React.createElement(TouchableOpacity, { style: this.buttonStyle(this.props.index), onPress: e => this.props.onPress ? this.pressed() : void 0 },
                React.createElement(Image, { style: this.getImageStyle(this.props.index), source: { uri: this.props.category.photo } }))));
    }
    getBorder(index) {
        let circle = CategoryPicker.isFocused === index ? 66 : 56;
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
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
    getImageStyle(index) {
        return {
            tintColor: CategoryPicker.isFocused === index ? 'rgb(255,127,80)' : 'rgba(0, 0, 0, 0.7)',
            width: 40,
            height: 40
        };
    }
    pressed() {
        CategoryPicker.isFocused = this.props.index;
        console.log(CategoryPicker.isFocused);
        this.props.onPress();
    }
    getDrinksMenuImage(index) {
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
    buttonStyle(index) {
        let circle = CategoryPicker.isFocused === index ? 56 : 46;
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
    getCircle(index) {
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
};
Category = __decorate([
    observer
], Category);
export default Category;
//# sourceMappingURL=Category.js.map