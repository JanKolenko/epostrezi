var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
// Mobx
import { observer } from 'mobx-react';
import Button, { ButtonType } from '../components/Button';
import TextInputForm from '../components/TextInputForm';
import { Font, ColorFont, SizeFont } from '../components/FontAleo';
import FontAleo from '../components/FontAleo';
import { observable } from 'mobx';
import AccountStore from '../stores/AccountStore';
let Login = class Login extends React.Component {
    constructor() {
        super(...arguments);
        this.login = true;
        this.styles = StyleSheet.create({
            container: {
                marginRight: 25,
                marginLeft: 25,
                paddingBottom: 10,
                flex: 2,
                alignItems: 'center',
                justifyContent: 'flex-end'
            },
            body_logo: {
                color: 'rgb(255, 255, 255)',
                fontSize: 32,
                fontFamily: 'Chalkduster',
                fontWeight: 'bold',
                marginBottom: 20
            },
            errorView: {
                flex: 1,
                justifyContent: 'center'
            },
            errorText: {
                textAlign: 'center'
            },
            actionView: {
                flex: 3,
                paddingRight: 30,
                paddingLeft: 30,
                paddingTop: 30,
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderTopRightRadius: 12,
                borderTopLeftRadius: 12
            },
            triangleShape: {
                width: 0,
                height: 0,
                borderLeftWidth: 10,
                borderRightWidth: 10,
                borderBottomWidth: 10,
                borderRadius: 1,
                borderStyle: 'solid',
                backgroundColor: 'transparent',
                borderLeftColor: 'transparent',
                borderRightColor: 'transparent',
                borderBottomColor: 'rgba(255, 255, 255, 0.2)'
            },
        });
    }
    render() {
        return (React.createElement(ImageBackground, { style: { flex: 1 }, source: { uri: 'https://i.pinimg.com/736x/6d/7c/48/6d7c480b12e4eebfde2f8908851e8f16--purple-wallpaper-phone-iphone-ombre-wallpaper.jpg' } },
            React.createElement(View, { style: this.styles.container },
                React.createElement(Text, { style: this.styles.body_logo }, "epostrezi"),
                React.createElement(FontAleo, { marginBottom: 48, color: ColorFont.White, alignCenter: true }, "Registriraj in do\u017Eivi popolnoma novo obliko naro\u010Danja."),
                React.createElement(View, { style: { width: '100%', flexDirection: 'row' } },
                    React.createElement(TouchableOpacity, { onPress: () => this.login = false, style: { flex: 1 } },
                        React.createElement(FontAleo, { font: Font.Bold, color: ColorFont.White, size: SizeFont.Medium, alignCenter: true }, "REGISTRACIJA")),
                    React.createElement(TouchableOpacity, { onPress: () => this.login = true, style: { flex: 1 } },
                        React.createElement(FontAleo, { font: Font.Bold, color: ColorFont.White, size: SizeFont.Medium, alignCenter: true }, "PRIJAVA")))),
            React.createElement(View, { style: { flexDirection: 'row', paddingLeft: 30, paddingRight: 30 } },
                React.createElement(View, { style: { flex: 1, alignItems: 'center' } }, !this.login &&
                    React.createElement(View, { style: this.styles.triangleShape })),
                React.createElement(View, { style: { flex: 1, alignItems: 'center' } }, this.login &&
                    React.createElement(View, { style: this.styles.triangleShape }))),
            this.login &&
                React.createElement(View, { style: this.styles.actionView },
                    React.createElement(TextInputForm, { onChangeText: text => this.onLoginUsername(text) }, "Uporabni\u0161ko ime"),
                    React.createElement(TextInputForm, { password: true, onChangeText: text => this.onLoginPassword(text) }, "Geslo"),
                    React.createElement(Button, { type: ButtonType.OpacityButton, onPress: () => this.onLoginPressed() }, "Prijavi se"),
                    React.createElement(View, { style: { width: '95%', flexDirection: 'row', height: 50, marginTop: 20, borderTopWidth: 1, borderColor: 'rgba(255, 255, 255, 0.3)', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' } },
                        React.createElement(FontAleo, { color: ColorFont.White, size: SizeFont.Small, alignCenter: true }, "Pozabljeno geslo?"),
                        React.createElement(TouchableOpacity, null,
                            React.createElement(FontAleo, { font: Font.Bold, color: ColorFont.White, size: SizeFont.Small, alignCenter: true }, " Poi\u0161\u010Di pomo\u010D.")))),
            !this.login &&
                React.createElement(View, { style: this.styles.actionView },
                    React.createElement(TextInputForm, null, "Uporabni\u0161ko ime"),
                    React.createElement(TextInputForm, { password: true }, "Geslo"),
                    React.createElement(TextInputForm, { password: true }, "Geslo"),
                    React.createElement(Button, { type: ButtonType.OpacityButton, onPress: () => alert('hej') }, "Registriraj se"))));
    }
    onLoginUsername(text) {
        AccountStore.email = text;
    }
    onLoginPassword(text) {
        AccountStore.password = text;
    }
    getActionStyle(dependency) {
        return {
            flex: 1,
            borderBottomWidth: !dependency ? 1.5 : 0,
            borderColor: !dependency ? 'rgb(199, 200, 204)' : 'transparent',
        };
    }
    onLoginPressed() {
        return __awaiter(this, void 0, void 0, function* () {
            yield AccountStore.login();
        });
    }
};
__decorate([
    observable,
    __metadata("design:type", Object)
], Login.prototype, "login", void 0);
Login = __decorate([
    observer
], Login);
export default Login;
//# sourceMappingURL=Login.js.map