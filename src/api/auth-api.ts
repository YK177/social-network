import {axiosInstance} from './api-config'

export const authAPI = {
    authMe() {
        return axiosInstance
            .get('auth/me')
            .then(response => response.data)
    }
}