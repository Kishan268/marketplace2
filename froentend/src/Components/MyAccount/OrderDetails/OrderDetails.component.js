import {Component} from 'react'

class OrderDetails extends Component{

	render(){
		const {order_details} = this.props
		var orderDetails = order_details.data ? order_details.data.get_order_items : ''
		var data = order_details ? order_details.data :''
        const API_URL ='http://localhost:8000/storage/';
		return(
			<>
	<div class="container-fluid my-5 d-flex justify-content-center">
    <div class="card card-1">
        <div class="card-header bg-white">
            <div class="media flex-sm-row flex-column-reverse justify-content-between ">
                <div class="col my-auto">
                    <h4 class="mb-0">Thanks for your Order,{data ? data.get_user.name:''}<span class="change-color"></span> !</h4>
                </div>
                <div class="col-auto text-center my-auto pl-0 pt-sm-4"> 
                <img class="img-fluid my-auto align-items-center mb-0 pt-3" src="" width="115" height="115" />
                </div>
            </div>
        </div>
        <div class="card-body">
            <div class="row justify-content-between mb-3">
                <div class="col-auto">
                    <h6 class="color-1 mb-0 change-color">Receipt</h6>
                </div>
                <div class="col-auto "> <small>Receipt Voucher : {data?data.invoice_number:''}</small> </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="card card-2">
                    {orderDetails ? orderDetails.map((orderDetail,index)=>(
                        <div class="card-body">
                            <div class="media">
                                <div class="sq align-self-center "> 
                                <img class="img-fluid my-auto align-self-center mr-2 mr-md-4 pl-0 p-0 m-0" src={API_URL+orderDetail.get_product.pro_images[0].doc_path} width="135" height="135" /> </div>
                                <div class="media-body my-auto text-right">
                                    <div class="row my-auto flex-column flex-md-row">
                                        <div class="col my-auto">
                                            <h6 class="mb-0"> {orderDetail.get_product.name}</h6>
                                        </div>
                                        <div class="col-auto my-auto"> <small>Golden Rim </small></div>
                                        <div class="col my-auto"> <small>Size : {orderDetail.get_product.size}</small></div>
                                        <div class="col my-auto"> <small>Qty : {orderDetail.quantity}</small></div>
                                        <div class="col my-auto">
                                            <h6 class="mb-0">$ {orderDetail.get_product.discounted_price}</h6>.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr class="my-3 " />
                            <div class="row">
                                <div class="col-md-3 mb-3"> <small> Track Order <span><i class=" ml-2 fa fa-refresh" aria-hidden="true"></i></span></small> </div>
                                <div class="col mt-auto">
                                    <div class="progress my-auto">
                                        <div class="progress-bar progress-bar rounded" style={{width: "62%"}} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div class="media row justify-content-between ">
                                        <div class="col-auto text-right"><span> <small class="text-right mr-sm-2"></small> <i class="fa fa-circle active"></i> </span></div>
                                        <div class="flex-col"> <span> <small class="text-right mr-sm-2">Out for delivary</small><i class="fa fa-circle active"></i></span></div>
                                        <div class="col-auto flex-col-auto"><small class="text-right mr-sm-2">Delivered</small><span> <i class="fa fa-circle"></i></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )):''
                }
                    </div>
                </div>
            </div>
            
            <div class="row mt-4">
                <div class="col">
                    <div class="row justify-content-between">
                        <div class="col-auto">
                            <p class="mb-1 text-dark"><b>Order Details</b></p>
                        </div>
                        <div class="flex-sm-col text-right col">
                            <p class="mb-1"><b>Total</b></p>
                        </div>
                        <div class="flex-sm-col col-auto">
                            <p class="mb-1">$ {data?data.amount:''}</p>
                        </div>
                    </div>
                    <div class="row justify-content-between">
                        <div class="flex-sm-col text-right col">
                            <p class="mb-1"> <b>Discount</b></p>
                        </div>
                        <div class="flex-sm-col col-auto">
                            <p class="mb-1">$ {data?data.discounted_price:''}</p>
                        </div>
                    </div>
                    
                    <div class="row justify-content-between">
                        <div class="flex-sm-col text-right col">
                            <p class="mb-1"><b>Delivery Charges</b></p>
                        </div>
                        <div class="flex-sm-col col-auto">
                            <p class="mb-1">Free</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row invoice ">
                <div class="col">
                    <p class="mb-1"> Order Number : {data?data.invoice_number:''}</p>
                    <p class="mb-1">Order Date :{data?data.created_at:''}</p>
                    <p class="mb-1">Recepits Voucher:{data?data.invoice_number:''}</p>
                </div>
            </div>
        </div>
        <div class="card-footer">
            <div class="jumbotron-fluid">
                <div class="row justify-content-between ">
                    <div class="col-sm-auto col-auto my-auto">
                    <img class="img-fluid my-auto align-self-center " src="" width="115" height="115" /></div>
                    <div class="col-auto my-auto ">
                        <h2 class="mb-0 font-weight-bold">TOTAL PAID</h2>
                    </div>
                    <div class="col-auto my-auto ml-auto">
                        <h1 class="display-3 ">$ {data?data.total_price:''}</h1>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</div>
			</>
		)
	}
}
export default OrderDetails