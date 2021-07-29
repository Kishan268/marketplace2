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

app.use('/public', express.static(__dirname + '/public'));

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/',
    createProxyMiddleware({
      target: 'http://localhost:4000',
      changeOrigin: true,
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

app.use(express.urlencoded());
app.use(express.json());
 // parse application/json

app.use(cors(corsOptions));

app.use(bodyParser.json());                        


const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/all_products',async function(req,res,next){
	var data = await axios.get('http://127.0.0.1:8000/api/all_products/')
	.then((res)=>{
		return (res.data)
	}).catch((error)=>{
		return false
	})

	return res.json(data)
})

app.post('/login',async function(req,res,next){
	var data = await axios.post('http://127.0.0.1:8000/api/login',req.body).then((res)=>{
		return res.data
	}).catch((error)=>{
		return error
	})
	console.log(data)
	return res.json(data)
})
app.post('/register',async function(req,res,next){
	var data = await axios.post('http://127.0.0.1:8000/api/register',req.body).then((res)=>{
		return res.data
	}).catch((error)=>{
		return error
	})
	console.log(data)
	return res.json(data)
})


app.get('/product_details/:id',async function(req,res,next){
	// return res;
	var id = req.params.id;
	var data = await axios.get(`http://127.0.0.1:8000/api/product_details/${id}`).then((res)=>{
	console.log(res.data);
		return (res.data)
	}).catch((error)=>{
		return false
	})

	return res.json(data)
})
app.get('/getUserInfo/:token',async function(req,res,next){
	// return res;
	var token = req.params.token;
	var data = await axios.get(`http://127.0.0.1:8000/api/get_user_info/${token}`).then((res)=>{
	console.log(res.data);
		return (res.data)
	}).catch((error)=>{
		return false
	})

	return res.json(data)
})
app.get('/get_cart_data/:token',async function(req,res,next){
	var token = req.params.token;
	axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	var data = await axios.get(`http://127.0.0.1:8000/api/get_cart_data/`).then((res)=>{
	console.log(res.data);
		return (res.data)
	}).catch((error)=>{
		return error
	})

	return res.json(data)
})

app.post('/cart_data',async function(req,res,next){
	var token = req.body.token
	delete req.body.token
	axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

	var data = await axios.post('http://127.0.0.1:8000/api/cart_data',req.body)
	.then((res)=>{
		return res.data
	}).catch((error)=>{
		return error
	})
	console.log(data)
	return res.json(data)
})
app.post('/post_order',async function(req,res,next){
	var data = await axios.post('http://127.0.0.1:8000/api/post_order',req.body)
	.then((res)=>{
		return res.data
	}).catch((error)=>{
		return error
	})
	console.log(data)
	return res.json(data)
})