import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'b44c493a-a90f-4242-9a95-17cc58fddd62',
    },
    withCredentials: true,
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    followUser(userId: number) {
        return instance
            .post(`follow/${userId}`)
            .then(response => response.data)
    },
    unfollowUser(userId: number) {
        return instance
            .delete(`follow/${userId}`)
            .then(response => response.data)
    },
}

export const authAPI = {
    authMe() {
        return instance
            .get('auth/me')
            .then(response => response.data)
    }
}

export const profileAPI = {
    getUserProfile(userId: string) {
        return instance
            .get(`profile/${userId}`)
            .then(response => response.data)
    }
}