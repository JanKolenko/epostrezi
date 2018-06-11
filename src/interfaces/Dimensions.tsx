import { Dimensions } from 'react-native';

export default class Dimension {
    width: number;

    constructor() {
        this.width = Dimensions.get('window').width;
    }
}