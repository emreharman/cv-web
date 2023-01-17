import axios from "axios";
import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginStart,loginFail,loginSuccess } from "../redux/actions/loginActions";

const useIsAuth=()=>{
    const [data,setData]=useState(null)
    const [result,setResult]=useState(false)
    const dispatch=useDispatch()

    useEffect(()=>{
        const hasToken=localStorage.getItem("token")
        dispatch(loginStart())
        if(!hasToken){
            setResult(true)
            
        }else{
            axios.get(`http://localhost:3004/user/verify-token/${hasToken}`)
            .then(res => {
                if(res.data.status === 200){
                    dispatch(loginSuccess(hasToken))
                    setData(hasToken)
                    setResult(true)
                }
                if(res.data.status === 400){
                    dispatch(loginFail(res.data.message))
                    setResult(true)
                }
            })
            .catch(err=>{
                dispatch(loginFail("Server'da bir hata oluştu"))
                setResult(true)
            })
        }

    },[])

    return {data,result}
}


export default useIsAuth