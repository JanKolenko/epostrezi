import { observable } from 'mobx';
import Api from '../services/Api';
import { IDrinks, ICategory, IResponse, IData, IOrder, IOrderedDrink } from '../interfaces/Epostrezi';
import OrderStore from './OrderStore';
import AsyncStorageStore from './AsyncStorageStore';

class AccountStore {

    @observable code: 'f6a6797750d92c7af62f972651fe988d';
    // User information
    @observable email: string;
    @observable password: string;
    @observable token: string;

    // Menu handling
    @observable products: IDrinks[];
    @observable orderProduct: IDrinks | undefined;

    @observable error: string;

    @observable response: IResponse;
    @observable data: IData;

    async login(): Promise<void> {
        let test: {};
        try {
            test = await Api.login();
            console.log(test);
        } catch (e) {
            // TODO: implement
        }
    }

    async registerUser(): Promise<void> {
        let test: {};

        try {
            test = await Api.registerUser(this.token);
            console.log(test);
        } catch (e) {
            // TODO: implement
        }

        console.log('register');
        console.log(test);
    }

    async QrScan(): Promise<void> {
        let test: {};

        try {
            this.response = await Api.QrScan();
            this.data = this.response.data[0];
            console.log(this.data.drinks);
        } catch (e) {
            console.log('e' + e);
        }
    }

    async buy(): Promise<boolean> {
        
        let userOrderedProcuts = [] as IOrderedDrink[];
        OrderStore.orders.map(order => {
            userOrderedProcuts.push(
                {
                    name: order.name,
                    photo: order.photo,
                    price: order.price,
                    quantity: order.quantity,
                    size: '0.33'
                } as IOrderedDrink
            );
        });

        const userOrder = {
            placeName: this.data.placeName,
            subscriber: 'test',
            tableNumber: '2',
            tableLocation: 'test',
            tableMenu: 'string',
            orderDate: 'string',
            paymentMethod: 'string',
            paymentTime: 'string',
            orderStatus: 'string',
            orderedProducts: userOrderedProcuts,
        } as IOrder;

        try {
            const response = await Api.buy(userOrder);
            console.log(response);
            if (response && !response.success) {
                return false;
            }
        } catch (e) {
            console.log('e' + e);
            return false;
        } 

        await AsyncStorageStore.setOrderedProduct(userOrder);

        return true;
    }
}

export default new AccountStore();
