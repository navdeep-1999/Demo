import actionNames from "../utils/actionNames";
import { getAPI, postAPI } from "../utils/api";
import common from "../utils/common";
import endpoint from "../utils/endpoint";

export const updateLoginStatus = (status: boolean) => {
    return (dispatch: Function, getState: any) => {
        dispatch({
            type: actionNames?.AUTH_REDUCER,
            payload: {
                isLoggedIn: status ?? false
            },
        });
    };
};

export const updateNetworkStatus = (status: boolean) => {
    return (dispatch: Function, getState: any) => {
        dispatch({
            type: actionNames?.AUTH_REDUCER,
            payload: {
                isOnline: status ?? false
            },
        });
    };
};

export const updateAuthorizationToken = (token: string = '') => {
    return (dispatch: Function, getState: any) => {
        dispatch({
            type: actionNames?.AUTH_REDUCER,
            payload: { token }
        });
    };
};

export const updateEKey = (eKey: string = '') => {
    return (dispatch: Function, getState: any) => {
        dispatch({
            type: actionNames?.AUTH_REDUCER,
            payload: { eKey }
        });
    };
};

export const updateUser = (user: any) => {
    return (dispatch: Function, getState: any) => {
        dispatch({
            type: actionNames?.USER_REDUCER,
            payload: { ...user },
        });
    };
};

export const clearReducerOnLogout = () => {
    return (dispatch: Function, getState: any) => {
        dispatch({
            type: actionNames?.CLEAR_AUTH_REDUCER,
            payload: {
                isOnline: getState()?.authReducer?.isOnline
            },
        });
        dispatch({
            type: actionNames?.CLEAR_USER_REDUCER,
            payload: {},
        });
    };
};

export const updateLoaderState: any = (status: boolean) => {
    return (dispatch: Function, getState: any) => {
        dispatch({
            type: actionNames?.AUTH_REDUCER,
            payload: {
                isLoading: status ?? false
            },
        });
    };
}

export const validateUser = (payload: any, callBack: Function) => {
    return (dispatch: Function, getState: any) => {
        getAPI(
            endpoint?.validateUser,
            payload,
            (response: any) => {
                console.log('response of validate user', response);
                common?.setEkey(response?.data?.data?.ekey ?? '')
                callBack(response?.data)
            },
            (error: any) => {
                console.log('error of validate user', error)
            }
        )
    }
}

export const login = (payload: any, callBack: Function) => {
    return (dispatch: Function, getState: any) => {
        postAPI(
            endpoint?.login,
            payload,
            (response: any) => {
                console.log('response of login', response);
                common?.setAuthorizationToken(response?.data?.data?.token ?? '')
                dispatch(updateUser(response?.data?.data?.userDetails))
                dispatch(updateLoginStatus(true))
                callBack(response?.data)
            },
            (error: any) => {
                console.log('error of login', error)
            }
        )
    }
}

export const getAttendanceDetails = (payload: any, callBack: Function) => {
    return (dispatch: Function, getState: any) => {
        postAPI(
            endpoint?.attendanceDetails,
            payload,
            (response: any) => {
                console.log('response of get attendance details', response);
                callBack(response?.data)
            },
            (error: any) => {
                console.log('error of get attendance details', error)
            }
        )
    }
}