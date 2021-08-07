import {combineReducers} from 'redux'
import UserDetailsReducer from './User/user.reducer.js'
import cardItems from './addToCart/addToCart.reducer.js'
import product from './product/product.reducer'


export default combineReducers({
    UserDetailsReducer,
    cardItems,
    product
    // ApplyOnlineDetailsReducer
})
