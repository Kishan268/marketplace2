import React from 'react';
import {Redirect,useHistory,withRouter} from 'react-router-dom';
  const Logout = ()=>{
	const history =useHistory();
        localStorage.clear("token")
      	history.push('/'); 
        
     }
 export default withRouter(Logout);    
