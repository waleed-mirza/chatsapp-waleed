const reducer = (state, action) => {
  switch (action.type) {
    case "HANLDE_INPUT":
      return {
        ...state,
        textField: action.payload,
      };
    case "RECEIVE_MSG":
      return {
        ...state,
        chats: {
          ...state.chats,
          [action.payload.topic]: [
            ...state.chats[action.payload.topic],
            {
              from: action.payload.from,
              msg: action.payload.msg,
            },
          ],
        },
      };
    case "ACTIVE_TOPIC_CHANGE":
      return { ...state, activeTopic: action.payload };
    default:
      return state;
  }
};

export default reducer;
