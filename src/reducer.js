import React from "react";

export const initialState = {
    basket : [],
    user : null,
}

export const getBasketTotal = (basket)=>(basket?.reduce((amount,item)=>item.price + amount,0));

const reducer = (state , action)=>{
    console.log(action);
    switch(action.type){
        case "SET_USER":
            return{
                ...state,
                user : action.user
            }
        case 'ADD_TO_CART':
            //Logic For Adding Items to Basket
            return {
                ...state,
                basket : [...state.basket , action.item],
        };
            
        case 'REMOVE_FROM_CART':
            //Logic for Removing Items From The Basket
            let newBasket = [...state.basket];

            const index = state.basket.findIndex((basketItem)=> basketItem.id === action.id);

            if(index >= 0){
                //items exists in basket, remove it...
                newBasket.splice(index,1);
            }else{
                console.warn(
                    `Can't remove the product (id : ${action.id} as it is not in the cart)`
                )
            }

            return{
                ...state,
                basket : newBasket,

            }
            
        default:
            return state;        
    }
}

export default reducer;