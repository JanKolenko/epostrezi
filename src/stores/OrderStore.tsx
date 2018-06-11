import { observable, action } from 'mobx';
import Api from '../services/Api';
import { IDrinks, ICategory, IName } from '../interfaces/Epostrezi';
import { observer } from 'mobx-react';

class OrderStore {

    do: boolean;
    // Test
    @observable showAllOrders = false;
    @observable order: IDrinks;
    @observable orders = [] as IDrinks[];
    @observable currentOrder: number;

    @action
    public async pushDefaultOrder(value: IDrinks, type?: IName, details?: IName, additives?: IName): Promise<void> {
        
        let ordersLength = this.orders.length - 1;
        let myOrder = {} as IDrinks;

        if (value) {
            myOrder.name = value.name;
            myOrder.photo = value.photo;
            myOrder.price = value.price;
            myOrder.size = value.size;
        }

        if (type) {
            myOrder.type = value.type;
        }
        if (details) {
            myOrder.details = value.details;
        }
        if (additives) {
            myOrder.additives = value.additives;
        }

        let isSome = false;

        this.orders.map((data, key) => {
            if (data.name === myOrder.name && data.size === myOrder.size) {
                this.orders[key].quantity = (parseInt(this.orders[key].quantity, 10) + 1).toString();
                this.currentOrder = key;
                isSome = true;
            }
        });

        if (!isSome) {
            myOrder.quantity = '1';
            this.currentOrder = ordersLength + 1;
            this.orders.push(myOrder);
        }

        // console.log(this.orders);
    }

    @action
    public removeOrder(order: IDrinks): void {

        const tempOrder = this.orders.findIndex(e => e.name === order.name && e.price === order.price);
        console.log(tempOrder);
        console.log(order);

        if (tempOrder === -1 ) {
            return;
        }

        if (parseInt(this.orders[tempOrder].quantity, 10) > 1) {
            this.orders[tempOrder].quantity = (parseInt(this.orders[tempOrder].quantity, 10) - 1).toString();
        } else {
            this.orders.splice(tempOrder, 1);
            this.currentOrder--;
        }
    }
}

export default new OrderStore();
