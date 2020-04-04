import { authenticationReducer } from './login.reducer'
import { combineReducers } from 'redux'

//itt kel bekotni a reducereket
export const rootReducer = combineReducers({    
    auth: authenticationReducer
});

export type RootState = ReturnType<typeof rootReducer>