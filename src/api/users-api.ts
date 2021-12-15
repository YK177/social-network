import {axiosInstance} from './api-config'

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return axiosInstance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    followUser(userId: number) {
        return axiosInstance
            .post(`follow/${userId}`)
            .then(response => response.data)
    },
    unfollowUser(userId: number) {
        return axiosInstance
            .delete(`follow/${userId}`)
            .then(response => response.data)
    },
}