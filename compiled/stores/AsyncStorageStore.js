var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { AsyncStorage } from 'react-native';
const orderKey = 'order';
const token = 'token';
class AsyncStorageStore {
    setOrderedProduct(order) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.getOrderedProduct();
            if (!response) {
                response = [];
            }
            response.push(order);
            yield AsyncStorage.setItem(orderKey, JSON.stringify(order));
        });
    }
    getOrderedProduct() {
        return __awaiter(this, void 0, void 0, function* () {
            return JSON.parse(yield AsyncStorage.getItem(orderKey));
        });
    }
    setToken(key) {
        return __awaiter(this, void 0, void 0, function* () {
            yield AsyncStorage.setItem(token, key);
        });
    }
    getToken() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield AsyncStorage.getItem(token);
        });
    }
}
export default new AsyncStorageStore();
//# sourceMappingURL=AsyncStorageStore.js.map