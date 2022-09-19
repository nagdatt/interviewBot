import { createStore } from "redux";
import rootReducer from "./Dukan/reducers/index";
const store=createStore(rootReducer);

export default store;