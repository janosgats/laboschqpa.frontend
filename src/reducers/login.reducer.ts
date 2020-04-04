import { userConstants } from "../constants/user.constants";
import { userActions } from "../actions/user.actions";

//Ide kerul a User adatai ahogy backenrol jon vissza
export interface IUser {
  email:string,
  name:string,
  id:string,
  token: string
}

interface ILoginState {
  loggedIn:boolean,
  user: IUser
  //async megvalositashoz h lehessen pl toltokepernyo bejelentkezes kozben
  loggingIn: boolean,
  error: string | null
}

const initialState: ILoginState = {
  loggedIn: false,
  loggingIn: false,
  user:{
    email:"",
    id:"",
    name:"",
    token:""
  },
  error: null
}

export function authenticationReducer(state=initialState, action: userActions): ILoginState {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        ...state,
        loggingIn: true
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        loggedIn: true,
        user: action.payload as IUser,
        error: null
      };
    case userConstants.LOGIN_FAILURE:
      return {
        ...state,
        error: "Login failed: " + action.payload,
        loggingIn: false
      };
    case userConstants.LOGOUT:
      return {
        ...state,
        loggedIn: false,
        user: initialState.user
      };
    default:
      return {
        ...state
      }
  }
}
export default authenticationReducer;