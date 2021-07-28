export const SAVE_TOKEN = "SAVE_TOKEN"

export const saveToken =(status)=>{
    // console.log(status)
    return {
        type:SAVE_TOKEN,
        status:status
    }
}

