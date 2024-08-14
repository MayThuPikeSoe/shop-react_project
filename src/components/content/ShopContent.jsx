/* eslint-disable react/prop-types */
import { createContext } from "react"

import all_product from "../Assets/all_product"

export const ShopContent =createContext(null)
const ShopContentProvider = ({children}) => {
    const contextValue={all_product}
  return (
   <ShopContent.Provider value={contextValue}>
    {children}
   </ShopContent.Provider>
  )
}
export default ShopContentProvider;