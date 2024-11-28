import Product from "./Product";
import PropTypes from 'prop-types';


const Products = ({products}) => {
    return (
        <div className="grid grid-cols-3 gap-3">
            {
                products.map(product => <Product key={product.product_id} product={product}></Product>)
            }
        </div>
    );
};
Products.propTypes = {
    products: PropTypes.array.isRequired
}

export default Products;