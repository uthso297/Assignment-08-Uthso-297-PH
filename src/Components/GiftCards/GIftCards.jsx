import { useEffect } from "react";
import { useState } from "react";
import Giftcard from "./Giftcard";
import PageTittle from "../PageTittle/PageTittle";

const GIftCards = () => {

    const [cards , setCards] = useState([]);

    useEffect(()=>{
    fetch('./giftCards.json')
    .then(res => res.json())
    .then(data => setCards(data))
    },[])

    return (
       <div>
        <PageTittle title="Gift Cards | Gadget Heaven"></PageTittle>
         <div className="bg-gray-200 py-8 px-32 rounded-lg mx-4 mt-4">
            <h2 className="text-5xl text-[#9538E2] font-bold text-center pb-8">Explore awesome Gift Cards</h2>
            <div>
                {
                    cards.map(gift => <Giftcard key={gift.card_id} gift={gift}></Giftcard>)
                }
            </div>
        </div>
       </div>
    );
};

export default GIftCards;