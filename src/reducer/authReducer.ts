import actionNames from "../utils/actionNames";

const initialState = { isLoggedIn: false }

export const authReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case actionNames.AUTH_REDUCER:
            return { ...state, ...action.payload }
        case actionNames.CLEAR_AUTH_REDUCER:
            return { ...action.payload }
        default:
            return state;
    }
}