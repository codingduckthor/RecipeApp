import { createStore, combineReducers } from "redux";
import favoriteReducer from "../features/favorites/favoriteReducer";

const rootReducer = combineReducers({
  favorites: favoriteReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
