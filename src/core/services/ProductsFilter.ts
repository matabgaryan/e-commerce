import {IProduct} from "../../store/slices/interface";

export class ProductsFilter {
    private readonly products: IProduct[];
    public filteredProducts: IProduct[]
    constructor(productsData: IProduct[]) {
        this.products = productsData;
        this.filteredProducts = [];
    }

    findMatchingIndex(cumulativeWeights: number[], randomNumber: number): number {
        let left: number = 0;
        let right: number = cumulativeWeights.length - 1;
        let possibleSolution: number = -1;
        while(left <= right){
            let mid=Math.floor((left + right)/2);
            if(cumulativeWeights[mid] >= randomNumber){
                possibleSolution = mid;
                right = mid - 1;
                continue;
            }
            left = mid + 1;
        }
        return possibleSolution;
    }

    getCumulativeWeights():number[] {
        const cumulativeWeights: number[] = [];
        for (let i = 0; i < this.products.length; i += 1) {
            cumulativeWeights[i] = this.products[i].price + (cumulativeWeights[i - 1] || 0);
        }
        return cumulativeWeights;
    }

    sortProducts(a: IProduct, b: IProduct){
            if ( b.price < a.price ){
                return -1;
            }
            if ( b.price > a.price ){
                return 1;
            }
            return 0;
    }

    getProductsByPriceProbability(count: number):IProduct[] {
        const cumulativeWeights: number[] = this.getCumulativeWeights();
        const maxCumulativeWeight: number = cumulativeWeights[cumulativeWeights.length - 1];
        const res: IProduct[] = [];
        let tmpCount = 0;
        for (let i = 0; i < count + tmpCount; i++){
            const randomNumber = maxCumulativeWeight * Math.random();
            const index = this.findMatchingIndex(cumulativeWeights, randomNumber);
            if (this.products[index]){
                const product = res.find(x => x.id === this.products[index].id);
                if (!product){
                    res.push(this.products[index]);
                }
            }
        }
        return res.sort(this.sortProducts)
    }

    filterByPriceRang(minPrice:number, maxPrice: number) {
        return this.products.filter(product => product.price >= minPrice && product.price <= maxPrice);
    }

    filterByCategory(category: string) {
        return this.products.filter(product => product.category === category);
    }

    filterByPrice() {
        const sortedByLowestPrice = this.products.slice().sort((a, b) => a.price - b.price);
        const sortedByHighestPrice = this.products.slice().sort((a, b) => b.price - a.price);
        return { lowest: sortedByLowestPrice, highest: sortedByHighestPrice };
    }
}


