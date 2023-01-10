import { createStore,combineReducers,applyMiddleware } from "redux";

import loginReducer from "./reducers/loginReducer";
import userReducer from "./reducers/userReducer";

import thunk from "redux-thunk";
import logger from "redux-logger";


const rootReducer=combineReducers({
    loginState:loginReducer,
    userState:userReducer
})

const store=createStore(rootReducer,applyMiddleware(thunk,logger))

export default store