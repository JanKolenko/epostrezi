var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as React from 'react';
import { StyleSheet, Linking, View } from 'react-native';
import md5 from 'react-native-md5';
import AsyncStorageStore from '../stores/AsyncStorageStore';
import AccountStore from '../stores/AccountStore';
export default class QRScan extends React.Component {
    onSuccess(e) {
        Linking
            .openURL(e.data)
            .catch(err => console.error('An error occured', err));
    }
    componentWillMount() {
        return __awaiter(this, void 0, void 0, function* () {
            AccountStore.token = yield AsyncStorageStore.getToken();
            if (!AccountStore.token) {
                const hexmd5v = md5.hex_md5(Date.now());
                AccountStore.token = hexmd5v;
                yield AsyncStorageStore.setToken(AccountStore.token);
                yield AccountStore.registerUser();
            }
        });
    }
    render() {
        return (React.createElement(View, null));
    }
}
const styles = StyleSheet.create({
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777',
    },
    textBold: {
        fontWeight: '500',
        color: '#000',
    },
    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)',
    },
    buttonTouchable: {
        padding: 16,
    },
});
//# sourceMappingURL=QRScan.js.map