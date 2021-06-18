const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  value: 1,
  age: 26,
  gendre: {
    l: "laki - laki",
    p: "perempuan",
  },
};

// Reducer
const rootReducer = (store = initialState, action) => {
  if (action.type === "ADD_AGE") {
    return {
      ...store,
      age: store.age + 1,
    };
  }
  if (action.type === "CHANGE_VALUE") {
    return {
      ...store,
      value: store.value + action.newValue,
    };
  }
  return store;
};

// Store
const store = createStore(rootReducer);
console.log("initial state pertama : ", store.getState());

// Subcription
store.subscribe(() => {
  console.log("store change : ", store.getState());
});

// Dispaching action (secara otomatis dicpahing akan memanggil rootReducer dan menjadi action)
store.dispatch({ type: "ADD_AGE" });
store.dispatch({ type: "CHANGE_VALUE", newValue: 12 });
console.log(store.getState());
