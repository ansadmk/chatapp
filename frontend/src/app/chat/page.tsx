'use client'
import Message from "@/components/chatBubble";
import ChatForm from "@/components/ChatInput";
import Image from "next/image";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";


export default function Chat() {
  const socket = io("https://chitchatbackend-seven.vercel.app/");
  const [arr,setState]=useState([
    {
      message:'no messages yet'
    }
   ])
   console.log(arr);
   
   useEffect(() => {
    socket.on('hello',(msgs)=>{
      console.log(msgs);
      
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
       
       socket.emit('chat message',msg)
   }
  return (
    <div className=" h-screen flex overflow-auto w-full">
      {/* <div className="w-2/6 h-screen bg-white" >

      </div> */}
      <div className="w-full">
    <div className="  justify-center items-center p-5  overflow-auto h-full w-full ">
      <ul className="overflow-auto h-full w-full  flex flex-col gap-10 ">
        {arr.map((item,index)=>(
         <li key={index} >
          <Message item={item}/>
         </li>
        ))}
      </ul>
    </div>
    
    <ChatForm handle={handle}/>
    </div>
    </div>
  );
}
