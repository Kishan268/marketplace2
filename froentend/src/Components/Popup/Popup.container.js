import {PureComponent} from 'react'
import PopupComponent from './Popup.component.js'

class PopupContainer extends PureComponent{
	state={
		isopen:false
	}

	handleCancel(){
		// const{isopen} = this.props
		this.setState({isopen:false})
	}

	componentWillReceiveProps(nextProps){
		const{isopen} = nextProps
		console.log(nextProps)
		this.setState({isopen:isopen})
	}
	render(){
		return(
			<PopupComponent
				{...this.props}
				{...this.state}
				handleCancel = {this.handleCancel.bind(this)}
				 overlayStyle={{
				    width: "50vw"
				  }}
			/>
			)
	}
}

export default PopupContainer;