import axios from 'axios';
import { useState } from 'react';
import {createContext} from 'react';
import { toast } from 'react-toastify';

export const CartContext = createContext(null);


export function CartContextProvider ({children}){
   
   const addToCartContext  = async (productId)=>{

    try{
       console.log(productId);
       const token = localStorage.getItem('userToken');
        const {data} = await axios.post(`${import.meta.env.VITE_IP_URL}/cart`
        ,{productId}
        ,{headers:{Authorization:`Tariq__${token}`}}
        );
        toast.success('add to cart  success', {
            position: "bottom-center",
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
      return data;

    }catch(error){
        console.log(error);
    }


   }
   let [count,setCount] = useState(0);

  const getCartContext = async ()=>{
    try{
       const token = localStorage.getItem('userToken');
        const {data} = await axios.get(`${import.meta.env.VITE_IP_URL}/cart`
        ,{headers:{Authorization:`Tariq__${token}`}}
        );
       
       setCount(data,count);

        return data;
    }
    catch(err){
        console.log(err);
    }
  }

  const removeCartContext = async (productId)=>{
    try{
        const token = localStorage.getItem('userToken');
         const {data} = await axios.patch(`${import.meta.env.VITE_IP_URL}/cart/removeItem`
         ,{productId},{headers:{Authorization:`Tariq__${token}`}}
         );
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