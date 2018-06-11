import * as React from 'react';
import { Platform, View, ImageBackground, StyleSheet, Text, Image, TouchableOpacity, Modal } from 'react-native';
import { IDrinks } from '../interfaces/Epostrezi';
import { observable } from 'mobx';
import AccountStore from '../stores/AccountStore';
import Font from './FontAleo';

interface IProductPopupProps {

    onPress?: () => void;
}

export default class ProductPopup extends React.Component<IProductPopupProps> {

    @observable isVisible = true;

    render(): JSX.Element {
        return (
            <Modal
                transparent={true}
                visible={this.isVisible}
            >
                <View style={styles.container_exit}>
                    <TouchableOpacity onPress={() => this.onCancel()}>
                        <Image
                            source={require('../../img/Cancel/CancelWhite.png')}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.container}>

                    <View style={styles.container_body_image}>
                        <View style={{shadowOffset: {  width: 0,  height: 1,  }, shadowColor: 'black', shadowOpacity: 0.2 }}>
                            <Image
                                style={{width: '100%', height: 150}}
                                source={{uri: AccountStore.orderProduct.photo}}
                            />
                        </View>
                    <View style={styles.container_body}>
                            <View style={{width: '100%', flexDirection: 'row', alignItems: 'center'}}>
                                <TouchableOpacity style={{width: '100%', flexDirection: 'row', borderBottomColor: 'rgba(204, 204, 204, 0.4)', borderBottomWidth: 1}}>
                                    {/* verdana, helvetica */}
                                    <Font>Količina</Font>
                                    <Image
                                        style={{alignSelf: 'flex-end'}}
                                        source={require('../../img/Arrow/ArrowDown.png')}
                                    />
                                </TouchableOpacity>

                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }

    private onCancel(): void {
        AccountStore.orderProduct = undefined;
    }
}
const styles = StyleSheet.create({

    container_exit: {
        height: 60,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        alignItems: 'flex-end',
        paddingTop: 30,
        paddingRight: 30
    },

    container: {
        flex: 1,
        paddingLeft: 30,
        paddingRight: 30,
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },

    container_body_image: {
        backgroundColor: 'rgb(255, 255, 255)',
        height: 500,
    },

    container_body: {
        backgroundColor: 'rgb(255, 255, 255)',
        height: 500,
        padding: 30
    },
});