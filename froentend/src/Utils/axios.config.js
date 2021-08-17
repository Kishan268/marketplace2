import axios from "axios";

/*const axios = Axios.create({
  baseURL: "http://3.20.234.60:4000/",
  changeOrigin: true,

});*/

// axios.interceptors.request.use(
//   async (config) => {
//     const token1 = await localStorage.getItem("token");
//     const token = JSON.parse(token1);
  
//       config.headers.common = {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       };
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );



export default axios;