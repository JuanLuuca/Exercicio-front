import { initialvalue, TypeContextChildren, TypeContextProps } from "@Types";
import { createContext, useState } from "react";

export const AuthContext = createContext<TypeContextProps>(initialvalue)

export const AuthProvider = ({ children }: TypeContextChildren) => {
    //ESTADO GLOBAL DO VALOR ID CHARACTERS
    const [valueId, setValueId] = useState(0);

    return (
        <AuthContext.Provider value={{ setValueId, valueId }}>
            {children}
        </AuthContext.Provider>
    )
} 