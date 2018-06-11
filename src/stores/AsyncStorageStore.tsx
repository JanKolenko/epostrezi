import { IOrderedDrink, IUserOrders, IOrder } from '../interfaces/Epostrezi';
import { AsyncStorage } from 'react-native';

const orderKey = 'order';
const token = 'token';

class AsyncStorageStore {

    async setOrderedProduct(order: IOrder): Promise<void> {
        let response = await this.getOrderedProduct();
        if (!response) {
            response = [];
        }
        response.push(order);
        await AsyncStorage.setItem(orderKey, JSON.stringify(order));
    }

    async getOrderedProduct(): Promise<IOrder[]> {
        return JSON.parse(await AsyncStorage.getItem(orderKey));
    }

    async setToken(key: string): Promise<void> {
        await AsyncStorage.setItem(token, key);
    }

    async getToken(): Promise<string> {
        return await AsyncStorage.getItem(token);
    }
}

export default new AsyncStorageStore();
