import { ADD_TO_CART,
         UPDATE_CART,
         IS_LOGIN,
         LOGIN_CART_UPDATE,
         DELETE_ITEM
        } from '../addToCart/addToCart.action.js'


const addCart = (state,action)=>{
    var {cardData} = state
    var {data} = action
    var cardData = data
    if(!action.data){
        delete state.cardData
        return state;    
    }
    cardData.cart_items.map((value,key)=>{
        if(value.quantity > 1){
            value.isRemove = true
        }
        else{
            value.isRemove = false
        }
        return value
    })

    state.cardData = cardData
    return state
}

const randomNumber = ()=>{
    var min = 1;
   var max = 100;
   var rand =  min + (Math.random() * (max-min));
   return rand;
}

const updateCart = (state,action)=>{
    var {qty} = action
    if(qty < 0){
        // alert(qty)
        removeItem(state,action)
    }
    else{
        addItem(state,action)        
    }
}

const addItem = (state,action) =>{
    var {cardData} = state;
    var {qty,price,itemId,discount} = action
    cardData.amount = cardData.amount + price
    cardData.discounted_price = cardData.discounted_price + discount
    cardData.item_qty = cardData.item_qty + qty
    cardData.total_price = cardData.total_price + (price-discount) 
    cardData.cart_items = cardData.cart_items.map((value,key)=>{
                    if(value.id === itemId){
                        value.quantity = value.quantity + qty;
                        value.total_price = value.total_price + price ;
                        value.isRemove = true ;
                        return value;
                    }
                    else{
                        return value;
                    }
    })
    state.cardData = cardData
    state.randomNumber = randomNumber()
    return state
}

const removeItem = (state,action) =>{
    var {cardData} = state;

    var {qty,price,itemId,discount} = action
    cardData.amount = cardData.amount - price
    cardData.discounted_price = cardData.discounted_price - discount
    cardData.item_qty = cardData.item_qty - qty
    cardData.total_price = cardData.total_price - price 
    cardData.cart_items = cardData.cart_items.map((value,key)=>{
                    if(value.id === itemId){
                        value.quantity = value.quantity - qty;
                        value.total_price = value.total_price - price ;
                        if(value.quantity === 1){
                            value.isRemove = false ;
                        }
                        return value;
                    }
                    else{
                        return value;
                    }
    })
    state.cardData = cardData
    state.randomNumber = randomNumber()
    return state
}

const deleteItem=(state,action)=>{
    var {cardData} = state
    var {itemId} = action
    cardData.cart_items.filter((value,key)=>{
            if(value.id === itemId){
                return value
            }
         })
    state.cardData = cardData
    return state
}

const initialState = {
    cardData: { },
    isLoading:true,
    randomNumber:0
}

export default function cardItems(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            addCart(state,action)
            return {
                ...state,
                isLoading:false
            }
        case UPDATE_CART:
            updateCart(state,action)
            return {
                ...state
            }

        case LOGIN_CART_UPDATE:
            delete state.cardData
            return {
                ...state,
                isLoading:false
            }  
        case DELETE_ITEM:
            deleteItem(state,action)
            return{
                ...state
            }      
            
        default:
            return state
    }


}
