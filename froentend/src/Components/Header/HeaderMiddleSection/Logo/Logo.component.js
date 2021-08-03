import {Component} from 'react'

class Logo extends Component {
    render(){
        const{home} = this.props
        return (
            <>
               <div className="custom-logo_col col-12">
                    <div className="header-logo_area">
                        <a onClick={(()=>home())}>
                            <img src="assets/images/menu/logo/1.png" alt="Uren's Logo"/>
                        </a>
                    </div>
                </div>
            </>
        )
    }
}

export default Logo;