
export const PRODUCT_DETAILS = "PRODUCT_DETAILS"

export const addProduct =(productDetails)=>{
    return {
        type:PRODUCT_DETAILS,
        productDetails
    }
}