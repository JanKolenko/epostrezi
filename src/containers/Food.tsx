import * as React from 'react';
import { View, Text, StyleSheet, Dimensions, Modal, TouchableOpacity, TouchableHighlight, ScrollView } from 'react-native';
import { observer } from 'mobx-react';
import Header from '../components/Header';
import AccountStore from '../stores/AccountStore';
import OrderStore from '../stores/OrderStore';
import Category from '../components/Category';
import Products from '../components/Products';
import Dimension from '../interfaces/Dimensions';
import ProductPopup from '../components/ProductPopup';
import Footer from './Footer';
import Order from '../components/Order';
import FontAleo, { ColorFont, Font } from '../components/FontAleo';
import { IDrinks } from '../interfaces/Epostrezi';

var dim = new Dimension;

@observer
export default class MyComponent extends React.Component {

    componentDidMount(): void {
      AccountStore.email = 'A';
      AccountStore.password = 'a';
      AccountStore.QrScan();
      // await AccountStore.getProducts();
    }

    render(): JSX.Element {
        return (
          <View style={{flex: 1, backgroundColor: 'rgb(255, 255, 255)'}}>

              <Header>FOOD</Header>

              <ScrollView>
                  <View style={styles.container}>
                      <View style={styles.container_body}>
                      {/* <ScrollView horizontal style={{flex: 1}}> */}
                          <View style={styles.category_wrapper}>
                                    {AccountStore.data &&
                                      AccountStore.data.drinks.map((data, index) => 
                                        <Category key={index} index={index} category={data} onPress={() => this.selectCategory(data.products)}/>
                                      )
                                    }
                          </View>
                      {/* </ScrollView> */}

                          <View style={styles.body_wrapper}>
                              {AccountStore.products && AccountStore.products.map((data, index) => 
                                <Products key={index} product={data} onPress={() => this.onProductPressed(data)}/>
                                )
                              }
                          </View> 
                      </View>  
                  </View>
              </ScrollView>
              {/* <Footer /> */}

              {(OrderStore.orders && OrderStore.orders.length > 0) &&
                  <Order order={OrderStore.orders[OrderStore.currentOrder]}/>
              }
          </View>
        );
    }

  private selectCategory(products: IDrinks[]): void {
      AccountStore.products = products;
  }

  private onProductPressed(product: IDrinks): void {
      OrderStore.pushDefaultOrder(product);
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'rgb(255, 255, 255)'
  },

  container: {
    flex: 1
  },

  container_body: {
    paddingTop: 16,
    flex: 1,
  },

  category_wrapper: {
    width: '100%',
    height: 90,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },

  actual_wrapper: {
    paddingTop: 10, 
    paddingBottom: 10, 
    marginBottom: 10, 
    marginTop: 5, 
    width: '100%', 
    borderTopWidth: 0.5, 
    borderBottomWidth: 0.5,
    alignItems: 'center',
    borderColor: 'rgb(199, 200, 204)', 
    alignSelf: 'center'
  },

  body_wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '100%',
  }
});
