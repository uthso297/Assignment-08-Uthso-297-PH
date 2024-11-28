import { useContext } from "react";
import Wish from "./Wish";
import { WishContext } from "../../context/GlobalContextProvider2";
import PageTittle from "../PageTittle/PageTittle";

const Wishlist = () => {
    const [wishProducts] = useContext(WishContext)
    return (
        <div className="bg-gray-200 py-8 px-32 rounded-lg mx-4 mt-4">
            <PageTittle title="Wishlist | Gadget Heaven"></PageTittle>
            <h2 className="font-bold">Wishlist</h2>
            <div className="pt-10">
                {
                    wishProducts.map(wishProduct => <Wish key={wishProduct.product_id} wishProduct={wishProduct} ></Wish>)
                }
            </div>
        </div>
    );
};

export default Wishlist;