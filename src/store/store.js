import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { ProgressReducer } from "./importerMain";
import { LoaderReducer } from "./loader";
import { UserReducer } from "./user";

const RootReducer = combineReducers({
  Importer: ProgressReducer,
  Loader: LoaderReducer,
  User: UserReducer,
});
const store = createStore(RootReducer, applyMiddleware(thunk));

export default store;
