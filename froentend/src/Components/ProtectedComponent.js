import React,{useState,useEffect} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function ProtectedComponent(props) {
let Cmp=props.Cmp
var history =useHistory();
	
useEffect(()=>{
	if (localStorage.getItem('token')!=null) {
      // toast("Login successfully!");
		  // history.push('./my-account')
    // alert('Login First!')

	}else{
    history.push('./login')
  }
},[])

  return (
    <div >
     	<Cmp />
       <ToastContainer />

    </div>
  );
}

export default ProtectedComponent;
