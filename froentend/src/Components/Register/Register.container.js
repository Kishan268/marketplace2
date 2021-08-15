import {Component} from 'react'
import Registeromponent from './Register.component.js'

class Rgister extends Component{

	closeBideModel(){
		this.setState({
			isopen:false
		})
	}

	render(){
		return (
				<>
				<Registeromponent
					{...this.props}
					{...this.state}
					closeBideModel = {this.closeBideModel.bind(this)}
				 />
				</>
		)
	}
}


export default Rgister;
