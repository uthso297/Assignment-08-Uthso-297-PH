import { useLoaderData, useParams } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

import ReactStars from "react-rating-stars-component";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalValuesProvider";
import { WishContext } from "../../context/GlobalContextProvider2";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = () => {



    const [cartProducts, setCartProducts] = useContext(GlobalContext)

    const [wishProducts, setWishProducts] = useContext(WishContext)


    const { product_id } = useParams();

    const id = parseInt(product_id)

    const data = useLoaderData();

    const product = data.find(item => item.product_id === id);


    const { product_image, product_title, price, availability, rating, description, Specification } = product;

    const notify = () => toast("Product is already in wishlist!");

    const notify1 = () => toast("Product is added in wishlist!");

    const notify2 = () => toast("Product is added to Cart!");

    const handleCLick = () => {
        setCartProducts([...cartProducts, product])
        notify2();
    }

    const handleCLick2 = () => {
        if (!wishProducts.some(item => item.product_id === product.product_id)) {
            setWishProducts([...wishProducts, product]);
            notify1();
        } else {
            notify();
        }
    }

    return (
        <>
            <div className="relative mb-[450px]">
                <div className="bg-[#9538E2] pb-60 px-32 rounded-lg mx-4">
                    <h2 className="text-5xl font-bold text-center text-white pb-2 pt-2">Product Details</h2>
                    <p className="text-center text-white pb-2">Explore the latest gadgets that will take your experience to <br /> the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
                <div className="flex gap-7 rounded-lg bg-slate-100 p-8 w-[40vw] mx-auto absolute top-[25vh] left-[30vw]">
                    <div>
                        <img className="rounded-lg h-[50vh]" src={product_image} alt="" />
                    </div>
                    <div className="space-y-2">

                        <h2 className="text-2xl font-bold">{product_title}</h2>
                        <p className="font-bold">Price: ${price}</p>
                        <button className="bg-[rgba(48,156,8,0.1)] border-2 border-[#309C08] px-4 py-2 rounded-3xl"><p className="text-[#309C08]">{availability ? 'In stock' : 'Out of stock'}</p></button>
                        <p className="opacity-70">{description}</p>
                        <div>
                            <h2 className="font-bold">Specification: </h2>
                            {
                                Specification.map((spec, idx) => <p className="opacity-70" key={idx}>{spec}</p>)
                            }
                        </div>
                        <div className="flex items-center gap-2">
                            <p className="font-bold">Rating </p>
                            <span className="text-[#ffd700]"><FaStar /></span>
                        </div>


                        <div className="flex gap-2 items-center">
                            <p className="font-bold">{rating}</p>
                            <ReactStars
                                count={5}
                                value={rating}
                                edit={false}
                                size={24}
                                activeColor="#ffd700"
                            />
                        </div>

                        <div className="flex gap-3">
                            <button onClick={handleCLick} className="flex px-3 py-2 rounded-3xl bg-[#9538E2] text-white items-center justify-center hover:bg-white hover:text-[#9538E2]"><span className="font-bold">Add to Cart</span> <span className="text-2xl"><CiShoppingCart /></span></button>
                            <div onClick={handleCLick2} className="rounded-[50%] w-10 h-10 flex items-center justify-center bg-white text-2xl border-2 hover:bg-[#9538E2] hover:text-white cursor-pointer">
                                <CiHeart />
                            </div>
                        </div>


                    </div>
                </div>


            </div>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                />
        </>
    );
};

export default ProductDetails;