import React, {useCallback, useMemo} from "react";
import {ProductItem} from "./ProductItem";
import {IProduct} from "../../../../store/slices/interface";
import {addProduct} from "../../../../store/slices/shopCart";
import {useAppDispatch} from "../../../../hooks/useRedux";
import {PRODUCT_CATEGORIES} from "../../../../core/enums/categoryEnums";

interface IProductsList {
    products: IProduct[],
    handleFilterByCategory: (category: string) => void
}

export const ProductsList: React.FC<IProductsList> = ({ products, handleFilterByCategory }) => {
    const dispatch = useAppDispatch();
    const addProductToCart = useCallback((item: IProduct) => {
        dispatch(addProduct(item));
    },[dispatch]);

    const renderProducts = useMemo(() => (
        products.map((product) =>
            <ProductItem
                addProductToCart={addProductToCart}
                key={product.id + Math.random()}
                product={product}/>)
    ),[addProductToCart, products])

    return (
        <div className="flex flex-row">
            <div className="basis-1/6">
            <div>
                <p>Category</p>
                <div>
                    <input onClick={() => handleFilterByCategory(PRODUCT_CATEGORIES.PEOPLE)} type="checkbox"/>
                    <span>People</span>
                </div>
                <div>
                    <input type="checkbox"/>
                    <span>Premium</span>
                </div>
                <div>
                    <input type="checkbox"/>
                    <span>Pets</span>
                </div>
                <div>
                    <input type="checkbox"/>
                    <span>Food</span>
                </div>
                <div>
                    <input type="checkbox"/>
                    <span>Landmarks</span>
                </div>
                <div>
                    <input type="checkbox"/>
                    <span>Cities</span>
                </div>
                <div>
                    <input type="checkbox"/>
                    <span>Nature</span>
                </div>
            </div>
                <div>
                    <p>Price range</p>
                    <div>
                        <input type="checkbox"/>
                        <span>Lower than $20</span>
                    </div>
                    <div>
                        <input type="checkbox"/>
                        <span>$20 - $100</span>
                    </div>
                    <div>
                        <input type="checkbox"/>
                        <span>$100 - $200</span>
                    </div>
                    <div>
                        <input type="checkbox"/>
                        <span>More than $200</span>
                    </div>
                </div>
            </div>
        <div data-testid="products-list" className="grid md:grid-cols-1 lg:grid-cols-3 2xl:grid-cols-3 gap-7 w-full">
            {renderProducts}
        </div>
        </div>
    )
}
