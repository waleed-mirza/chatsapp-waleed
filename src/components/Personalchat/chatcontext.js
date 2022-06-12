import React, { createContext, useContext, useReducer, useEffect } from "react";
import { reducer } from "./chatreducer";

export const AppContext = createContext();

const initialState = {
  nickName: "",
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleNickName = (e) => {
    dispatch({ type: "SET_INPUT", payload: e.target.value });
  };
  return (
    <AppContext.Provider value={{ ...state, handleNickName }}>
      {children}
    </AppContext.Provider>
  );
};
export function Chatcontext() {
  return useContext(AppContext);
}
