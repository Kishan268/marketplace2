export const SAVE_TOKEN = "SAVE_TOKEN"
export const LOGOUT = "LOGOUT"
export const IS_LOGIN = "IS_LOGIN"

export const saveToken =(status)=>{
    return {
        type:SAVE_TOKEN,
        status:status
    }
}

export const Logout =(status)=>{
    return {
        type:LOGOUT
    }
}

export const CheckLogin = ()=>{
    return{
        type:IS_LOGIN
    }
}
