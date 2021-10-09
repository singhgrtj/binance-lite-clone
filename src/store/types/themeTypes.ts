export interface Payload {
    theme: string;
}

export const TOGGLE_THEME = "TOGGLE_THEME";

export interface Action {
    type: typeof TOGGLE_THEME;
}

export const initialState: Payload = {
    theme: 'light',
}