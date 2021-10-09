import { Dispatch } from 'react';
import { Action, TOGGLE_THEME } from "../types/themeTypes";

export const onToggle = () => {

    return async (dispatch: Dispatch<Action>) => {

        try {
            dispatch({
                type: TOGGLE_THEME
            })
        } catch (error) {
            console.log('Redux theme error', error);
        }
    }
}