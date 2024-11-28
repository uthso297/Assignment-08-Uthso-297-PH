import { useState } from "react";
import Carts from "../Cart/Carts";
import Wishlist from "../Wishlist/Wishlist";
import PageTittle from "../PageTittle/PageTittle";

const DashBoard = () => {
    const [show,setShow] = useState('Cart');
    const handleShow1 = ()=>{
        setShow('Cart');
    }
    const handleShow2 = ()=>{
        setShow('Wishlist');
    }
    return (
        
        <div >
            <PageTittle title="Dashboard | Gadget Heaven"></PageTittle>
            <div className="bg-[#9538E2] py-8 px-32 space-y-4">
                <p className="text-5xl text-white text-center">Dashboard</p>
                <p className="text-white text-center">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                <div className="flex items-center justify-center gap-4">
                    <button onClick={handleShow1} className="border-white border-2 rounded-3xl w-[10vw] px-4 py-2 text-white hover:bg-white hover:text-[#9538E2] font-bold">Cart</button>
                    <button onClick={handleShow2} className="border-white border-2 rounded-3xl w-[10vw] px-4 py-2 text-white hover:bg-white hover:text-[#9538E2] font-bold">Wishlist</button>
                </div>
            </div>

            {
                show === 'Cart' && <Carts></Carts>
            }
            {
                show === 'Wishlist' && <Wishlist></Wishlist>
            }

        </div>
        
    );
};

export default DashBoard;