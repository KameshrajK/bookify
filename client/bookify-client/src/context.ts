import { createContext } from "react";

interface ContextType {
    name: string,
    age: number
}

const contextValue: ContextType = {
    name: '',
    age: 0
}

export const DummyContext = createContext(contextValue);