import React from 'react'
import Inputs from '../../shared/Inputs';
import {  useFormik } from 'formik';
import{validationSchemaLogin} from './../../shared/Valid.jsx';
import axios from 'axios';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';

export default function Login({saveCurrentUser}) {
    const navigate = useNavigate();
   const initialValues={
  
      email:'',
      password:'',
    
     }

     const onSubmit= async users=>{
      console.log(users);
   
      const {data} = await axios.post(`https://ecommerce-node4.vercel.app/auth/signin`,users);
      if(data.message='success'){
        localStorage.setItem("userToken", data.token);
       
        saveCurrentUser();
        navigate('/');
         toast.success('Login success', {
            position: "bottom-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
      }
      
      console.log(data);
     } 

    const formik= useFormik(
     { 
      initialValues,
     onSubmit,
     validationSchema :validationSchemaLogin,
    })

    const input = [                
     {
        id:'email',
        name:'email',
        type:'name',
        title:'user email',
        value:formik.values.email,

     },                 
     {
        id:'password',
        name:'password',
        type:'password',
        title:'user password',
        value:formik.values.password,
        

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
        <h1 className='mb-3 '>Login Page</h1>
        <form onSubmit={formik.handleSubmit}>
         {inputs}
         <div className='d-flex justify-content-between'>
         <p></p>
         <button type='submit' className='btn btn-warning rounded-4 ' disabled={!formik.isValid} >
           Login
           
           </button>
          <Link to={'/auth/sendcode'}>
           <p >forget password ? </p>
          </Link>
           </div>
         </form>
        </div>
        

    </>
  )
}
