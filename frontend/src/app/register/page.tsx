'use client'
import axios from 'axios'
import React from 'react'

const Register = () => {
    const handleSubmit=async (e:any)=>{
        e.preventDefault()
          const {name,mail,pass}=e.target
          const username=name.value
          const password=pass.value
          const email=mail.value
          axios.post('http://localhost:8080/api/register',{username,password,email})
          .then((res:any)=>{
            console.log(res);
          }).catch((err:any)=>{
            console.log(err.message);
            
          })

    }

  return (
    <div className='w-screen h-screen items-center flex justify-center'>
      <form action="" className='flex flex-col gap-4' onSubmit={handleSubmit}>
       <input type="text" id="name"  placeholder='Username' className='p-3 rounded-2xl text-black'/>
       <input type="email" id='mail' placeholder='email' className='p-3 rounded-2xl text-black'/>
       <input type="password" id='pass' placeholder='password' className='p-3 rounded-2xl text-black'/>
       <input type="submit" value="Create Account" className='p-2 cursor-pointer' />
      </form>
    </div>
  )
}

export default Register