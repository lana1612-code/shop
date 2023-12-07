import React from 'react'
import Inputs from '../../shared/Inputs';
import {  useFormik } from 'formik';
import{validationSchemaForget} from './../../shared/Valid.jsx';
import axios from 'axios';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';

export default function EmailForgetPassword() {
    const navigate = useNavigate();
    const initialValues={
      email:'',
     }

     const onSubmit=  (email)=>{
       axios.patch('https://ecommerce-node4.vercel.app/auth/sendcode',email);
      if(true){
        navigate('/auth/forgotPassword');
         toast.success('send code successfully , sheck your email', {
            position: "bottom-center",
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
      }
     } 

    const formik= useFormik(
     { 
      initialValues,
     onSubmit,
     validationSchema :validationSchemaForget,
    })

    const input = [                
     {
        id:'email',
        name:'email',
        type:'name',
        title:'user email',
        value:formik.values.email,

     }
    ];

    const inputs = input.map(
        (inp,index)=>
         < Inputs 
          onBlur={formik.handleBlur} 
          touched={formik.touched} 
          error={formik.errors} 
          onChange={formik.handleChange}  
          key={index} 
          title={inp.title} 
          id={inp.id} 
          name={inp.name} 
          type={inp.type} 
          value={inp.value} />
    );

  return (
    <>
      <div className='container text-center border rounded-5 mt-5 p-5 border-3 border-warning'>
        <h1 className='mb-3 '>Forget Password Page</h1>
        <form onSubmit={formik.handleSubmit}>
         {inputs}
         
         <button type='submit' className='btn btn-warning rounded-4 ' disabled={!formik.isValid} >
           send code
           
           </button>
         </form>
        </div>
        

    </>
  )
}
