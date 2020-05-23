import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
const mainReducer = combineReducers({
  form: formReducer,
});

const store = createStore(mainReducer);
export default store;
