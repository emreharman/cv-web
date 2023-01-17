import actionTypes from "../actions/actionTypes";


const initialState={
    start:false,
    success:false,
    token:"",
    fail:false,
    error:""
}

const loginReducer=(state=initialState,action)=>{
    switch (action.type) {
        case actionTypes.loginActions.LOGIN_START:
            return{
                ...state,start:true
            }
        case actionTypes.loginActions.LOGIN_SUCCESS:
            return{
                ...state,
                start:false,
                success:true,
                token:action.payload
            }            
        case actionTypes.loginActions.LOGIN_FAIL:
            return{
                ...initialState,
                start:false,
                fail:true,
                error:action.payload
            }
        case actionTypes.LOGOUT:
            return initialState
    
        default:
            return state
    }
}
export default loginReducer