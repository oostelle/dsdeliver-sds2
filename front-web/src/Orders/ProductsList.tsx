import { Product } from "./types";
//import ProductCard from "./ProductCard";
import { checkIsSelected } from "./helpers";
import ProductCard from "./ProductCard";

type Props = {
    products: Product[];
}

function ProductsList({ products }: Props){
    return (
        <div className="Orders-list-container">
            <div className="orders-list-items">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default ProductsList; 