import { createContext } from "react"
import { useState } from "react"
import PropTypes from "prop-types"

export const GlobalContext = createContext(null)


const GlobalValuesProvider = ({ children }) => {

  const [cartProducts, setCartProducts] = useState([])


  return (
    <GlobalContext.Provider
      value={[
        cartProducts,
        setCartProducts,
      ]}
    >
      {children}
    </GlobalContext.Provider>
  )
}
GlobalValuesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default GlobalValuesProvider