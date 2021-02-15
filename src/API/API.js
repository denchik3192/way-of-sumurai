
import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        "API-KEY":"eefc7329-c514-4b4f-9909-499b375e6f20"
    },
    withCredentials: true 
    
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get( `users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data )
    },

    follow(userID) {
        return instance.post( `follow/${userID}` )
    },

    unfollow(userID) {
        return instance.delete( `follow/${userID}` )
    },

    getProfile(userId) {
        return instance.get(`profile/` + userId)
    }

}

export const authAPI = {
    me() {
    return instance.get(`auth/me`)
    }

}

// export const getUsers2 = (currentPage = 1, pageSize = 10) => {
//     return instance.get( `follow?page=${currentPage}&count=${pageSize}`)
//     .then(response => response.data)

// }
            
