import React, { createContext, useState } from "react";
import all_product from '../Components/Assets/all_product'


export const ShopContext =createContext(null)

// Cart Function 

const getDefaultCart = () =>{
    let cart = {}

    for (let index = 0; index < all_product.length; index++) {
       
        cart[index] = 0;
    }
    return cart
}

const ShopContextProvider = (props) =>{

    const [cartItems, setCartItems] = useState(getDefaultCart())

    const addToCart = (ItemId) =>{
        setCartItems((prev)=>({...prev,[ItemId]:prev[ItemId]+1}))
        console.log(cartItems);
    }

    const removeFromCart = (ItemId) =>{
        setCartItems((prev)=>({...prev,[ItemId]:prev[ItemId]-1}))
    }

    // Function to get total amount

    const getCartTotalAmount = () =>{
            
        let totalAmount = 0;

        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo =all_product.find((product)=> product.id === Number(item))
                totalAmount += itemInfo.new_price * cartItems[item]
            }
        }
        return totalAmount;
    } 

    // to get Cart Item Count 
    const getCartTotalItem = () =>{
        
        let totalItem =0;

        for(const item in cartItems){
            if(cartItems[item] > 0){
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }

    const contextValue = {getCartTotalAmount, all_product, cartItems, addToCart, removeFromCart, getCartTotalItem}

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider;