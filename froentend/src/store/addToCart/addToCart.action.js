import axios from 'axios';
export const ADD_TO_CART="ADD_TO_CART"
export const UPDATE_CART="UPDATE_CART"
export const IS_LOGIN="IS_LOGIN"
export const LOGIN_CART_UPDATE="LOGIN_CART_UPDATE"
export const DELETE_ITEM="DELETE_ITEM"

export const fetchCart = (token) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:4000/get_cart_data/${token}`)
      .then(response => {
        const users = response.data
        dispatch(addToCart(users.data))
      })
      .catch(error => {
      })
  }
}


export const addToCart =(data)=>{
    return {
        type:ADD_TO_CART,
        data
    }
}
export const updateLogoutCart =  () =>{
    return {
        type:LOGIN_CART_UPDATE
    }
}

export const updateCart = ({qty,itemId,price,discount}) =>{
    return{
        type:UPDATE_CART,
        qty,
        itemId,
        price,
        discount
    }
}

export const deleteCartItem = (itemId) =>{
    return{
        type:DELETE_ITEM,
        itemId
    }
}