import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator, Image
} from 'react-native';
import FontAleo, { Font } from '../components/FontAleo';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorageStore from '../stores/AsyncStorageStore';
import { IUserOrders } from '../interfaces/Epostrezi';

// let test = [] as IUserOrders[];

export default class Notification extends React.Component {

  render(): JSX.Element {
    return (
      <View style={styles.container}>
        <View style={styles.status_cell}>
          <FontAleo font={Font.Bold}>Naročila</FontAleo>
          {/* {test.map(order => order.orders.filter)} */}
        </View>
          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  container_body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  status_cell: {
    marginTop: 18,
    justifyContent: 'center',
    paddingLeft: 10,
    width: '100%',
    height: 30,
    backgroundColor: '#e1e1e1',
  }
});
