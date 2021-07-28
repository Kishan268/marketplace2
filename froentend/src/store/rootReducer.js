import {combineReducers} from 'redux'
import UserDetailsReducer from './User/user.reducer.js'
import cardItems from './addToCart/addToCart.reducer.js'


export default combineReducers({
    UserDetailsReducer,
    cardItems
    // ApplyOnlineDetailsReducer
})
