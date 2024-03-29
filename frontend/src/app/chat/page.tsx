'use client'
import Message from "@/components/chatBubble";
import ChatForm from "@/components/ChatInput";
import { FetchData } from "@/Redux/axios";
import { userData } from "@/Redux/selectors";
import { deleteCookie, getCookie } from "cookies-next";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";


export default function Chat() {
  // const socket = io("https://chitchatbackend-dev-bqhc.1.sg-1.fl0.io");
const cookie =getCookie('authcookie')
const profile=useSelector(userData)
console.log(profile,"weiufbeuf")
const router=useRouter()
const dispatch=useDispatch()
  // const socket = io("http://localhost:8081",{
  //   extraHeaders: {
  //     Authorization: `Bearer ${cookie}`
  //   }
  // });
  const socket = io("https://chitchatbackend-dev-bqhc.1.sg-1.fl0.io",{
    extraHeaders: {
      Authorization: `Bearer ${cookie}`
    }
  });

  const [arr,setState]=useState([
    {
      message:'no messages yet'
    }
   ])
   console.log(arr);
   
   useEffect(() => {
    dispatch(FetchData() as any)
    socket.on('hello',(msgs)=>{
  
      setState(msgs)
      
    })
    socket.emit('chat message')
  
    return () => {
      socket.off('hello');
    };
  }, []);
 
  
   const handle=(e:any)=>{
    e.preventDefault()
       const msg=e.target.msg.value
       console.log(msg);
       
       socket.emit('chat message',msg,profile._id)
   }
  return (
    <div className=" h-screen flex overflow-auto w-full">
       <div className="w-1/6 h-screen bg-slate-700" >
        <div className="w-full flex justify-center h-1/5 items-center">

         <button className="bg-black p-3 rounded-2xl" onClick={()=>{
          deleteCookie('authcookie')
           router.push('/')
        
        }}>logout</button>
        </div>
      </div> 
      <div className="w-full">
    <div className="  justify-center items-center p-5  overflow-auto h-full w-full ">
      <ul className="overflow-auto h-full w-full  flex flex-col gap-10 ">
        {arr.map((item,index)=>(
         <li key={index} >
          <Message item={item} />
         </li>
        ))}
      </ul>
    </div>
    
    <ChatForm handle={handle}/>
    </div>
    </div>
  );
}
