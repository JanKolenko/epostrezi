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
import { View, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import { observable } from 'mobx';
import AccountStore from '../stores/AccountStore';
import Font from './FontAleo';
export default class ProductPopup extends React.Component {
    constructor() {
        super(...arguments);
        this.isVisible = true;
    }
    render() {
        return (React.createElement(Modal, { transparent: true, visible: this.isVisible },
            React.createElement(View, { style: styles.container_exit },
                React.createElement(TouchableOpacity, { onPress: () => this.onCancel() },
                    React.createElement(Image, { source: require('../../img/Cancel/CancelWhite.png') }))),
            React.createElement(View, { style: styles.container },
                React.createElement(View, { style: styles.container_body_image },
                    React.createElement(View, { style: { shadowOffset: { width: 0, height: 1, }, shadowColor: 'black', shadowOpacity: 0.2 } },
                        React.createElement(Image, { style: { width: '100%', height: 150 }, source: { uri: AccountStore.orderProduct.photo } })),
                    React.createElement(View, { style: styles.container_body },
                        React.createElement(View, { style: { width: '100%', flexDirection: 'row', alignItems: 'center' } },
                            React.createElement(TouchableOpacity, { style: { width: '100%', flexDirection: 'row', borderBottomColor: 'rgba(204, 204, 204, 0.4)', borderBottomWidth: 1 } },
                                React.createElement(Font, null, "Koli\u010Dina"),
                                React.createElement(Image, { style: { alignSelf: 'flex-end' }, source: require('../../img/Arrow/ArrowDown.png') }))))))));
    }
    onCancel() {
        AccountStore.orderProduct = undefined;
    }
}
__decorate([
    observable,
    __metadata("design:type", Object)
], ProductPopup.prototype, "isVisible", void 0);
const styles = StyleSheet.create({
    container_exit: {
        height: 60,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        alignItems: 'flex-end',
        paddingTop: 30,
        paddingRight: 30
    },
    container: {
        flex: 1,
        paddingLeft: 30,
        paddingRight: 30,
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },
    container_body_image: {
        backgroundColor: 'rgb(255, 255, 255)',
        height: 500,
    },
    container_body: {
        backgroundColor: 'rgb(255, 255, 255)',
        height: 500,
        padding: 30
    },
});
//# sourceMappingURL=ProductPopup.js.map