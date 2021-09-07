import {Component} from 'react'
import Registeromponent from './Register.component.js'

class Rgister extends Component{

	state = {
		redirect: false,
		isopen : false
	};
	closeBideModel(){
		this.setState({
			isopen:false
		})
	}

	render(){
		const{isopen} = this.props
		
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
