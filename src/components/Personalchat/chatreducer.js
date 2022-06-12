export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_INPUT":
      return { ...state, nickName: action.payload };
    default:
      return state;
  }
};
