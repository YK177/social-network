import {axiosInstance} from './api-config'

export const profileAPI = {
    getUserProfile(userId: number) {
        return axiosInstance
            .get(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus(userId: number) {
        return axiosInstance
            .get(`profile/status/${userId}`)
            .then(response => response.data)
    },
    updateStatus(status: string) {
        return axiosInstance
            .put('profile/status', {status})
    },
}