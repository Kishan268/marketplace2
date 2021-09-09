import {Component} from 'react'
import ToggleDisplay from 'react-toggle-display';
import SearchBarComponent from '../../ItemsSearch/SearchByCategories.container.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
class Categories extends Component {
    timeout = null;
    state = {
      isScrolling: false,
      show: false
    };
    
    componentDidMount() {
      window.addEventListener("scroll", this.onScroll);
    }
    
    componentWillUnmount() {
      window.removeEventListener("scroll", this.onScroll);
    }
  
    onScroll = () => {
      this.setState({ isScrolling: true });
  
      clearTimeout(this.timeout);
  
      this.timeout = setTimeout(() => {
        this.setState({ isScrolling: false });
      }, 3000);
    };
   
      handleClick() {
        this.setState({
          show: !this.state.show
        });
      }
	render(){
        const {categories_data} = this.props
        const categoriesDatas = categories_data ? categories_data.data :''
		return(
				<>
                    <div className="custom-category_col col-12">
                        <div className="category-menu category-menu-hidden">
                      
                            <div className="category-heading" onClick={ () => this.handleClick() } >
                                <h2 className="categories-toggle">
                                    <span>Shop By</span>
                                    <span>Categories</span>
                                </h2>
                            </div>
     
                            <ToggleDisplay if={this.state.show} tag="section">
                                <div id="cate-toggle" className="category-menu-list" >
                           
                                <ul >
                                    <li><Link to={`/Items/all-products`}>Get all product list</Link> </li>

                                   {
                                    categoriesDatas  ? categoriesDatas.map((categoriesData ,index)=>(


                                    <li className="right-menu">

                                        <Link to={`/Items/${categoriesData.catg_name}`}> {categoriesData.catg_name}</Link>
                                        <ul className="cat-mega-menu" >
                                         {
                                            categoriesData ? categoriesData.subcategories.map((subcategory ,index)=>(

                                            <li className="right-menu cat-mega-title">
                                                <Link to={`/Items/${categoriesData.catg_name}`} >{subcategory.catg_name}</Link>
                                               {/* <ul >
                                                   <li><a href="shop-left-sidebar.html">Aluminum Nonstick</a></li>
                                                   <li><a href="shop-left-sidebar.html">Calphalon</a></li>
                                                   <li><a href="shop-left-sidebar.html">Contemporary</a></li>
                                                   <li><a href="shop-left-sidebar.html">Hard-Anodized</a></li>
                                               </ul>*/}
                                            </li>
                                            )):''
                                   }
                                            {/*<li className="right-menu cat-mega-title">
                                                <a href="shop-left-sidebar.html">Battery Indicator</a>
                                                <ul >
                                                    <li><a href="shop-left-sidebar.html">Sanai laptops</a></li>
                                                    <li><a href="shop-left-sidebar.html">Byteflight</a></li>
                                                    <li><a href="shop-left-sidebar.html">EXcaliberPC</a></li>
                                                    <li><a href="shop-left-sidebar.html">Gaming Laptops</a></li>
                                                </ul>
                                            </li>
                                            <li className="right-menu cat-mega-title">
                                                <a href="shop-left-sidebar.html">Remote Starter</a>
                                                <ul >
                                                    <li><a href="shop-left-sidebar.html">Dual Core</a></li>
                                                    <li><a href="shop-left-sidebar.html">Gaming Monitors</a></li>
                                                    <li><a href="shop-left-sidebar.html">GPS Monitors</a></li>
                                                    <li><a href="shop-left-sidebar.html">Heat Shield</a></li>
                                                </ul>
                                            </li>*/}
                                        </ul>
                                    </li>
                                      )):''
                                   }
                                    <li className="rx-parent">
                                        <a className="rx-default">More Categories</a>
                                        <a className="rx-show">Collapse</a>
                                    </li>
                                </ul>

                            </div>
                            </ToggleDisplay>
                               
                        </div>
                   </div>

                </>
			)
	}
}
export default Categories;