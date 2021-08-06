import {PureComponent} from "react";
import {connect} from 'react-redux'
import {
    BrowserRouter as Router,Switch,
    Route,
    browserHistory
  } from "react-router-dom";
  import Loader from './Loader'

import HeaderContainer from './containers/HeaderContainer'
import HomeContainer from './containers/HomeContainer'
import Login from './Components/Login/Login.container';
import UserLogin from './Components/Login/UserLogin/UserLogin.container.js';
import HeaderMiddleSection from './Components/Header/HeaderMiddleSection/HeaderMiddleSection.container';
// import HeaderContainer from './Containers/HeaderContainer.js';
import NavbarSection from './Components/Header/NavbarSection/NavbarSection.container';
import SlidebarSection from './Components/Slidebar/SlidebarSection.container';
import CategorySectionComponent from './Components/MainSection/CategorySection/Category.container';
import ShiphingAreaSectionComponent from './Components/MainSection/ShipingArea/ShipingArea.container';
import FooterSectionComponent from './Components/Footer/FooterSection/Footer.container';
import RgisterComponent from './Components/Register/Register.container.js';
import UserRgisterComponent from './Components/Register/UserRegister/UserRegister.container.js';
import ProductComponent from './Components/Product/Products.container';
import ProductDetailsComponent from './Components/Product/ProductDetails/ProductDetails.container.js';

import MyAccount from './Components/MyAccount/MyAccount.container.js'
import Protected from'./Components/ProtectedComponent';
import Logout from './Components/Logout/Logout.js';
import CartComponent from './Components/Cart/Cart.container.js'
import CheckoutComponent from './Components/Checkout/Checkout.container'
import './App.css';


class App extends PureComponent {

  render(){  
    return (
      <>
          <div class="main-wrapper">
            
              <HeaderMiddleSection/>  
              <Route exact path="/">
                <SlidebarSection />
                <ShiphingAreaSectionComponent />
         
                <ProductComponent />               
                </Route>
               <Route exact path="/login" >
                <Login />
                </Route>
                
                <Route exact path="/register">
                    <RgisterComponent />
                </Route>   
                <Route exact path="/user-register">
                    <UserRgisterComponent />
                </Route>
                <Route exact path="/user-login">
                    <UserLogin />
                </Route>  
                <Route exact path="/product-details/:id" render={(props) => <ProductDetailsComponent {...props} /> }>
            
                </Route>
                
                  <Route  exact path="/my-account">
                     <Protected Cmp={MyAccount} />
                  </Route>
                  <Route  exact path="/logout">
                     <Logout />
                  </Route>
                  <Route  exact path="/cart">
                     <CartComponent />
                  </Route>
                
                     <Route  exact path="/checkout">
                      <Protected Cmp={CheckoutComponent} />

                    </Route>
                
                <FooterSectionComponent />                          
           </div>

      </>
    );
  }
}

export default App;