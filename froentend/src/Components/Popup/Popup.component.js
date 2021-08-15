import {PureComponent} from'react'
import {Nav,Navbar,NavDropdown} from 'react-bootstrap';
import { Modal, Button } from 'antd';

class Popup extends PureComponent{
	
	render(){
		const{isopen,content,handleCancel,title} = this.props
		return(
			<Modal  
	            title={title} 
	            okText="Submit"
	            footer={null}                       
	            visible={isopen}
	            onCancel={handleCancel}
	          >	
	          {content}
	         </Modal>
			)
	}
}

export default Popup;