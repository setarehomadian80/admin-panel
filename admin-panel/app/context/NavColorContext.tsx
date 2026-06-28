'use client'

import {
    createContext,
    useContext,
    useState,
    ReactNode,
} from "react";


type NavColorContextType = {
    navColor: string;
    setNavColor: React.Dispatch<React.SetStateAction<string>>;
};

const NavColorContext = createContext<NavColorContextType | null>(null)

export function NavColorProvider({ children }: { children: ReactNode }) {
    const [navColor, setNavColor] = useState('#358eed')


    return (
        <NavColorContext.Provider
            value={{
                navColor,
                setNavColor,
            }}
        >
            {children}
        </NavColorContext.Provider>
    )
}

export function useNavColor() {
    const context = useContext(NavColorContext)

    if (!context) {
        throw new Error(
            "useNavColor must be used inside NavColorProvider"
        )
    }
    return context;
}