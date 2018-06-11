var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { observable } from 'mobx';
import Api from '../services/Api';
import OrderStore from './OrderStore';
import AsyncStorageStore from './AsyncStorageStore';
class AccountStore {
    login() {
        return __awaiter(this, void 0, void 0, function* () {
            let test;
            try {
                test = yield Api.login();
                console.log(test);
            }
            catch (e) {
                // TODO: implement
            }
        });
    }
    registerUser() {
        return __awaiter(this, void 0, void 0, function* () {
            let test;
            try {
                test = yield Api.registerUser(this.token);
                console.log(test);
            }
            catch (e) {
                // TODO: implement
            }
            console.log('register');
            console.log(test);
        });
    }
    QrScan() {
        return __awaiter(this, void 0, void 0, function* () {
            let test;
            try {
                this.response = yield Api.QrScan();
                this.data = this.response.data[0];
                console.log(this.data.drinks);
            }
            catch (e) {
                console.log('e' + e);
            }
        });
    }
    buy() {
        return __awaiter(this, void 0, void 0, function* () {
            let userOrderedProcuts = [];
            OrderStore.orders.map(order => {
                userOrderedProcuts.push({
                    name: order.name,
                    photo: order.photo,
                    price: order.price,
                    quantity: order.quantity,
                    size: '0.33'
                });
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
            };
            try {
                const response = yield Api.buy(userOrder);
                console.log(response);
                if (response && !response.success) {
                    return false;
                }
            }
            catch (e) {
                console.log('e' + e);
                return false;
            }
            yield AsyncStorageStore.setOrderedProduct(userOrder);
            return true;
        });
    }
}
__decorate([
    observable,
    __metadata("design:type", String)
], AccountStore.prototype, "code", void 0);
__decorate([
    observable,
    __metadata("design:type", String)
], AccountStore.prototype, "email", void 0);
__decorate([
    observable,
    __metadata("design:type", String)
], AccountStore.prototype, "password", void 0);
__decorate([
    observable,
    __metadata("design:type", String)
], AccountStore.prototype, "token", void 0);
__decorate([
    observable,
    __metadata("design:type", Array)
], AccountStore.prototype, "products", void 0);
__decorate([
    observable,
    __metadata("design:type", Object)
], AccountStore.prototype, "orderProduct", void 0);
__decorate([
    observable,
    __metadata("design:type", String)
], AccountStore.prototype, "error", void 0);
__decorate([
    observable,
    __metadata("design:type", Object)
], AccountStore.prototype, "response", void 0);
__decorate([
    observable,
    __metadata("design:type", Object)
], AccountStore.prototype, "data", void 0);
export default new AccountStore();
//# sourceMappingURL=AccountStore.js.map