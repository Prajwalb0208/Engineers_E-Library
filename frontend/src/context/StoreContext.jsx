import { createContext } from "react";
import {books} from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
    


    const contextValue = {
        books
    }
    
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;