var express = require('express');
const http = require('http');
var bodyParser = require('body-parser');
var cors = require('cors');
var FormData = require('form-data');
var app = express();
const axios = require('axios').default;
var configEnv =  require('custom-env').env('development');
const { Console } = require('console');
var fs = require('fs');
	axios.defaults.headers.common['Accept'] = `application/json`;

app.use('/public', express.static(__dirname + '/public'));

const { createProxyMiddleware } = require('http-proxy-middleware');

const server = require('http').createServer(app)
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  }
});

const users =[];
const users2 =[];
io.on("connection",(socket)=>{
	console.log('dfdf')
    socket.on('message',(payload)=>{
      
      users2[payload.user_id] = socket.id;
      console.log(users2)
      io.sockets.emit('sendtoclient',{payload:payload,users:users2});
      var data = axios.post('http://localhost:8000/api/chat_with_selller',payload).then((res)=>{
      return res.data
      }).catch((error)=>{
        return error
      })
  // socket.broadcast.emit('sendtoclient',message)
})
  socket.on('user_connected',(user_id)=>{
  users[user_id] = socket.id;
  io.emit('updateUserStatus',users)
  // console.log(user_id);

  })
  socket.on("disconnect",()=>{
    var i = users.indexOf(socket.id);
    users.splice(i,1,0);
    io.emit('updateUserStatus',users)
    // console.log(users)
  });

})

// server.listen(7000,()=>{
//     console.log('I am listening at port: 7000)');
// })

module.exports = function(app) {
  app.use(
    '/',
    createProxyMiddleware({
      target: 'http://localhost:4000',
      changeOrigin: true,
      secure: false,
    })
  );
};


// app.use(fileUpload())

app.use(bodyParser.urlencoded({ extended: false }));

var corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: true,
  optionsSuccessStatus: 204,
};

// const base_url = 'http://localhost:8000/api/'
const base_url = 'http://3.20.234.60/api'

app.use(express.urlencoded());
app.use(express.json());
 // parse application/json

app.use(cors(corsOptions));

app.use(bodyParser.json());                        


const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/all_products',async function(req,res,next){
	var data = await axios.get(base_url+'/all_products/')
	.then((res)=>{
		return (res.data)
	}).catch((error)=>{
		return false
	})

	return res.json(data)
})

app.post('/login',async function(req,res,next){
	var data = await axios.post(base_url+'/login',req.body).then((res)=>{
		return res.data
	}).catch((error)=>{
		return error
	})
	return res.json(data)
})
app.post('/register',async function(req,res,next){
	var data = await axios.post(base_url+'/register',req.body).then((res)=>{
		return res.data
	}).catch((error)=>{
		return error
	})
	return res.json(data)
})

app.get('/product_details/:id',async function(req,res,next){
	// return res;
	var id = req.params.id;
	var data = await axios.get(base_url+`/product_details/${id}`).then((res)=>{
		return (res.data)
	}).catch((error)=>{
		return false
	})

	return res.json(data)
})

app.get('/get_cart_data/:token',async function(req,res,next){
	var token = req.params.token;
	axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	var data = await axios.get(base_url+`/get_cart_data/`).then((res)=>{
		return (res.data)
	}).catch((error)=>{
		console.log(error)
	})

	return res.json(data)
})

app.get('/get_user_info/:token',async function(req,res,next){
	var token = req.params.token;
	axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	var data = await axios.get(base_url+`/get_user_info/${token}`).then((res)=>{
		return (res.data)
	}).catch((error)=>{
		console.log(error)
	})
	return res.json(data)
})

app.post('/cart_data',async function(req,res,next){
	var token = req.body.token
	delete req.body.token
	axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

	var data = await axios.post(base_url+'/cart_data',req.body)
	.then((res)=>{
		return res.data
	}).catch((error)=>{
		 if (error.response) {
      return (error.response.data);
    }
	})
	return res.json(data)
})

app.post('/update_item/',async function(req,res){
	var token = req.body.token
	delete req.body.token
	axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

	var updateCart = await axios.post(base_url+'/update_cart_item/',req.body).then((result)=>{
		return (result.data)
	}).catch((error)=>{
			console.log(error)
	})

	return res.json(updateCart)
})

app.post('/delete_item/',async function(req,res){
	var id = req.body.itemId
	var token = req.body.token
		axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

	var updateCart = await axios.get(base_url+'/delete_cart_item/'+id).then((result)=>{
		return (result.data)
	}).catch((error)=>{
			console.log(error)
	})

	return res.json(updateCart)
})

app.post('/post_order',async function(req,res,next){
	var data = await axios.post(base_url+'/post_order',req.body)
	.then((res)=>{
		return res.data
	}).catch((error)=>{
		return error
	})
	return res.json(data)
})

app.post('/createOrder',async function(req,res,next){
	var token = req.body.token
	delete req.body.token
	axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	var data = await axios.post(base_url+'/createOrder',req.body)
	.then((res)=>{
		return res.data
	}).catch((error)=>{
		console.log(error)
		return error
	})
	return res.json(data)
})

