import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import {useQuery} from 'react-query';
import axios from 'axios';
import { CartContext } from '../../context/Context';

export default function Product() {
     const {productsID} = useParams();

     const getProductDeatail = async()=>{
        const {data} = await axios.get(`https://ecommerce-node4.vercel.app/products/${productsID}`);
        console.log(data);
        return data.product;
     }

     const {data,isLoading} = useQuery('get_Product_Detail',getProductDeatail);
     const  {addToCartContext} = useContext(CartContext);

     const addToCart =async(id)=>{
      const response = await addToCartContext(id);
      console.log(response);

     }





     if(isLoading){
        return <h2> Loading </h2>;
     }
  return (
    
    <>
    <div className="container text-center mt-5">
        <div className='row text-center mt-5 border p-5'>
            <div className='col-lg-6'>
           <div className='row text-center' >
        {data?.subImages.map(
            (img)=>
            <div className=' col-lg-4 '>
              <div className=' border border-primary mb-3'>
              <img src={img.secure_url} className='img-fluid w-100' />
              </div>
            </div>
        )}
        
          </div>   
    </div>
    
    <div className='col-lg-6'>
        <h5> name product : {data.name}</h5>   
        <p>price : {data.price} </p>
        <button class='btn btn-outline-dark' onClick={()=>addToCart(data._id)} >add to cart</button>
      
    </div>

    </div>
    </div>
    </>
  )
}
