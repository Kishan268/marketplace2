import { Component } from "react";
import Logo from './Logo.component';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
  } from "react-router-dom";

class LogoContainer extends Component{

    home(){
        this.props.history.push('/')
    }
    render(){
        return(
            <Logo
                {...this.props}
                home = {this.home.bind(this)}
            />
        )
    }
}

export default withRouter(LogoContainer);