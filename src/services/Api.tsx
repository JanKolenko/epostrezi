import AccountStore from '../stores/AccountStore';
import { IResponse, IOrder } from '../interfaces/Epostrezi';

const apiUrl = 'https://epostrezi.si/api';

class Api {

    qrcode = {};

    async login(): Promise<{}> {
        return await this.post<{}>('/users/login', {email: AccountStore.email, password: AccountStore.password});   
    }

    async QrScan(): Promise<IResponse> {
        return await this.post<IResponse>('/places/find/one', {placeName: 'La Siesta'});
    }

    async buy(order: IOrder): Promise<IResponse> {
        return await this.post<IResponse>('/orders/add', order);
    }

    async registerUser(key: string): Promise<IResponse> {
        return await this.post<IResponse>('/users/register', key);
    }

    // async logout(): Promise<void> {
    //     return await this.post<void>('/associate/logout');
    // }

    // async products(): Promise<IAssociateStoreProduct[]> {
    //     return await this.get<IAssociateStoreProduct[]>('/associate/products');   
    // }

    setQRCode(val: {}): void {
        this.qrcode = val;
    }

    getQRCode(): Promise<{}> {
        return Promise.resolve(this.qrcode);
    }

    private async get<T>(url: string): Promise<T> {
        const response = await fetch(`${apiUrl}${url}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': AccountStore.code,
            },
        });

        return await this.handleResponse<T>(response);
    }

    private async post<T>(url: string, body?: {}): Promise<T> {
        const response = await fetch(`${apiUrl}${url}`, {
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

        return await this.handleResponse<T>(response);
    }

    private async handleResponse<T>(response: Response): Promise<T> {
        let json;
        // await sleep(500);
        try {
            json = await response.json();
            // console.log(json);
        } catch (e) {
            // console.log('Await response error: ' + e);
        }

        if (response.status >= 200 && response.status < 300) {
            return json as T;
        }

        // throw new ConfirmedError(json);
    }
}

function sleep(time: number): Promise<void> {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
}

export default new Api();