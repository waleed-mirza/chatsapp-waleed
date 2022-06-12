import React, { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
import io from "socket.io-client";
const AppContext = createContext();
const PORT = process.env.PORT || 3001;

const initialState = {
  textField: "",
  chats: {
    Topic1: [],
    Topic2: [],
  },
  activeTopic: "",
};
let socket;
export const AppProvider = ({ children }) => {
  const user = "_" + Math.random().toString(36).substr(2, 9);
  const sendMessage = (message) => {
    socket.emit("chat message", message);
    socket.removeAllListeners("chat message");
    socket.on("chat message", function (message) {
      dispatch({
        type: "RECEIVE_MSG",
        payload: { ...message },
      });
    });
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const topics = Object.keys(state.chats);
  useEffect(() => {
    dispatch({ type: "ACTIVE_TOPIC_CHANGE", payload: topics[0] });
    if (socket) {
      socket.removeAllListeners("chat message");
      socket.on("chat message", function (message) {
        dispatch({
          type: "RECEIVE_MSG",
          payload: { ...message },
        });
      });
    }
  }, []);
  if (!socket) {
    socket = io(":" + String(PORT), {
      transports: ["websocket", "polling", "flashsocket"],
    });
  }
  const handleChange = (e) => {
    dispatch({ type: "HANLDE_INPUT", payload: e.target.value });
  };
  const emptyInput = () => {
    dispatch({ type: "HANLDE_INPUT", payload: "" });
  };

  const handleActiveTopic = (e) => {
    dispatch({ type: "ACTIVE_TOPIC_CHANGE", payload: e.target.innerText });
  };
  return (
    <AppContext.Provider
      value={{
        ...state,
        handleChange,
        handleActiveTopic,
        sendMessage,
        emptyInput,
        user,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export function GlobalContext() {
  return useContext(AppContext);
}
