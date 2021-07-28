import {Component} from 'react'
import NavbareSectionComponent from './NavbarSection.component';
import {connect} from 'react-redux'

const mapStateToProps = state => ({
    token:state.UserDetailsReducer.token
})
const mapDispatchToProps = dispatch => ({
})

class NavbarSection extends Component{

	componentDidMount(){
		const{token} = this.props
	}
	
	render(){
		const{token} = this.props
		if(token){
			localStorage.setItem('token', token);
		}else{
			
		}
		return (
				<>
					<NavbareSectionComponent
					{...this.state}
					{...this.props}
					/>
				</>
			)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(NavbarSection);