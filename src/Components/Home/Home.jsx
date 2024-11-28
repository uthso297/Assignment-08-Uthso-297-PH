import { useNavigate } from "react-router-dom";
import Banner from "../Banner/Banner";
import { useEffect, useState } from "react";
import Category from "../Category/Category";
import Products from "../Products/Products";
import Phones from "../Phones/Phones";
import Laptops from "../Laptops/Laptops";
import Smartwatches from "../SmartWartches/Smartwatches";
import NoData from "../NoData/NoData";
import PageTittle from "../PageTittle/PageTittle";

const Home = () => {
    const navigate = useNavigate();

    const [categories, setCategories] = useState([]);

    const [products, setProducts] = useState([]);

    const [show, setShow] = useState('All');

    const handleShow1 = () => {
        setShow('All');
    }

    const handleCat = (id) => {
        if (id === 'Phone') {
            setShow('P')
        }
        if (id === 'Laptop') {
            setShow('L')
        }
        if (id === 'Smartwatch') {
            setShow('S')
        }
    }

    const handleNoData = () =>{
        setShow('');
    }

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setCategories(data.map(item => item.category)))
    }, [])
    const uniqueCategories = [...new Set(categories)];

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div className="">
            <PageTittle title = "Gadgets | Gadget Heaven "></PageTittle>
            <div className="text-center bg-[#9538E2] pb-80 rounded-b-lg mx-4 relative">
                <h2 className="text-6xl font-bold text-white p-2">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h2>
                <p className="text-white py-4">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                <button onClick={() => navigate('/dashboard')} className="bg-white rounded-3xl px-6 py-2 text-xl font-bold text-[#9538E2] hover:bg-gray-300">Shop Now</button>
                <div className="absolute top-[50%] left-[25%]">
                    <Banner></Banner>
                </div>
            </div>

            <div className=" mt-96">
                <h2 className="text-5xl font-bold py-7 text-center">Explore Cutting-Edge Gadgets</h2>
                <div className="px-32 mx-4 mb-4 flex gap-3">
                    <div className="categories w-[20vw] h-[320px] space-y-3 bg-slate-100 py-7 flex flex-col items-center rounded-xl">
                        <button onClick={handleShow1} className="bg-gray-400 w-[90%] rounded-3xl px-6 py-2 text-xl font-bold hover:bg-[#9538E2] flex items-center justify-center">All Product</button>
                        {
                            uniqueCategories.map((cat, idx) => <Category key={idx} cat={cat} handleCat={handleCat}></Category>)
                        }
                        <button onClick={handleNoData} className="bg-gray-400 w-[90%] rounded-3xl px-6 py-2 text-xl font-bold hover:bg-[#9538E2] flex items-center justify-center">HeadPhones</button>
                    </div>


                    <div className="products w-[80vw]">
                        {
                            show === 'All' && <Products products={products}></Products>
                        }
                        {
                            show === 'P' && <Phones products={products}></Phones>
                        }
                        {
                            show === 'L' && <Laptops products={products}></Laptops>
                        }
                        {
                            show === 'S' && <Smartwatches products={products}></Smartwatches>
                        }
                        {
                            show === '' && <NoData></NoData>
                        }
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Home;