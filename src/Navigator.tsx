import * as React from 'react';
import { Text, View, StyleSheet, AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { TabNavigator } from 'react-navigation';

import Login from './containers/Login';
import Food from './containers/Food';
import Tabs from './NavigatorTabs';

const Stacks = StackNavigator(
  {
    Login: {
      screen: Food,
    },
    Food: {
      screen: Food
    }
  },
  {
    headerMode: 'none'
  }
);

export default class Navigator extends React.Component {
  render(): JSX.Element {
    return (
      <Stacks />
    );
  }
}

AppRegistry.registerComponent('Stacks', () => Stacks);
