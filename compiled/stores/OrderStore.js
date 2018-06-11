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
import { observable, action } from 'mobx';
class OrderStore {
    constructor() {
        // Test
        this.showAllOrders = false;
        this.orders = [];
    }
    pushDefaultOrder(value, type, details, additives) {
        return __awaiter(this, void 0, void 0, function* () {
            let ordersLength = this.orders.length - 1;
            let myOrder = {};
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
        });
    }
    removeOrder(order) {
        const tempOrder = this.orders.findIndex(e => e.name === order.name && e.price === order.price);
        console.log(tempOrder);
        console.log(order);
        if (tempOrder === -1) {
            return;
        }
        if (parseInt(this.orders[tempOrder].quantity, 10) > 1) {
            this.orders[tempOrder].quantity = (parseInt(this.orders[tempOrder].quantity, 10) - 1).toString();
        }
        else {
            this.orders.splice(tempOrder, 1);
            this.currentOrder--;
        }
    }
}
__decorate([
    observable,
    __metadata("design:type", Object)
], OrderStore.prototype, "showAllOrders", void 0);
__decorate([
    observable,
    __metadata("design:type", Object)
], OrderStore.prototype, "order", void 0);
__decorate([
    observable,
    __metadata("design:type", Object)
], OrderStore.prototype, "orders", void 0);
__decorate([
    observable,
    __metadata("design:type", Number)
], OrderStore.prototype, "currentOrder", void 0);
__decorate([
    action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], OrderStore.prototype, "pushDefaultOrder", null);
__decorate([
    action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OrderStore.prototype, "removeOrder", null);
export default new OrderStore();
//# sourceMappingURL=OrderStore.js.map