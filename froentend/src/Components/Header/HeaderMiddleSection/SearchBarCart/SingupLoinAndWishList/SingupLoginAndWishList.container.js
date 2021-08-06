import { Component } from "react";
import {connect} from 'react-redux';

import SingupLoinAndWishListComponent from './SingupLoginAndWishList.component';
import PropTypes from 'prop-types';
import {saveToken} from '../../../../../store/User/user.action'

const mapStateToProps = state => ({
    token:state
})
const mapDispatchToProps = dispatch => ({
    saveToken: state => dispatch(saveToken(state))
})

class SingupLoinAndWishList extends Component{


    render(){
       const{token} = this.props
        return(
            <>
                <SingupLoinAndWishListComponent/>
            </>
        )
    }
}

export default SingupLoinAndWishList