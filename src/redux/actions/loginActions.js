import actionTypes from "./actionTypes"

import axios from "axios"

export const loginStart=()=>{
    return{
        type:actionTypes.loginActions.LOGIN_START
    }
}

export const loginSuccess=(payload)=>{
    return{
        type:actionTypes.loginActions.LOGIN_SUCCESS,
        payload
    }
}

export const loginFail=(payload)=>{
    return{
        type:actionTypes.loginActions.LOGIN_FAIL,
        payload
    }
}

export const logout=()=>{
    return(dispatch)=>{
        localStorage.removeItem("token")
        dispatch({type:actionTypes.loginActions.LOGOUT})
        window.location="http://localhost:3000"
    }
}

export const login = (form)=>{
    return (dispatch)=>{
        dispatch(loginStart())
        axios.post("http://localhost:3004/user/login",form)
        .then(res=>{
            if(res.data.status === 200){
                dispatch(loginSuccess(res.data.token))
                localStorage.setItem("token",res.data.token)
                window.location="http://localhost:3000"
            }
            if(res.data.status === 400){
                dispatch(loginFail(res.data.message))
            }
        })
        .catch(err=>{
            dispatch(loginFail("Server Hatası"))
        })
    }
}