app.post('/place_bid',async function(req,res,next){
	var token = req.body.token
	axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	var data = await axios.post(base_url+'/place_bid',req.body)
	.then((res)=>{
		return res.data
	}).catch((error)=>{
		console.log(error)
		return error
	})
	return res.json(data)
})
app.post('/add_wishlist',async function(req,res,next){
	var token = req.body.token
	delete req.body.token

	axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	var data = await axios.post(base_url+'/add_wishlist',req.body)
	.then((res)=>{
		return res.data
	}).catch((error)=>{
		console.log(error)
		return error
	})
	return res.json(data)
})
app.post('/get_wishlist',async function(req,res,next){
	var token = req.body.token
	delete req.body.token
	axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	var data = await axios.post(base_url+'/get_wishlist',req.body)
	.then((res)=>{
		return res.data
	}).catch((error)=>{
		console.log(error)
		return error
	})
	return res.json(data)
})

app.post('/delete_wishlist_item/',async function(req,res){
	var id = req.body.wishListId
	var token = req.body.token
		axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	var deleteWishlist = await axios.get(base_url+'/delete_wishlist_item/'+id).then((result)=>{
		return (result.data)
	}).catch((error)=>{
			console.log(error)
	})

	return res.json(deleteWishlist)
})
app.post('/delete_wishlist_item/',async function(req,res){
	var id = req.body.wishListId
	var token = req.body.token
		axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	var deleteWishlist = await axios.get(base_url+'/delete_wishlist_item/'+id).then((result)=>{
		return (result.data)
	}).catch((error)=>{
			console.log(error)
	})

	return res.json(deleteWishlist)
})
app.get('/get_categories/',async function(req,res){
	var get_categories = await axios.get(base_url+'/get_categories/').then((result)=>{
		return (result.data)
	}).catch((error)=>{
			console.log(error)
	})

	return res.json(get_categories)
})
app.get('/get_all_categories/',async function(req,res){
	var get_all_categories = await axios.get(base_url+'/get_all_categories/').then((result)=>{
		return (result.data)
	}).catch((error)=>{
			console.log(error)
	})

	return res.json(get_all_categories)
})
app.post('/get_items_by_category/',async function(req,res){
	var itemName = req.body.itemName
	var get_items_by_category = await axios.get(base_url+`/get_items_by_category/${itemName}`).then((result)=>{
		return (result.data)
	}).catch((error)=>{
			console.log(error)
	})

	return res.json(get_items_by_category)
})
app.post('/shipping_address/',async function(req,res){
		var token = req.body.token
		delete req.body.token
		axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	var billingAddress = await axios.post(base_url+'/shipping_address/',req.body).then((result)=>{
		return (result.data)
	}).catch((error)=>{
			console.log(error)
	})

	return res.json(billingAddress)
})
app.post('/get_shipping_address/',async function(req,res){
	// var user_id = req.body.user_id
	var token = req.body.token
	delete req.body.token
	axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	var getBillingAddress = await axios.get(base_url+`/get_shipping_address/`).then((result)=>{
	return (result.data)
}).catch((error)=>{
		console.log(error)
})

return res.json(getBillingAddress)
})
app.post('/delete_address/',async function(req,res){
	var address_id = req.body.address_id
	var token = req.body.token
	delete req.body.token
	axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	var deleteAddress = await axios.get(base_url+`/delete_address/${address_id}`).then((result)=>{
	return (result.data)
}).catch((error)=>{
		console.log(error)
})

return res.json(deleteAddress)
})
app.post('/get_order_details/',async function(req,res){
	var orederId = req.body.id
	var token = req.body.token
	delete req.body.token
	axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	var deleteAddress = await axios.get(base_url+`/get_order_details/${orederId}`).then((result)=>{
	return (result.data)
}).catch((error)=>{
		console.log(error)
})

return res.json(deleteAddress)
})
app.get('/get_template/',async function(req,res){
	var getTemplate = await axios.get(base_url+`/get_template/`).then((result)=>{
	return (result.data)
}).catch((error)=>{
		console.log(error)
})

return res.json(getTemplate)
})
app.post('/get_template_products/',async function(req,res){
	var template = req.body.template
	var getTemplateProducts = await axios.get(base_url+`/get_template_products/${template}`).then((result)=>{
	return (result.data)
}).catch((error)=>{
		console.log(error)
})

return res.json(getTemplateProducts)
})
app.post('/chat_with_selller/',async function(req,res){
	var token = req.body.token
	delete req.body.token
	var chatWithSeller = await axios.post(base_url+`/chat_with_selller/`,req.body).then((result)=>{
	return (result.data)
}).catch((error)=>{
		console.log(error)
})

return res.json(chatWithSeller)
})
app.post('/get_messages/',async function(req,res){

	var getMessage = await axios.post(`http://localhost:8000/api/get_messages/`,req.body).then((result)=>{
	return (result.data)
}).catch((error)=>{
		console.log(error)
})

return res.json(getMessage)
})