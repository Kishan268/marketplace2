import {PureComponent} from 'react';

class RelatedProduct extends PureComponent{

    render(){
        return(
            <div className="card" >
                <div className="card-body" >
                    <h1>Related products</h1>
                        <div class="row">
                            <div class="col-md-6 col-lg-3 mb-5">
                                <div class="">
                                    <div class="view zoom overlay z-depth-2 rounded">
                                        <img class="img-fluid w-100" src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg" alt="Sample" />
                                        <a href="#!">
                                            <div class="mask">
                                                <img class="img-fluid w-100" src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg" />
                                                <div class="mask rgba-black-slight"></div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="pt-4">
                                        <h5>Fantasy T-shirt</h5>
                                        <h6>12.99 $</h6>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
        )
    }
}

export default RelatedProduct;