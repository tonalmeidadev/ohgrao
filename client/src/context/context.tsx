import { createContext } from "react";

interface ContextProviderProps {
  children: React.ReactNode;
}

export const Context = createContext({});

export default function ContextProvider({ children }: ContextProviderProps) {
  return <Context.Provider value={{}}>{children}</Context.Provider>;
}
