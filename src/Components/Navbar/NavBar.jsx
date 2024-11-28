import { useContext } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { WishContext } from "../../context/GlobalContextProvider2";
import { GlobalContext } from "../../context/GlobalValuesProvider";

const NavBar = () => {
    const [wishProducts] = useContext(WishContext);
    const [cartProducts] = useContext(GlobalContext);

    const navigate = useNavigate();
    const location = useLocation();

    const isNotHomePage = location.pathname !== '/';

    return (
        <div className={`flex items-center justify-between ${isNotHomePage ? 'bg-white' : 'bg-[#9538E2]'} py-8 px-32 rounded-t-lg mx-4 mt-4`}>
            <div>
                <p className={`text-3xl font-bold ${isNotHomePage ? 'text-black' : 'text-white'}`}>
                    Gadget Heaven
                </p>
            </div>
            <div className="text-lg font-bold text-white flex gap-3">
                <Link to={'/'} className={`${location.pathname === '/' ? 'active' : ''} ${isNotHomePage ? 'text-black' : 'text-white'}`}>Home</Link>
                <Link to="/statistics" className={`${location.pathname === '/statistics' ? 'active' : ''} ${isNotHomePage ? 'text-black' : 'text-white'}`}>Statistics</Link>
                <Link to={'/giftcards'} className={`${location.pathname === '/giftcards' ? 'active' : ''} ${isNotHomePage ? 'text-black' : 'text-white'}`}>Gift Cards</Link>
                <Link to={'/dashboard'} className={`${location.pathname === '/dashboard' ? 'active' : ''} ${isNotHomePage ? 'text-black' : 'text-white'}`}>Dashboard</Link>
            </div>
            <div className="flex gap-2">
                <div 
                    onClick={() => navigate('/dashboard')} 
                    className="rounded-[50%] w-12 h-12 flex items-center justify-center bg-white text-2xl cursor-pointer hover:bg-gray-400 hover:text-white border-2"
                >
                    <CiShoppingCart />
                    <sup className="text-red-700 font-bold">{cartProducts.length === 0 ? '' : cartProducts.length}</sup>
                </div>
                <div 
                    onClick={() => navigate('/dashboard')} 
                    className="rounded-[50%] w-12 h-12 flex items-center justify-center bg-white text-2xl cursor-pointer hover:bg-gray-400 hover:text-white border-2"
                >
                    <CiHeart />
                    <sup className="text-red-700 font-bold">{wishProducts.length === 0 ? '' : wishProducts.length}</sup>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
