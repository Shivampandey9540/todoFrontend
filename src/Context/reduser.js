import { ADDTODOS, REMOVETODOS, SETTODOS } from "./action.type";

export const reducer = (state, action) => {
  //   state.todos = [];

  switch (action.type) {
    case SETTODOS:
      return (state = action.payload);
    case ADDTODOS:
      return [...state.todos, action.payload];
    case "REMOVETASK":
      console.log(state[0].tasks);
      return state.filter((e) => e.tasks.filter((k) => (k._id = !action._id)));
    case REMOVETODOS:
      return state.filter((e) => (e._id = !action._id));

    default:
      return state;
  }
};
