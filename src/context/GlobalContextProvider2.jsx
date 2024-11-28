import { createContext } from "react";
import { useState } from "react"
import PropTypes from 'prop-types';

export const WishContext = createContext(null);


const GlobalContextProvider2 = ({children}) => {
    const [wishProducts,setWishProducts] = useState([]);

    return (
        <WishContext.Provider 
        value={[
            wishProducts,
            setWishProducts
        ]}
        >
            {children}
        </WishContext.Provider>
    );
};
GlobalContextProvider2.propTypes = {
    children: PropTypes.node.isRequired,
  };
export default GlobalContextProvider2;