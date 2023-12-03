import axios from 'axios';
import React, { useState } from 'react'
import {useQuery} from 'react-query';
export default function Catogory() {
    
   
    const getCatogory = async ()=>{
        const {data} = await axios.get(`${import.meta.env.VITE_IP_URL}/categories`)
         return data;
      }
const {data,isLoading} = useQuery('web_catogory',getCatogory);
console.log(data);
   if(isLoading){
    return <div>loading...</div>;
   }
  return (
    <div className="container">
      <div className="row">
      {data?.categories.length ? data?.categories.map(
        (catogory)=><div className='col-lg-4 mb-2' key={catogory._id}>
          <div className='border text-center rounded-5 mx-2 p-5 border-3 border-warning w-100'>
          <h2>{catogory.name}</h2>
          <img src={catogory.image.secure_url} />
          </div>
          
          </div>
      )
      
    :"no catogory found"}
   
      </div>
      
    </div>
  )
}
