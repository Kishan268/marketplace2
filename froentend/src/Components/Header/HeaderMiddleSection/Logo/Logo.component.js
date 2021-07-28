import {Component} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
class Logo extends Component {
    render(){
        return (
            <>
               <div className="custom-logo_col col-12">
                    <div className="header-logo_area">
                        <a href="index.html">
                            <img src="assets/images/menu/logo/1.png" alt="Uren's Logo"/>
                        </a>
                    </div>
                </div>
            </>
        )
    }
}

export default Logo;