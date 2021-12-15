import {axiosInstance} from './api-config'

export const profileAPI = {
    getUserProfile(userId: string) {
        return axiosInstance
            .get(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus(userId: string) {
        return axiosInstance
            .get(`status/${userId}`)
            .then(response => response.data)
    },
    updateStatus(status: string) {
        return axiosInstance.put('status', {status})
    },
}