import axios, { AxiosInstance } from 'axios'
import { store } from '../store';
import { updateAuthorizationToken, updateEKey } from '../action';

const axiosInstance: AxiosInstance = axios.create({
    baseURL: 'https://erplead.remserp.com/api/',
    timeout: 30000,
})

const setAuthorizationToken = (token: string) => {
    if (token) {
        axiosInstance.defaults.headers.Authorization = `bearer ${token}`;
        store?.dispatch?.(updateAuthorizationToken(token))
    }
};

const setEkey = (ekey: string) => {
    if (ekey) {
        axiosInstance.defaults.headers.ekey = ekey
        store?.dispatch?.(updateEKey(ekey))
    }
}

export default {
    axiosInstance,
    setAuthorizationToken,
    setEkey
};