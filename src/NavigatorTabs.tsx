import * as React from 'react';
import { Text, View, StyleSheet, AppRegistry, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Drinks from './containers/Drinks';
import Food from './containers/Food';
import Favorites from './containers/Favorites';
import Notification from './containers/Notification';
import QRScan from './containers/QRScan';

const Tabs = TabNavigator({
    Drinks: {
      screen: Food,
      navigationOptions: {
          tabBarIcon: ({ tintColor, focused }) => <Icon name={focused ? 'ios-pizza' : 'ios-pizza-outline'} size={27} color={tintColor}/>
      }, 
    },

    Food: {
      screen: Food,
      navigationOptions: {
          tabBarIcon: ({ tintColor, focused }) => <Icon name={focused ? 'ios-beer' : 'ios-beer-outline'} size={27} color={tintColor}/>
      },
    },

    QRScan: {
      screen: QRScan,
      navigationOptions: {
          tabBarIcon: ({ tintColor, focused }) => <Icon name="md-qr-scanner" size={37} color="rgb(174, 54, 34)"/>
      }
    },

    Favorites: {
      screen: Notification,
      navigationOptions: {
          tabBarIcon: ({ tintColor, focused }) => <Icon name={focused ? 'ios-notifications' : 'ios-notifications-outline'} size={27} color={tintColor}/>
      },
    },
    Notification: {
      screen: Notification,
      navigationOptions: {
          tabBarLabel: 'Notification',
          tabBarIcon: ({ tintColor, focused }) => <Icon name={focused ? 'ios-contact' : 'ios-contact-outline'} size={27} color={tintColor}/>
      },
    },
  },                      {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: 'rrgb(174, 54, 34)',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: 'rgb(255, 255, 255)',
        shadowColor: 'rgb(0, 0, 0)',
        shadowOffset: {
          width: 0,
          height: -0.5
        },
        shadowOpacity: 0.2,
      }
    }
}
);

export default class NavigatorTab extends React.Component {
  render(): JSX.Element {
    return (
      <Tabs />
    );
  }
}