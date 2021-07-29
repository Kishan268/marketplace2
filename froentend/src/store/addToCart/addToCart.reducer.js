import { ADD_TO_CART,
         UPDATE_CART,
         ALREADY_IN_CART
        } from '../addToCart/addToCart.action.js'


const addCart = (state,action)=>{
    var {cardData} = state

    // const {data} = action
    // var isDuplicate = false
    // var cartData = cardData
    // if(cardData.length > 0){
    //     cardData.map((value,key)=>{            
    //         if(value.pro_id === data.pro_id){
    //             isDuplicate = true
    //                value.qty = !value.qty ? 1 : value.qty+1;
    //           }
    //     })
    //     if(!isDuplicate){
    //         console.log('top',cartData)
    //         cartData.push(data)
    //         console.log('bottam',cartData)
    //     }
    // }else{
    //     console.log('out',data)
    //     cartData.push(data)
    // }
    state.cardData = action.data
    // console.log(cartData)
    // console.log(state)
}
const initialState = {
    cardData: {}
}
export default function cardItems(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            // console.warn("reducer",action)
            addCart(state,action)
            return {
                ...state,
            }
        case UPDATE_CART:
            // console.warn("reducer",action)
            return [
                ...state,
                action.cardData
            ]
        case ALREADY_IN_CART:
            return{

            }    
        default:
            return state
    }


}
