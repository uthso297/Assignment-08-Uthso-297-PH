import Laptop from "./Laptop";
import PropTypes from 'prop-types';

const Laptops = ({products}) => {
    const laptops = products.filter(item => item.category === 'Laptop')
    return (
        <div className="grid grid-cols-3 gap-3">
            {
                laptops.map(laptop => <Laptop key={laptop.product_title} laptop={laptop}></Laptop>)
            }
        </div>
    );
};

Laptops.propTypes = {
    products: PropTypes.array
}

export default Laptops;