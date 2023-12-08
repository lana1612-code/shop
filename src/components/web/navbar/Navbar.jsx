import React from 'react'
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartContext } from '../../context/Context';
import { useQuery } from 'react-query';

export default function Navbar({user,setUser}) {
  const navigate = useNavigate();
const logout=()=>{
  localStorage.removeItem('userToken');
  setUser(null);
  navigate('/');
  toast.success('By ,Log out success ', {
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
const {count} = useContext(CartContext);
const {getCartContext} =useContext(CartContext);


  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container">
    <a className="navbar-brand" href="#">T-shop</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
       
        <li className="nav-item">
          <Link className="nav-link" to='/'>Home</Link>
        </li>


        <li className="nav-item">
          <Link className="nav-link" to='/catogory' >Categories</Link>
        </li>


        <li className="nav-item">
        <Link className="nav-link" to='/products/:productsID'>Products</Link>
      </li>

      {user&&<li className="nav-item">
        <Link className="nav-link" to={'/cart'}>Card [{count}]</Link>
      </li>}
     
     
      </ul>
      {!user?
      <ul className="navbar-nav">
      <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown
      </a>
      <ul className="dropdown-menu ">
        <li><Link className="dropdown-item" to="/register">register</Link></li>
        <li><hr className="dropdown-divider" /></li>
        <li><Link className="dropdown-item" to="/login">login</Link></li>
      </ul>
    </li>
      </ul>
      :
      <ul className="navbar-nav">
      <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown
      </a>
      <ul className="dropdown-menu ">
        <li><Link className="dropdown-item" to="#">Profile</Link></li>
        <li><hr className="dropdown-divider" /></li>
        <li><Link className="dropdown-item" onClick={logout} >Logout</Link></li>
      </ul>
    </li>
      </ul>}
      
   
    </div>
  </div>
</nav>
  )
}
