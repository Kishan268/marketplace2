import {
        SAVE_TOKEN,
        LOGOUT,
        IS_LOGIN
        }  from '../User/user.action.js'

const IsLogin = (state) =>{
    if(localStorage.getItem('token') === null || !localStorage.getItem('token')){
        return state.isLogin = false
    }
    return state.isLogin = true

}

const initialState = {
    token: '',
    isLogin:false
}

export default function UserDetailsReducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_TOKEN:
            // console.warn("reducer1",action.status)
            return {
                ...state,
                token: action.status,
                isLogin:true
            }
        case LOGOUT:
            localStorage.removeItem('token')
            return{
                ...state,
                isLogin:false,
                token:''
            }
        case IS_LOGIN:
            IsLogin(state)
            return{
                ...state,
            }        
        default:
            return state
    }


}

