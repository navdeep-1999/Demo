import { updateLoaderState } from "../action";
import { store } from "../store";
import common from "./common";

const getAPI = (endPoint: any, body: any, successCallback: any, errorCallback: any,) => {
    store?.dispatch(updateLoaderState(true))
    common?.axiosInstance?.get(endPoint, { params: body })
        .then((response: any) => {
            successCallback(response);
            store?.dispatch(updateLoaderState(false))
        })
        .catch((error: any) => {
            errorCallback(error);
            store?.dispatch(updateLoaderState(false))
        })
}

const postAPI = (endPoint: any, body: any, successCallback: any, errorCallback: any,) => {
    store?.dispatch(updateLoaderState(true))
    common?.axiosInstance?.post(endPoint, body)
        .then((response: any) => {
            successCallback(response);
            store?.dispatch(updateLoaderState(false))
        })
        .catch((error: any) => {
            errorCallback(error);
            store?.dispatch(updateLoaderState(false))
        })
}

const putAPI = (endPoint: any, body: any, successCallback: any, errorCallback: any,) => {
    store?.dispatch(updateLoaderState(true))
    common?.axiosInstance?.put(endPoint, body)
        .then((response: any) => {
            successCallback(response);
            store?.dispatch(updateLoaderState(false))
        })
        .catch((error: any) => {
            errorCallback(error);
            store?.dispatch(updateLoaderState(false))
        })
}

const deleteAPI = (endPoint: any, body: any, successCallback: any, errorCallback: any,) => {
    store?.dispatch(updateLoaderState(true))
    common?.axiosInstance?.delete(endPoint, { params: body })
        .then((response: any) => {
            successCallback(response);
            store?.dispatch(updateLoaderState(false))
        })
        .catch((error: any) => {
            errorCallback(error);
            store?.dispatch(updateLoaderState(false))
        })
}

export {
    getAPI,
    postAPI,
    putAPI,
    deleteAPI
}