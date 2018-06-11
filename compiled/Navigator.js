import * as React from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Food from './containers/Food';
const Stacks = StackNavigator({
    Login: {
        screen: Food,
    },
    Food: {
        screen: Food
    }
}, {
    headerMode: 'none'
});
export default class Navigator extends React.Component {
    render() {
        return (React.createElement(Stacks, null));
    }
}
AppRegistry.registerComponent('Stacks', () => Stacks);
//# sourceMappingURL=Navigator.js.map