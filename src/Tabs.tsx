import * as React from 'react';
import { TabNavigator } from 'react-navigation';
import Food from './containers/Food';

const Tabs = TabNavigator({
    Food: {
        screen: Food
    }
});