import PropTypes from "prop-types";
const Wish = ({wishProduct}) => {
    const {product_title,description,product_image,price} = wishProduct;
    return (
        <div className="flex items-center bg-white px-4 py-4 rounded-lg gap-3 mb-8">
            <div>
                <img className="h-[20vh] w-[10vw]" src={product_image} alt="" />
            </div>
            <div>
                <h2 className="font-bold text-xl">{product_title}</h2>
                <h2 className="opacity-50">{description}</h2>
                <h2 className="font-bold">Price: ${price}</h2>
            </div>
        </div>
    );
};

Wish.propTypes = {
    wishProduct: PropTypes.object
}

export default Wish;