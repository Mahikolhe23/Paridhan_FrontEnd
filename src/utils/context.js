import { createContext, useState } from "react";

export const Context = createContext();

const AppContext = ({ children }) => {
    const [value, setValue] = useState(/* initial value */);
    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
};
export default AppContext;