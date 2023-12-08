import axios from 'axios';
import React, { useState } from 'react'
import {useQuery} from 'react-query';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar,Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './../../../style.css';
import { Link } from 'react-router-dom';
export default function Catogory() {
    
   
    const getCatogory = async ()=>{
        const {data} = await axios.get(`https://ecommerce-node4.vercel.app/categories/active?limit=20`)
        
         return data.categories;
      }
const {data,isLoading} = useQuery('web_catogory',getCatogory);
console.log(data);
   if(isLoading){
    return <h1>pls waite...</h1>;
   }



  return (
    <div className="container position-relative border rounded-5 mt-5 p-5 border-3 border-warning">
   
      <Swiper
      modules={[Navigation, Pagination, Scrollbar,Autoplay]}
      spaceBetween={50}
      slidesPerView={5.5}
      navigation
      pagination={{ 
        clickable: true,
      }}
       loop={true}
       autoplay={
        {
          delay:1000,
        }
       }
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
       
      {data?.length ? data?.map(
        (catogory)=>
         <SwiperSlide key={catogory._id}>
         <Link to={`/products/category/${catogory._id}`}>
         <div className='text-center'>
          
            <img src={catogory.image.secure_url} />
          </div>
          </Link>
          </SwiperSlide>
      )
    :'<h2>no catogory found</h2>'}
    </Swiper>
      
   
      </div>
      
  
  )
}
