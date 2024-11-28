import PropTypes from "prop-types";
const Giftcard = ({ gift }) => {
    const { brand, currency, value, expiry_date, status, image_url, card_id } = gift;
    return (
        <div className="flex items-center bg-white px-4 py-4 rounded-lg gap-3 mb-8">
            <div>
                <img className="h-[30vh] w-[20vw] rounded-lg" src={image_url} alt="" />
            </div>
            <div>
                
                <h2 className="font-bold text-xl">Card Id: {card_id}</h2>
                <h2 className="font-bold text-xl">{brand}</h2>
                <h2 className="opacity-50">Expire date: {expiry_date}</h2>
                <h2 className="opacity-50">Currency: {currency}</h2>
                <h2 className="opacity-50">Value: {value}</h2>
                <h2 className="font-bold">{status}</h2>
            </div>
        </div>
    );
};
Giftcard.propTypes = {
    gift: PropTypes.object.isRequired
}
export default Giftcard;