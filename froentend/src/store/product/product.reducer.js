import { PRODUCT_DETAILS } from '../product/product.action';



const initialState = {
    productDetails: { },
    randomNumber:0
}

export default function product(state = initialState, action) {

switch (action.type) {

   case PRODUCT_DETAILS:
       var {productDetails} = action
       return {
           ...state,
           productDetails
       }
   
   default:
       return state
}


}
