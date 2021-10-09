import { Action, Payload, initialState, TOGGLE_THEME } from "../types/themeTypes";

export const themeReducer = (state: Payload = initialState, action: Action) => {
    switch (action.type) {
        case TOGGLE_THEME:
            if (state.theme === "light") {
                return {
                    ...state,
                    theme: "dark"
                }
            } else {
                return {
                    ...state,
                    theme: "light"
                }
            }

        default:
            return state;
    }
}