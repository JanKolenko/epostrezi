export interface ICategory {
    name: string;
    photo: string;
    products: IDrinks[];
}

export interface IFood {
    name: string;
    description: string;
    price: string;
    photo: string;
    thumbnail: string;

    size: IName[];
    details?: IName[];
    quantity?: string;
    additives?: IName[];
}

export interface IDrinks {
    name: string;
    price: string;
    photo: string;
    size: IName[];
    type?: IName[];
    details?: IName[];
    additives?: IName[];
    quantity?: string;
}

export interface IOrderedDrink {
    name: string;
    price: string;
    photo: string;
    size: string;
    type?: IName[];
    details?: IName[];
    additives?: IName[];
    quantity?: string;
}

export interface IUserOrders {
    orders: IOrder[];
}

export interface IName {
    name: string;
}

export interface IAddress {
    main: string;
    country: string;
    city: string;
    postNumber: string;
}

export interface IBankAccount {
    iban: string;
    bank: string;
}

export interface IContact {
    email: string;
    phone: string;
}

export interface IPayment {
    last: string;
    next: string;
}

export interface IData {
    _key: string;
    about: string;
    address: IAddress;
    bankAccount: IBankAccount;
    contact: IContact;
    drinks: ICategory[];
    food: IFood[];

    logo: string;
    owner: string;
    payment: IPayment;
    placeName: string;
    registrationNumber: string;
    taxNumber: string;
    type: string;
    validUser: string;
}

export interface IResponse {
    data: IData[];
    error: {}; 
    success: boolean;
}

export interface IOrder {
    placeName: string;
    subscriber: string;
    tableNumber: string;
    tableLocation: string;
    tableMenu: string;
    orderDate: string;
    paymentMethod: string;
    paymentTime: string;
    paymentStatus: string;
    orderStatus: string;
    orderedProducts: IOrderedDrink[];
}

export enum TableLocationEnum {
    Inside,
    Outside
}

export enum PaymentMethodEnum {
    Cash,
    Card,
    PayPal
}

export enum OrderStatusEnum {
    InCreation,
    Ordered,
    Payed
}

export enum PaymentStatusEnum {
    Ordered,
    Finished
}