import React from 'react';
import {Redirect,useHistory,withRouter} from 'react-router-dom';
  const Logout = ()=>{
	const history =useHistory();
        localStorage.clear("token")
      	this.history.push('/'); 
        
     }
 export default withRouter(Logout);    
