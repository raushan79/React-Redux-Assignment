import { combineReducers ,legacy_createStore as createStore } from "redux";
import { dataReducer } from "./reducer";


const rootReducer=combineReducers({
    data:dataReducer
})


export const store= createStore(
    rootReducer,
    window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
)