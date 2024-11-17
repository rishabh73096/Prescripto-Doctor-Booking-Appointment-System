import { createContext } from "react";
import { doctors } from "../assets/assets";

export const AppContext = createContext()

const AppConetextProvider = (props) => {
    

    const currency = '$';
    const value = {
        doctors,
        currency
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}

export default AppConetextProvider
