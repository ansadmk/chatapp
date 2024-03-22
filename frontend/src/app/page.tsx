'use client'
import Message from "@/components/chatBubble";
import ChatForm from "@/components/ChatInput";
import Image from "next/image";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";


export default function Home() {
  const socket = io("http://localhost:8080");
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
      // BAD: this will remove all listeners for the 'foo' event, which may
      // include the ones registered in another component
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
    <div className="">
    <div className="  justify-center items-center p-5">
      <ul className="overflow-auto h-1/3 flex flex-col gap-10">
        {arr.map((item)=>(
         <li>
          <Message item={item}/>
         </li>
        ))}
      </ul>
    </div>
    <ChatForm handle={handle}/>
    </div>
  );
}
