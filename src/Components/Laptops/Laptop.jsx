import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Laptop = ({ laptop }) => {
    const { product_image, product_title, price, product_id } = laptop;
    return (
        <div className='bg-slate-100 rounded-xl px-3 py-2 space-y-2'>

            <img className='h-[40vh] w-full rounded-lg' src={product_image} alt="" />
            <h2 className='text-xl font-bold'>{product_title}</h2>
            <p>Price: {price}</p>
            <Link to={`/product/${product_id}`}><button className='px-4 py-2 bg-white rounded-3xl border-2 font-bold text-[#9538E2] border-indigo-500 hover:bg-indigo-500 hover:text-white'>View Details</button></Link>

        </div>
    );
};
Laptop.propTypes = {
    laptop: PropTypes.object
}
export default Laptop;