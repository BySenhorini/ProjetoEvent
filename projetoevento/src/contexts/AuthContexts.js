import { createContext, useState, useContext, useEffect } from "react";
import secureLocalStorage from "react-secure-storage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [usuario, setUsuario] = useState(() => {
        const usuarioSalvo = secureLocalStorage.getItem("tokenLogin");
        return usuarioSalvo ? JSON.parse(usuarioSalvo) : null;
    });

    useEffect(() => {
        if (usuario) {
            secureLocalStorage.setItem("tokenLogin", JSON.stringify(usuario));
        } else {
            secureLocalStorage.removeItem("tokenLogin");
        }
    }, [usuario]);

    return (
        <AuthContext.Provider value={{ usuario, setUsuario }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);