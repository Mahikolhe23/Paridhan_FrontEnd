import { createContext, useState } from "react";

export const Context = createContext();

const AppContext = ({ children }) => {
    const [value, setValue] = useState(null);
    return (
        <Context.Provider value={{ value, setValue }}>
            {children}
        </Context.Provider>
    );
};
export default AppContext;