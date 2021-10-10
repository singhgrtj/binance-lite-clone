
import { combineReducers } from "redux";
import { themeReducer } from "./themeReducer";

// combined reducers
const rootReducer = combineReducers({
    theme: themeReducer
});

export type ApplicationState = ReturnType<typeof rootReducer>;

export  { rootReducer };