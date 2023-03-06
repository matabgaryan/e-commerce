import {generatedUuid} from "../utils/uuid";
import {IProduct} from "../../store/slices/interface";

export const productsData: IProduct[] = [
    {
        id: generatedUuid(),
        name: 'Product 1',
        price: 10,
        category: 'people',
        image: {
            src: '',
            alt: ''
        },
        bestseller: false,
        featured: false,
        count: 0
    },
    {
        id: generatedUuid(),
        name: 'Product 2',
        price: 20,
        category: 'pets',
        image: {
            src: '',
            alt: ''
        },
        bestseller: false,
        featured: false,
        count: 0
    },
    {
        id: generatedUuid(),
        name: 'Product 3',
        price: 30,
        category: 'premium',
        image: {
            src: '',
            alt: ''
        },
        bestseller: false,
        featured: false,
        count: 0
    },
    {
        id: generatedUuid(),
        name: 'Product 4',
        price: 40,
        category: 'food',
        image: {
            src: '',
            alt: ''
        },
        bestseller: false,
        featured: false,
        count: 0
    },
    {
        id: generatedUuid(),
        name: 'Product 5',
        price: 50,
        category: 'landmarks',
        image: {
            src: '',
            alt: ''
        },
        bestseller: false,
        featured: false,
        count: 0
    },
    {
        id: generatedUuid(),
        name: 'Product 6',
        price: 60,
        category: 'cities',
        image: {
            src: '',
            alt: ''
        },
        bestseller: false,
        featured: false,
        count: 0
    },
    {
        id: generatedUuid(),
        name: 'Product 7',
        price: 70,
        category: 'cities',
        image: {
            src: '',
            alt: ''
        },
        bestseller: false,
        featured: false,
        count: 0
    },
    {
        id: generatedUuid(),
        name: 'Product 8',
        price: 80,
        category: 'nature',
        image: {
            src: '',
            alt: ''
        },
        bestseller: false,
        featured: false,
        count: 0
    },
    {
        id: generatedUuid(),
        name: 'Product 9',
        price: 90,
        category: 'nature',
        image: {
            src: '',
            alt: ''
        },
        bestseller: false,
        featured: false,
        count: 0
    },
    {
        id: generatedUuid(),
        name: 'Product 10',
        price: 90,
        category: 'pets',
        image: {
            src: '',
            alt: ''
        },
        bestseller: false,
        featured: false,
        count: 0
    },
]
