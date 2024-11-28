import { useContext, useState, useEffect } from "react";
import { FaSort } from "react-icons/fa";
import { GlobalContext } from "../../context/GlobalValuesProvider";
import Cart from "./Cart";
import Modal from "react-modal";
import './Cart.css'
import { useNavigate } from "react-router-dom";
Modal.setAppElement("#root");

const Carts = () => {
    const [cartProducts, setCartProducts] = useContext(GlobalContext);
    const [totalPrice, setTotalPrice] = useState(0);
    const [sortedProducts, setSortedProducts] = useState([]);
    const [show, setShow] = useState('normal');
    const [modalIsOpen, setModalIsOpen] = useState(false); 
    const navigate = useNavigate();

    useEffect(() => {
        const total = cartProducts.reduce((acc, cartProduct) => acc + cartProduct.price, 0);
        setTotalPrice(total);
        setSortedProducts(cartProducts);
    }, [cartProducts]);

    const handleSort = () => {
        const sorted = [...cartProducts].sort((a, b) => b.price - a.price);
        setSortedProducts(sorted);
        setShow('sort');
    };

    const handlePurchase = () => {
        setModalIsOpen(true); 
        setShow('purchase');
    };

    

    const closeModal = () => {
        setModalIsOpen(false); 
        setCartProducts([]);
        setSortedProducts([]);

    };

    const isCartEmpty = cartProducts.length === 0 && totalPrice === 0;

    return (
        <div className="bg-gray-200 py-8 px-32 rounded-lg mx-4 mt-4">
            
            <div className="flex items-center justify-between">
                <p className="font-bold text-xl">Cart</p>
                <div className="flex items-center justify-center gap-8">
                    <p className="font-bold text-xl">Total Cost: {totalPrice.toFixed(2)}</p>
                    <button onClick={handleSort} className="flex items-center justify-center border-2 px-4 py-2 rounded-3xl border-[#9538E2] text-[#9538E2] hover:bg-[#9538E2] hover:text-white">
                        <p className="font-bold">Sort by Price</p>
                        <span><FaSort /></span>
                    </button>
                    <button 
                        onClick={handlePurchase} 
                        className={`bg-[#9538E2] px-3 py-2 text-white rounded-3xl ${isCartEmpty ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white hover:text-[#9538E2]'}`} 
                        disabled={isCartEmpty}
                    >
                        Purchase
                    </button>
                </div>
            </div>
            <div className="pt-10">
                {
                    show === 'normal' && cartProducts.map(cartProduct => <Cart key={cartProduct.product_id} cartProduct={cartProduct} />)
                }
                {
                    show === 'sort' && sortedProducts.map(cartProduct => <Cart key={cartProduct.product_id} cartProduct={cartProduct} />)
                }
                {
                    show === 'purchase' && <p className="text-5xl text-center font-bold">Thank you for your purchase!</p>
                }
            </div>

            <Modal 
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Purchase Confirmation"
                className="modal" 
                overlayClassName="overlay"
            >
                <h2 className="text-2xl font-bold">Thank you for your purchase!</h2>
                <p>Your order has been processed successfully.</p>
                <p className="font-bold text-xl">Total Price: {totalPrice.toFixed(2)}</p>
                <button onClick={() => {
                    navigate('/')
                    closeModal()
                    }} className="mt-4 bg-[#9538E2] text-white px-4 py-2 rounded">Close</button>
            </Modal>
        </div>
    );
};

export default Carts;
