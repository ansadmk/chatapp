'use client'
import axios from 'axios'
import React from 'react'

const Login = () => {
    const handleSubmit=async (e:any)=>{
        e.preventDefault()
          const {mail,pass}=e.target
          const password=pass.value
          const email=mail.value
          try {
            const res=await axios.post('https://chitchatbackend-seven.vercel.app/api/login',{password,email},{withCredentials:true})
            console.log(res);
            
          } catch (error:any) {
            console.log(error.message);
            
          }
          
         

    }

  return (
    <div className='w-screen h-screen items-center flex justify-center'>
      <form action="" className='flex flex-col gap-4' onSubmit={handleSubmit}>
       <input type="email" id='mail' placeholder='email' className='p-3 rounded-2xl text-black'/>
       <input type="password" id='pass' placeholder='password' className='p-3 rounded-2xl text-black'/>
       <input type="submit" value="Create Account" className='p-2 cursor-pointer' />
      </form>
    </div>
  )
}

export default Login