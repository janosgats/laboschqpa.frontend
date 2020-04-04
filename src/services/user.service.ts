import axios from 'axios'
import { config } from '../constants/config';
import { IUser } from '../reducers/login.reducer';

export const userService = {
    login,
    logout,
    register,
};

function login(username:string, password:string ){
    const requestOptions = {
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    };
    return Promise.resolve("asd")
    return axios.post<string | IUser>(`${config.apiUrl}users/login`, requestOptions)
        .then(response => {
            //handle success
            if(response.status === 200){
                // store user details in state and jwt token in local storage to keep user logged in between page refreshes            
                localStorage.setItem('token', JSON.stringify((response.data as IUser).token));
                return response.data as IUser;
            }
            else {
                return response.data as string;
            }
        })
        .catch(error => {
           //handle error
            return error as string;
        });
}

function logout() {
    // remove tpken from local storage to log user out
    localStorage.localStorage.setItem('token',"");
}

function register(userName: string, password: string) {
    const requestOptions = {
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({userName, password})
    };

     return axios.post(`${config.apiUrl}/users/register`, requestOptions)
        .then(response => {
            //vagy valami hasonlo
            if(response.status === 200)
                return "Success"
            else
                return "Error"
        })
        .catch(error => {
            return "Error"
        });
}