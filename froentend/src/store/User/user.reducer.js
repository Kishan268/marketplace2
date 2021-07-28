import {SAVE_TOKEN}  from '../User/user.action.js'

const initialState = {
    token: ''
}

export default function UserDetailsReducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_TOKEN:
            // console.warn("reducer1",action.status)
            return {
                ...state,
                token: action.status
            }
        default:
            return state
    }


}

