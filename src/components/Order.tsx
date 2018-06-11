import * as React from 'react';
import Navigation from 'react-navigation';
import { Platform, View, ImageBackground, StyleSheet, Text, Image, TouchableOpacity, TouchableHighlight, LayoutAnimation, ScrollView } from 'react-native';
import FontAleo, { Font, SizeFont, ColorFont } from './FontAleo';
import AccountStore from '../stores/AccountStore';
import { IDrinks } from '../interfaces/Epostrezi';
import { observer } from 'mobx-react';
import OrderStore from '../stores/OrderStore';
import { observable } from 'mobx';

interface IOrder {
    order: IDrinks;
}

@observer
export default class Order extends React.Component<IOrder> {

    @observable isExpanded = false;

    styles = StyleSheet.create({

        imageContainer: {
            width: 50,
            alignItems: 'center',
            justifyContent: 'center'
        },

        nameContainer: {
            flex: 1,
            alignItems: 'flex-start',
            justifyContent: 'center'
        },

        addQuantityContainer: {
            width: 30,
            alignItems: 'center',
            flexDirection: 'row'
        },

        quantityButton: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        },

        quantityImage: {
            width: 16,
            height: 16
        },

        image: {
            width: 40, 
            height: 40, 
            resizeMode: 'contain', 
            backgroundColor: 'rgba(199, 200, 204, 0.5)', 
            borderRadius: 20
        },

        image_quantity: {
            alignItems: 'center', 
            justifyContent: 'center', 
            position: 'absolute', 
            width: 16, 
            height: 16, 
            borderRadius: 16, 
            right: 3, 
            top: 3, 
            backgroundColor: 'rgba(0, 172, 237, 1)'
        },

        cancel_button: {
            flex: 1, 
            borderRightWidth: 1, 
            borderRightColor: 'rgb(199, 200, 204)', 
            alignItems: 'center', 
            justifyContent: 'center'
        }
      });

    render(): JSX.Element {
    return (
        <View style={this.getContainerStyle()}>
            {/* image, quantity */}
            {this.isExpanded &&
            <React.Fragment>
            <TouchableOpacity style={{width: '100%', backgroundColor: '#e1e1e1', alignItems: 'center', justifyContent: 'center'}} onPress={() => this.onExpandClose()}>
                <FontAleo marginBottom={3} font={Font.Bold} size={SizeFont.Small}>VAŠ NAKUP</FontAleo>
            </TouchableOpacity>
            <ScrollView style={{flexGrow: 1}}>

                {(OrderStore.orders && OrderStore.orders.map((order, index) => 
                <React.Fragment key={index}>
                    <View style={{width: '100%', height: 50, flexDirection: 'row'}}>
                        <View style={this.styles.imageContainer}>
                            <Image
                                style={this.styles.image}
                                source={{uri : order.photo}}
                            />
                            <View
                                style={this.styles.image_quantity}
                            >
                                <FontAleo font={Font.Bold} size={SizeFont.ExtraSmall} color={ColorFont.White}>{order.quantity}</FontAleo>
                            </View>
                        </View>
                        <TouchableHighlight style={this.styles.nameContainer} onPress={() => alert('UREDI')}>
                            <FontAleo font={Font.Bold} size={SizeFont.Small}>{order.name}</FontAleo>
                        </TouchableHighlight>
                        <View style={this.styles.addQuantityContainer}>
                            <TouchableOpacity style={this.styles.quantityButton} onPress={() => this.addOrder(order)}>
                                <Image
                                    style={this.styles.quantityImage}
                                    source={require('../../img/add/plus.png')}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={this.styles.quantityButton} onPress={() => this.removeOrder(order)}>
                                <Image
                                    style={this.styles.quantityImage}
                                    source={require('../../img/add/minus.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </React.Fragment>
                ))
            }
            
            </ScrollView>
            <View style={{width: '100%', height: 30, alignItems: 'flex-end', paddingRight: 8}}>
                <FontAleo font={Font.Bold}>Skupaj: {this.getTotalPrice()} $</FontAleo>
            </View>
            </React.Fragment>
            }
            <View style={{width: '100%', height: 50, flexDirection: 'row'}}>
                {!this.isExpanded && 
                <React.Fragment>
                    <View style={this.styles.imageContainer}>
                        <Image
                            style={this.styles.image}
                            source={{uri : this.props.order.photo}}
                        />
                        <View
                            style={this.styles.image_quantity}
                        >
                            <FontAleo font={Font.Bold} size={SizeFont.ExtraSmall} color={ColorFont.White}>{this.props.order.quantity}</FontAleo>
                        </View>
                    </View>

                    {/* name detail */}
                    <TouchableOpacity style={this.styles.nameContainer} onPress={() => this.expand()}>
                        <FontAleo font={Font.Bold} size={SizeFont.Small}>{this.props.order.name}</FontAleo>
                        <FontAleo size={SizeFont.Small} color={ColorFont.DarkGrey}>Uredi nakup</FontAleo>
                    </TouchableOpacity>
                </React.Fragment>
                }

                {/* + - */}
                {/* <View style={this.styles.addQuantityContainer}>
                    <TouchableOpacity style={this.styles.quantityButton} onPress={() => this.addOrder()}>
                        <Image
                            style={this.styles.quantityImage}
                            source={require('../../img/add/plus.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={this.styles.quantityButton} onPress={() => this.removeOrder()}>
                        <Image
                            style={this.styles.quantityImage}
                            source={require('../../img/add/minus.png')}
                        />
                    </TouchableOpacity>
                </View> */}
                
                {/* order, cancel */}
                <View style={this.getOrderContainerStyle()}>
                    <TouchableOpacity style={this.styles.cancel_button} onPress={() => this.onBuyPressed()}>
                        <FontAleo font={Font.Bold} size={SizeFont.Small}>NAROČI</FontAleo>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} onPress={e => this.onCancelPressed()}>
                        <FontAleo font={Font.Bold} size={SizeFont.Small}>PREKLIČI</FontAleo>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
  }

  private getTotalPrice(): string {
      var price = 0;

      OrderStore.orders.forEach(order => {
            console.log(parseFloat(order.price).toFixed(2));
            price += parseInt(order.quantity, 10) > 1 ? parseFloat(order.price) * parseInt(order.quantity, 10) : parseFloat(order.price);
      });

      return price.toFixed(2).toString();
  }

  private onExpandClose(): void {
    LayoutAnimation.configureNext( LayoutAnimation.Presets.easeInEaseOut );
    this.isExpanded = !this.isExpanded;
  }

  private getOrderContainerStyle(): {} {
      return {
        width: this.isExpanded ? '100%' : 150,
        flexDirection: 'row'
    };
  }

  private getContainerStyle(): {} {
    return {
        alignSelf: 'flex-end',
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
        position: 'relative',
        width: '90%',
        height: this.getOrderHeight(),
        borderRadius: 10,
        shadowOffset: {width: 0, height: 0},
        shadowColor: 'black',
        shadowOpacity: 0.55,
    };
  }

  private getOrderHeight(): number {
      if (!this.isExpanded) {
        return 50;
      }

      if (OrderStore.orders.length < 5) {
          return 105 + (OrderStore.orders.length * 50);
      } else {
          return 350;
      }
  }

  private expand(): void {
      this.isExpanded = !this.isExpanded;
      LayoutAnimation.configureNext( LayoutAnimation.Presets.easeInEaseOut );
  }

  private onCancelPressed(): void {
      OrderStore.orders = [];
  }

  private onBuyPressed(): void {
        AccountStore.buy();
  }

  private addOrder(order: IDrinks): void {
    OrderStore.pushDefaultOrder(order);
  }

  private removeOrder(order: IDrinks): void {
    OrderStore.removeOrder(order);
  }
}