import Smartwatch from "./Smartwatch";
import PropTypes from 'prop-types';

const Smartwatches = ({products}) => {
    const smartwatches = products.filter(item => item.category === 'Smartwatch')
    return (
        <div className="grid grid-cols-3 gap-3">
            {
                smartwatches.map(watch => <Smartwatch key={watch.product_title} watch={watch}></Smartwatch>)
            }
        </div>
    );
};

Smartwatches.propTypes = {
    products: PropTypes.array
}

export default Smartwatches;