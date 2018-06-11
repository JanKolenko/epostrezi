var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import AccountStore from '../stores/AccountStore';
const apiUrl = 'https://epostrezi.si/api';
class Api {
    constructor() {
        this.qrcode = {};
    }
    login() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.post('/users/login', { email: AccountStore.email, password: AccountStore.password });
        });
    }
    QrScan() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.post('/places/find/one', { placeName: 'La Siesta' });
        });
    }
    buy(order) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.post('/orders/add', order);
        });
    }
    registerUser(key) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.post('/users/register', key);
        });
    }
    // async logout(): Promise<void> {
    //     return await this.post<void>('/associate/logout');
    // }
    // async products(): Promise<IAssociateStoreProduct[]> {
    //     return await this.get<IAssociateStoreProduct[]>('/associate/products');   
    // }
    setQRCode(val) {
        this.qrcode = val;
    }
    getQRCode() {
        return Promise.resolve(this.qrcode);
    }
    get(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${apiUrl}${url}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': AccountStore.code,
                },
            });
            return yield this.handleResponse(response);
        });
    }
    post(url, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${apiUrl}${url}`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    // 'Authorization': null,
                    'X-TOKEN': 'f6a6797750d92c7af62f972651fe988d'
                },
                body: body ? JSON.stringify(body) : void 0
            });
            console.log(body);
            return yield this.handleResponse(response);
        });
    }
    handleResponse(response) {
        return __awaiter(this, void 0, void 0, function* () {
            let json;
            // await sleep(500);
            try {
                json = yield response.json();
                // console.log(json);
            }
            catch (e) {
                // console.log('Await response error: ' + e);
            }
            if (response.status >= 200 && response.status < 300) {
                return json;
            }
            // throw new ConfirmedError(json);
        });
    }
}
function sleep(time) {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
}
export default new Api();
//# sourceMappingURL=Api.js.map