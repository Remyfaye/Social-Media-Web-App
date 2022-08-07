import {createContext, useReducer} from 'react'

import AuthReducer from './AuthReducer'

const INITIAL_STATE = {
    user:{       
_id : '62d8dd2ecbcf2e82cc20116e',
username: "alex",
email: "alex@gmail.com",
password: "$2b$10$Cd13rrUUgwDNSlhnu8gkC.vcdt0py1X7W0MMADpHpEJIQGldvZORm",
following: [],
profileimg:"persons/4.jpeg",
isAdmin: false,

},
    isFetching:false,
    error:false
}

export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

    return(
        <AuthContext.Provider 
        value={{
            user:state.user,
            isFetching:state.isFetching,
            error:state.error,
            dispatch
        }}>
            {children}
        </AuthContext.Provider >
    )
}