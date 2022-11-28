import { ADDTODOS, REMOVETODOS, SETTODOS } from "./action.type";

export const reducer = (state, action) => {
  //   state.todos = [];

  switch (action.type) {
    case SETTODOS:
      return (state = action.payload);
    case ADDTODOS:
      return [...state.todos, action.payload];
    case REMOVETODOS:
      return state.filter((e) => (e._id = !action._id));

    default:
      return state;
  }
};
