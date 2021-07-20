
import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "eefc7329-c514-4b4f-9909-499b375e6f20"
    },
    withCredentials: true

});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    follow(userID) {
        return instance.post(`follow/${userID}`)
    },

    unfollow(userID) {
        return instance.delete(`follow/${userID}`)
    },

    getProfile(userId) {
        console.warn('Obsolete method. Please use ProfileAPI object')
        return profileAPI.getProfile(userId);
    }

}

export const profileAPI = {

    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },

    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },

    updateStatus(status) {
        return instance.put(`profile/status`,  {status:status});
    }

}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe })
    },
    logout() {
        return instance.delete(`auth/login`)
    },

}

// export const getUsers2 = (currentPage = 1, pageSize = 10) => {
//     return instance.get( `follow?page=${currentPage}&count=${pageSize}`)
//     .then(response => response.data)

// }

