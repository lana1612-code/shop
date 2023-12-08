import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import {createContext} from 'react';
import { toast } from 'react-toastify';

export const CartContext = createContext(null);


export function CartContextProvider ({children}){
    let [count,setCount] = useState(0);
  
  const getCartContext = async ()=>{
    try{
       const token = localStorage.getItem('userToken');
        const {data} = await axios.get(`https://ecommerce-node4.vercel.app/cart`
        ,{headers:{Authorization:`Tariq__${token}`}}
        );
        setCount(data.count);
        console.log(data.count);
        return data;
    }
    catch(err){
        console.log(err);
    }
  }

  const addToCartContext  = async (productId)=>{

    try{
       console.log(productId);
       const token = localStorage.getItem('userToken');
        const {data} = await axios.post(`https://ecommerce-node4.vercel.app/cart`
        ,{productId}
        ,{headers:{Authorization:`Tariq__${token}`}}
        );
        toast.success('add to cart  success', {
            position: "bottom-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
            getCartContext();
      return data;

    }catch(error){
        console.log(error);
    }


   }

  const removeCartContext = async (productId)=>{
    try{
        const token = localStorage.getItem('userToken');
         const {data} = await axios.patch(`https://ecommerce-node4.vercel.app/cart/removeItem`
         ,{productId},{headers:{Authorization:`Tariq__${token}`}}
         );
         toast.success('remove from cart  success', {
            position: "bottom-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });


         return data;
     }
     catch(err){
         console.log(err);
     }
  }


    return <CartContext.Provider value = {{addToCartContext,getCartContext,removeCartContext,count}}>
    {children}
    </CartContext.Provider>
}
/*
 
*/