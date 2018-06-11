var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import * as React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, TouchableHighlight, LayoutAnimation, ScrollView } from 'react-native';
import FontAleo, { Font, SizeFont, ColorFont } from './FontAleo';
import AccountStore from '../stores/AccountStore';
import { observer } from 'mobx-react';
import OrderStore from '../stores/OrderStore';
import { observable } from 'mobx';
let Order = class Order extends React.Component {
    constructor() {
        super(...arguments);
        this.isExpanded = false;
        this.styles = StyleSheet.create({
            imageContainer: {
                width: 50,
                alignItems: 'center',
                justifyContent: 'center'
            },
            nameContainer: {
                flex: 1,
                alignItems: 'flex-start',
                justifyContent: 'center'
            },
            addQuantityContainer: {
                width: 30,
                alignItems: 'center',
                flexDirection: 'row'
            },
            quantityButton: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            },
            quantityImage: {
                width: 16,
                height: 16
            },
            image: {
                width: 40,
                height: 40,
                resizeMode: 'contain',
                backgroundColor: 'rgba(199, 200, 204, 0.5)',
                borderRadius: 20
            },
            image_quantity: {
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                width: 16,
                height: 16,
                borderRadius: 16,
                right: 3,
                top: 3,
                backgroundColor: 'rgba(0, 172, 237, 1)'
            },
            cancel_button: {
                flex: 1,
                borderRightWidth: 1,
                borderRightColor: 'rgb(199, 200, 204)',
                alignItems: 'center',
                justifyContent: 'center'
            }
        });
    }
    render() {
        return (React.createElement(View, { style: this.getContainerStyle() },
            this.isExpanded &&
                React.createElement(React.Fragment, null,
                    React.createElement(TouchableOpacity, { style: { width: '100%', backgroundColor: '#e1e1e1', alignItems: 'center', justifyContent: 'center' }, onPress: () => this.onExpandClose() },
                        React.createElement(FontAleo, { marginBottom: 3, font: Font.Bold, size: SizeFont.Small }, "VA\u0160 NAKUP")),
                    React.createElement(ScrollView, { style: { flexGrow: 1 } }, (OrderStore.orders && OrderStore.orders.map((order, index) => React.createElement(React.Fragment, { key: index },
                        React.createElement(View, { style: { width: '100%', height: 50, flexDirection: 'row' } },
                            React.createElement(View, { style: this.styles.imageContainer },
                                React.createElement(Image, { style: this.styles.image, source: { uri: order.photo } }),
                                React.createElement(View, { style: this.styles.image_quantity },
                                    React.createElement(FontAleo, { font: Font.Bold, size: SizeFont.ExtraSmall, color: ColorFont.White }, order.quantity))),
                            React.createElement(TouchableHighlight, { style: this.styles.nameContainer, onPress: () => alert('UREDI') },
                                React.createElement(FontAleo, { font: Font.Bold, size: SizeFont.Small }, order.name)),
                            React.createElement(View, { style: this.styles.addQuantityContainer },
                                React.createElement(TouchableOpacity, { style: this.styles.quantityButton, onPress: () => this.addOrder(order) },
                                    React.createElement(Image, { style: this.styles.quantityImage, source: require('../../img/add/plus.png') })),
                                React.createElement(TouchableOpacity, { style: this.styles.quantityButton, onPress: () => this.removeOrder(order) },
                                    React.createElement(Image, { style: this.styles.quantityImage, source: require('../../img/add/minus.png') })))))))),
                    React.createElement(View, { style: { width: '100%', height: 30, alignItems: 'flex-end', paddingRight: 8 } },
                        React.createElement(FontAleo, { font: Font.Bold },
                            "Skupaj: ",
                            this.getTotalPrice(),
                            " $"))),
            React.createElement(View, { style: { width: '100%', height: 50, flexDirection: 'row' } },
                !this.isExpanded &&
                    React.createElement(React.Fragment, null,
                        React.createElement(View, { style: this.styles.imageContainer },
                            React.createElement(Image, { style: this.styles.image, source: { uri: this.props.order.photo } }),
                            React.createElement(View, { style: this.styles.image_quantity },
                                React.createElement(FontAleo, { font: Font.Bold, size: SizeFont.ExtraSmall, color: ColorFont.White }, this.props.order.quantity))),
                        React.createElement(TouchableOpacity, { style: this.styles.nameContainer, onPress: () => this.expand() },
                            React.createElement(FontAleo, { font: Font.Bold, size: SizeFont.Small }, this.props.order.name),
                            React.createElement(FontAleo, { size: SizeFont.Small, color: ColorFont.DarkGrey }, "Uredi nakup"))),
                React.createElement(View, { style: this.getOrderContainerStyle() },
                    React.createElement(TouchableOpacity, { style: this.styles.cancel_button, onPress: () => this.onBuyPressed() },
                        React.createElement(FontAleo, { font: Font.Bold, size: SizeFont.Small }, "NARO\u010CI")),
                    React.createElement(TouchableOpacity, { style: { flex: 1, alignItems: 'center', justifyContent: 'center' }, onPress: e => this.onCancelPressed() },
                        React.createElement(FontAleo, { font: Font.Bold, size: SizeFont.Small }, "PREKLI\u010CI"))))));
    }
    getTotalPrice() {
        var price = 0;
        OrderStore.orders.forEach(order => {
            console.log(parseFloat(order.price).toFixed(2));
            price += parseInt(order.quantity, 10) > 1 ? parseFloat(order.price) * parseInt(order.quantity, 10) : parseFloat(order.price);
        });
        return price.toFixed(2).toString();
    }
    onExpandClose() {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        this.isExpanded = !this.isExpanded;
    }
    getOrderContainerStyle() {
        return {
            width: this.isExpanded ? '100%' : 150,
            flexDirection: 'row'
        };
    }
    getContainerStyle() {
        return {
            alignSelf: 'flex-end',
            marginLeft: 20,
            marginRight: 20,
            marginBottom: 10,
            position: 'relative',
            width: '90%',
            height: this.getOrderHeight(),
            borderRadius: 10,
            shadowOffset: { width: 0, height: 0 },
            shadowColor: 'black',
            shadowOpacity: 0.55,
        };
    }
    getOrderHeight() {
        if (!this.isExpanded) {
            return 50;
        }
        if (OrderStore.orders.length < 5) {
            return 105 + (OrderStore.orders.length * 50);
        }
        else {
            return 350;
        }
    }
    expand() {
        this.isExpanded = !this.isExpanded;
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    }
    onCancelPressed() {
        OrderStore.orders = [];
    }
    onBuyPressed() {
        AccountStore.buy();
    }
    addOrder(order) {
        OrderStore.pushDefaultOrder(order);
    }
    removeOrder(order) {
        OrderStore.removeOrder(order);
    }
};
__decorate([
    observable,
    __metadata("design:type", Object)
], Order.prototype, "isExpanded", void 0);
Order = __decorate([
    observer
], Order);
export default Order;
//# sourceMappingURL=Order.js.map