
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
        return instance.post( `https://social-network.samuraijs.com/api/1.0/follow/${userID}` )
    },

    unfollow(userID) {
        return instance.delete( `https://social-network.samuraijs.com/api/1.0/follow/${userID}` )
    }

}


// export const getUsers2 = (currentPage = 1, pageSize = 10) => {
//     return instance.get( `follow?page=${currentPage}&count=${pageSize}`)
//     .then(response => response.data)

// }
            
