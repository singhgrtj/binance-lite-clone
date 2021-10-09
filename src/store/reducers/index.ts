
import { combineReducers } from "redux";
import { themeReducer } from "./themeReducer";

const rootReducer = combineReducers({
    theme: themeReducer
});

export type ApplicationState = ReturnType<typeof rootReducer>;

export  { rootReducer };