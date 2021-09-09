import {Component} from 'react';
import HeaderCartComponent from '../../../CartHeader/CartHeader.container'
import LogoComponent from '../../Logo/Logo.container.js'
import CategoriesComponent from '../../../Categories/Categories.container.js'
class SearchBar extends Component {
    
    render(){
        const {all_categories_data ,token,itemsSearch} = this.props
        const categoriesDatas = all_categories_data ? all_categories_data.data :''

        return(
            <>
                <div className="header-middle_area">
                 <div className="container-fluid">
                    <div className="row">
                        <LogoComponent />
                        <CategoriesComponent />
                        <div className="custom-search_col col-12">
                            <div className="hm-form_area">
                                <form onSubmit={((event)=>itemsSearch(event))} className="hm-searchbox">
                                    <select className="nice-select select-search-category" name="category_name" /*onChange={ (val) => this.changeCategory(val.target.value) }*/ >
                                        <option value="0">All Categories</option>
                                        <option value="all-products">Get all products</option>

                                        {
                                            all_categories_data ? categoriesDatas.map((categoriesData,index)=>(

                                            <option value={categoriesData.catg_name}>{categoriesData.catg_name}</option>

                                            )):'Categories Not available '
                                        }
                                       
                                    </select>
                                    <input type="text" placeholder="Enter your search key ..."
                                        name="itemsName"
                                     />
                                    <button className="header-search_btn" type="submit">
                                    <i className="ion-ios-search-strong"><span>Search</span></i></button>
                                </form>

                            </div>
                     </div>
                        <HeaderCartComponent />
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default SearchBar;