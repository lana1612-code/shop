import React from 'react'
import Inputs from '../../shared/Inputs';
import {  useFormik } from 'formik';
import{validationSchema} from './../../shared/Valid.jsx';
import axios from 'axios';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Register() {
   const initialValues={
      userName:'',
      email:'',
      password:'',
      image:''
     }

     const onSubmit= async user=>{
      console.log(user);
      const formData = new FormData();
      formData.append('userName', user.userName);
      formData.append('email', user.email);
      formData.append('password', user.password);
      formData.append('image', user.image);
      const {data} = await axios.post(`https://ecommerce-node4.vercel.app/auth/signup`,formData);
      if(data.message='success'){
         toast.success('create acounte success , check your email', {
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
     validationSchema,
    })

    const handelData = (event)=>{
      formik.setFieldValue('image',event.target.files[0]);
    }

    const input = [
       {
        id:'userName',
        name:'userName',
        type:'text',
        title:'user name',
        value:formik.values.userName,
     },                 
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
        

     },                 
     {
        id:'image',
        name:'image',
        type:'file',
        title:'user image',
        onChange:handelData,
        

     }
    ];

    const inputs = input.map(
        (inp,index)=>
         < Inputs 
          onBlur={formik.handleBlur} 
          touched={formik.touched} 
          error={formik.errors} 
          onChange={inp.onChange || formik.handleChange}  
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
        <h1 className='mb-3 '>create acount</h1>
        <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
         {inputs}
         <button type='submit' class='btn btn-warning rounded-4' disabled={!formik.isValid} > Register</button>
         </form>
        </div>
        

    </>
  )
}
