const express = require('express');
const app = express();
const http = require('http');
const axios = require('axios').default;

const server = http.createServer(app);

const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  }
});

const users =[];
const users2 =[];
io.on("connection",(socket)=>{
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
server.listen(7000,()=>{
  console.log("server running")
})




// var express = require('express');
// const http = require('http');
// var bodyParser = require('body-parser');
// var cors = require('cors');
// var FormData = require('form-data');
// var app = express();
// const axios = require('axios').default;

// var configEnv =  require('custom-env').env('development');
// const { Console } = require('console');
// var fs = require('fs');
//   axios.defaults.headers.common['Accept'] = `application/json`;

// app.use('/public', express.static(__dirname + '/public'));

// const { createProxyMiddleware } = require('http-proxy-middleware');

// const server = require('http').createServer(app)
// const io = require('socket.io')(server,{
//     cors:{
//         origin:'*',
//     }
// })

// var corsOptions = {
//   origin: '*',
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   preflightContinue: true,
//   optionsSuccessStatus: 204,
// };

// const base_url = 'http://localhost:8000/api'
// // const base_url = 'http://3.20.234.60/api'

// app.use(express.urlencoded());
// app.use(express.json());
//  // parse application/json

// app.use(cors(corsOptions));

// app.use(bodyParser.json());                        


// const port = process.env.PORT || 4000;

// app.listen(port, () => console.log(`Listening on port ${port}`));
// // server.listen(4000,()=>{
// //   console.log("server running")
// // })

// io.on("connection",(socket)=>{
//   console.log("connection");

// socket.on('sendtoserver',(message)=>{
//   console.log(message)
//   io.sockets.emit('sendtoclient',message);

//   // socket.broadcast.emit('sendtoclient',message)
// })
//   socket.on("Desconnect",(socket)=>{
//     console.log("server Desconnected")
//   });

// })

// app.post('/chat_with_user',async function(req,res,next){

//   var dataaaa = axios.post('http://localhost:8000/api/chat_with_user',req.body).then((res)=>{
//   console.log(res.data)
//     return res.data
//   }).catch((error)=>{
//     return error
//   })
//   return res.json(dataaaa)
// })