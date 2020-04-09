import axiosInstance from "../constants/axios"
import { config } from '../constants/config';
import { IUser } from '../reducers/login.reducer';

export const userService = {
    login,
    logout,
};

function login(type: string){
    const requestOptions = {
        
    };
    //return Promise.resolve("https://git.c/asd")
    return axiosInstance.get(`server/login/` + type, {withCredentials: true})
        .then(response => {
            //handle success
            return response.status
        })
        .catch(error => {
           //handle error
            return error as string;
        });
}

function logout() {
    return axiosInstance.post("server/logout");
}