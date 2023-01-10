import React,{useEffect} from "react";


import Header from "../components/Header";

import useIsAuth from "../hooks/isAuth";

import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { getUser } from "../redux/actions/userActions";

import ProfileImage from "../components/ProfileImage";
import ProfileMenu from "../components/ProfileMenu";

const Profile=()=>{
    const {userState}=useSelector(state=>state)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const {data,result}=useIsAuth()
    if(!data && result){
        navigate("/login")
    }
    useEffect(()=>{
        dispatch(getUser())
    },[])
    if(!userState.success) return null
    return(
        <>
            <Header />
            <ProfileImage />
            <ProfileMenu />
        </>
    )
}

export default Profile