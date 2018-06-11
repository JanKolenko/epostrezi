var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { observer } from 'mobx-react';
import Header from '../components/Header';
import AccountStore from '../stores/AccountStore';
import OrderStore from '../stores/OrderStore';
import Category from '../components/Category';
import Products from '../components/Products';
import Dimension from '../interfaces/Dimensions';
import Order from '../components/Order';
var dim = new Dimension;
let MyComponent = class MyComponent extends React.Component {
    componentDidMount() {
        AccountStore.email = 'A';
        AccountStore.password = 'a';
        AccountStore.QrScan();
        // await AccountStore.getProducts();
    }
    render() {
        return (React.createElement(View, { style: { flex: 1, backgroundColor: 'rgb(255, 255, 255)' } },
            React.createElement(Header, null, "FOOD"),
            React.createElement(ScrollView, null,
                React.createElement(View, { style: styles.container },
                    React.createElement(View, { style: styles.container_body },
                        React.createElement(View, { style: styles.category_wrapper }, AccountStore.data &&
                            AccountStore.data.drinks.map((data, index) => React.createElement(Category, { key: index, index: index, category: data, onPress: () => this.selectCategory(data.products) }))),
                        React.createElement(View, { style: styles.body_wrapper }, AccountStore.products && AccountStore.products.map((data, index) => React.createElement(Products, { key: index, product: data, onPress: () => this.onProductPressed(data) })))))),
            (OrderStore.orders && OrderStore.orders.length > 0) &&
                React.createElement(Order, { order: OrderStore.orders[OrderStore.currentOrder] })));
    }
    selectCategory(products) {
        AccountStore.products = products;
    }
    onProductPressed(product) {
        OrderStore.pushDefaultOrder(product);
    }
};
MyComponent = __decorate([
    observer
], MyComponent);
export default MyComponent;
const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'rgb(255, 255, 255)'
    },
    container: {
        flex: 1
    },
    container_body: {
        paddingTop: 16,
        flex: 1,
    },
    category_wrapper: {
        width: '100%',
        height: 90,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 20,
        paddingRight: 20,
    },
    actual_wrapper: {
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 10,
        marginTop: 5,
        width: '100%',
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        alignItems: 'center',
        borderColor: 'rgb(199, 200, 204)',
        alignSelf: 'center'
    },
    body_wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        maxWidth: '100%',
    }
});
//# sourceMappingURL=Food.js.map