import {Role} from "../../core/enums";

export type IProductsState  = {
    status: string,
    products: IProduct[]
}

export type IProduct = {
    id: string,
    name: string,
    price: number,
    category: string,
    image: {
        src: string,
        alt: string
    },
    bestseller: boolean,
    featured: boolean,
    count: number
}

export interface IUser {
    id: string,
    username: string,
    email: string,
    firstName: string,
    lastName: string,
    roles: Role[],
}

export interface IAuthInitialState {
    loading: boolean,
    userInfo: IUser | null,
    error: boolean,
    status: string,
    isAuthenticated: boolean,
    openLoginModal: boolean
}

export interface IModalState {
    isOpen: boolean,
    modalName: string
}

export interface IShopCartInitialState {
    items: IProduct[],
    isOpen: boolean
}
