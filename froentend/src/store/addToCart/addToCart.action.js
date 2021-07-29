export const ADD_TO_CART="ADD_TO_CART"
export const UPDATE_CART="UPDATE_CART"
export const ALREADY_IN_CART="ALREADY_IN_CART"


export const addToCart =(data)=>{
    console.warn("action",data)
    return {
        type:ADD_TO_CART,
        data:data
    }
}
export const updateCart =(cardData)=>{
    // console.warn("action",data)
    return {
        type:UPDATE_CART,
        cardData:cardData
    }
}

export const alreadyInCart = (cart)=>{
 return {
        type:ALREADY_IN_CART,
        cardData:cart
    }   
}