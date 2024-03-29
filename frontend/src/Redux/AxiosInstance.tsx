import axios from 'axios';
import { getCookie } from 'cookies-next';




const cookie =getCookie('authcookie')
//  export const axiosInstance = axios.create({
  
//     baseURL: 'http://localhost:8080/api',
//      headers:{
//        Authorization:`bearer ${cookie}`
//      }
//   })
export const axiosInstance = axios.create({
  
  baseURL: 'http://chitchatbackend-seven.vercel.app/api',
   headers:{
     Authorization:`bearer ${cookie}`
   }
})


  
  
  
  
  
  
  
  
  

