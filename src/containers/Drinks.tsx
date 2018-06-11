import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator, Image
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class Drinks extends React.Component {
  render(): JSX.Element {
    return (
      <View style={styles.container}>
        <View style={styles.container_body}>
        <Image 
          style={{width: 32, height: 32, marginBottom: 12}}
          source={require('../../img/Exclamation/exclamation.png')}
        />
          <FontAwesome style={{fontSize: 14, letterSpacing: 1.1}}>Coming soon</FontAwesome>
          
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
  }
});
