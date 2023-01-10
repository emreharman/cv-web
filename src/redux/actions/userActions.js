import actionTypes from "./actionTypes";

import axios from "axios";

export const getUser = () => {
  return (dispatch) => {
    dispatch({ type: actionTypes.userActions.FETCH_USER_START });
    axios
      .get("http://localhost:3004/user/get-profile", {
        headers: { token: localStorage.getItem("token") },
      })
      .then((res) => {
        if (res.data.status === 200) {
          dispatch({
            type: actionTypes.userActions.FETCH_USER_SUCCESS,
            payload: res.data.user,
          });
        }
        if (res.data.status === 400) {
          dispatch({
            type: actionTypes.userActions.FETCH_USER_FAIL,
            payload: res.data.message,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: actionTypes.userActions.FETCH_USER_FAIL,
          payload: "Server'da bir Hata oluştu",
        });
      });
  };
};

export const updateUser = (field = "", data = null,callback=()=>{}) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.userActions.UPDATE_USER_START });
    let config={
        headers: {
            token: localStorage.getItem("token")
          }
    }
    if(field === "profileImage"){
        config = {...config,"Content-Type": "multipart/form-data"}
    }
    axios
      .post(
        `http://localhost:3004/user/${
          field === "profileImage" ? "upload-profile-photo" : "update-profile"
        }`,
        data,
        config
      )
      .then((res) => {
        console.log(res);
        if(res.data.status === 200){
            dispatch({type:actionTypes.userActions.UPDATE_USER_SUCCESS,payload:res.data.updatedUser})
            callback()
        }
        if (res.data.status === 400) {
            dispatch({type:actionTypes.userActions.UPDATE_USER_FAIL,payload:res.data.message})
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch({type:actionTypes.userActions.UPDATE_USER_FAIL,payload:"Server'da bir hata oluştu"})
      });
      
  };
  
};
