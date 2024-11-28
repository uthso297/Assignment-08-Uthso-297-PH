import Phone from "./Phone";
import PropTypes from 'prop-types';

const Phones = ({products}) => {
    const phones = products.filter(item => item.category === 'Phone')
    return (
        <div className="grid grid-cols-3 gap-3">
            {
                phones.map(phone => <Phone key={phone.product_title} phone={phone}></Phone>)
            }
        </div>
    );
};

Phones.propTypes = {
    products: PropTypes.array
}

export default Phones;