import {Component} from 'react'
import logo from '../../../../image/1.png'

class Logo extends Component {
    render(){
        const{home} = this.props
        return (
            <>
               <div className="custom-logo_col col-12">
                    <div className="header-logo_area">
                        <a onClick={(()=>home())}>
                            <img src={logo} alt="Uren's Logo"/>
                        </a>
                    </div>
                </div>
            </>
        )
    }
}

export default Logo;