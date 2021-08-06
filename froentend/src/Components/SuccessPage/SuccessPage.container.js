import {PureComponent} from 'react';
import SuccessPage from './SuccessPage.component.js'

class SuccessPageContainer extends PureComponent{
	render(){
		return(
				<SuccessPage
					{...this.props}
				/>
			)
	}	
}

export default SuccessPageContainer