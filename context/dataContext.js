"use client";

// imports libraries
import { createContext, useContext, useState } from "react";

// creo un contexto
const DataContext = createContext();

// PROVAIDER AND USECONTEXT
export const DataContextProvider = ({ children }) => {
  // creo el estado del contexto
  const [contextData, setContextData] = useState({
    codeToken: null,
    user: {},
    history: {},
  });

  const value = { contextData, setContextData };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

// HOOK
export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context)
    throw new Error(
      "useDataContext debe ser utilizado dentro de un DataContextProvider"
    );
  return context;
};
