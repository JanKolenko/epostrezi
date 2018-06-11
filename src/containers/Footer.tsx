import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

interface IFooterProps {
    onPress?: () => void;
}

export default class Footer extends React.Component<IFooterProps> {
  
    render(): JSX.Element {
        return (
            <View style={styles.container}>
                {/* Food */}
                <TouchableOpacity style={styles.container_item} onPress={e => this.props.onPress ? this.props.onPress() : void 0}>
                  <Image
                    source={require('../../img/Menu/FoodBlack.png')}
                  />
                </TouchableOpacity>

                {/* Drinks  */}
                <TouchableOpacity style={styles.container_item} onPress={e => this.props.onPress ? this.props.onPress() : void 0}>
                    <Image
                      source={require('../../img/Menu/DrinkBlack.png')}
                    />
                </TouchableOpacity>

                {/* QR Scan */}
                <TouchableOpacity style={styles.container_item} onPress={e => this.props.onPress ? this.props.onPress() : void 0}>
                  <Image
                      source={require('../../img/Menu/QRScan.png')}
                  />
                </TouchableOpacity>

                {/* Favorites */}
                <TouchableOpacity style={styles.container_item} onPress={e => this.props.onPress ? this.props.onPress() : void 0}>
                    <Image
                        source={require('../../img/Menu/FavoritesBlack.png')}
                    />
                </TouchableOpacity>
                
                {/* Notification */}
                <TouchableOpacity style={styles.container_item} onPress={e => this.props.onPress ? this.props.onPress() : void 0}>
                    <Image
                        source={require('../../img/Menu/UserBlack.png')}
                      />
                </TouchableOpacity>
            </View>
        );
  }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        flexDirection: 'row'
    },

    container_item: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center',
       borderTopWidth: 1,
       borderColor: 'rgb(199, 200, 204)'
    }
});
