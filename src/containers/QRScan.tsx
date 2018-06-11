import * as React from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  View
} from 'react-native';
import md5 from 'react-native-md5';

import QRCodeScanner from 'react-native-qrcode-scanner';
import AsyncStorageStore from '../stores/AsyncStorageStore';
import AccountStore from '../stores/AccountStore';

export default class QRScan extends React.Component {
  onSuccess(e: {data: string}): void {
    Linking
      .openURL(e.data)
      .catch(err => console.error('An error occured', err));
  }

  async componentWillMount(): Promise<void> {
    AccountStore.token = await AsyncStorageStore.getToken();

    if (!AccountStore.token) {
      const hexmd5v = md5.hex_md5( Date.now() );
      AccountStore.token = hexmd5v;
      await AsyncStorageStore.setToken(AccountStore.token);
      await AccountStore.registerUser();
    }
  }

  render(): JSX.Element {
    return (
      <View>
      {/* <QRCodeScanner
        onRead={this.onSuccess.bind(this)}
        topContent={
          <Text style={styles.centerText}>
            Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code.
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        }
      /> */}
      </View>
    );
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