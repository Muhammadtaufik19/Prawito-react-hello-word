import ActionType from "./GlobalActionType";

// State global
const globalState = {
  totalOrder: 1,
  value: 5,
};

// Reducer
const rootReducer = (state = globalState, action) => {
  if (action.type === "ActionType.PLUS_ORDER") {
    return {
      ...state,
      totalOrder: state.totalOrder + 1,
      value: state.value + 1,
    };
  }
  if (action.type === "ActionType.MINUS_ORDER") {
    let totalOrderMinim = 0;
    if (state.totalOrder > 0) {
      return {
        ...state,
        totalOrder: state.totalOrder - 1,
        value: state.value - 1,
      };
    }
    return {
      totalOrder: totalOrderMinim,
    };
  }
  return state;
};

export default rootReducer;
