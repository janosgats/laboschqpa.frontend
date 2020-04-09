import { userConstants } from "../constants/user.constants";
import { userService } from "../services";
import { history } from "../helpers/history";
import { IUser } from "../reducers/login.reducer";
import dispatch, { ThunkAction } from "redux-thunk";
import { RootState } from "../reducers";
import { Redirect } from "react-router";


export type userActions = ILogin | ILoginSuccess | ILoginFailure | ILogout;


export interface ILogin{
    type: typeof userConstants.LOGIN_REQUEST,
    payload: {}
}

export interface ILoginSuccess{
    type: typeof userConstants.LOGIN_SUCCESS,
    payload: IUser 
}

export interface ILoginFailure{
    type: typeof userConstants.LOGIN_FAILURE,
    payload: string
}

export interface ILogout {
    type: typeof userConstants.LOGOUT,
    payload: {}
}

export interface IRegister{
    type: typeof userConstants.REGISTER_REQUEST,
    payload: { username:string, pasword:string }
}

export interface IRegisterSuccess {
    type: typeof userConstants.REGISTER_SUCCESS,
    payload: {}
}

export interface IRegisterFailure{
    type: typeof userConstants.REGISTER_FAILURE,
    payload: string
}

export const login = (type: string): ThunkAction<void, RootState, unknown, ILogin> => async dispatch => {  

    dispatch({
        type: userConstants.LOGIN_REQUEST,
        payload: {}
    })

    const response = await userService.login(type);

    if(response === 200){
        dispatch( {
            type: userConstants.LOGIN_SUCCESS,
            payload:{}
        })
    } else {
        dispatch( {
            type:userConstants.LOGIN_FAILURE,
            payload:{}
        })
    }
};

function logout() : userActions {
    userService.logout();
    return { type: userConstants.LOGOUT, payload:"" };
}