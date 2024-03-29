'use client'
import { FetchData } from '@/Redux/axios'
import { axiosInstance } from '@/Redux/AxiosInstance'
import { userData } from '@/Redux/selectors'
import { ifError } from 'assert'
import { getCookie } from 'cookies-next'
import React, { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Authprovider = ({children}:any) => {
const cookie =getCookie('authcookie')
const dispatch=useDispatch()
const data=useSelector(userData)
const [state,setState]=useState<any>(true)
const [child,setchild]=useState<any>(<div>{children}</div>)

console.log(data);

    useEffect(
        ()=>{
            dispatch(FetchData() as any)
        
                
                axiosInstance.get("/profile").catch(
                    (err)=>{
                        console.log(err.response.status);
                        if(err.response.status==500){
                            setchild(<div>notallowed</div>)
                            setState(false)
                            
                        }
                    }
                )
                
            
        
            
        },[state]
    )
    
    return child
        

}

export default memo( Authprovider)