import React, { createContext, useState } from "react";

export const StateContext = createContext();

function ContextProvider({ children }) {
  const [photo, setPhoto] = useState("");
  const [result, setResult] = useState([]);

  return (
    <StateContext.Provider value={{ photo, result, setPhoto, setResult }}>
      {children}
    </StateContext.Provider>
  );
}

export default ContextProvider;
