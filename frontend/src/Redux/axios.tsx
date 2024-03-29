import { createAsyncThunk } from "@reduxjs/toolkit";

import {axiosInstance} from "./AxiosInstance";
import axios from "axios";




export const FetchData = createAsyncThunk(
    'GET/DATA',
    async ()=>{
        const res = await axiosInstance.get("/profile")
        return res.data
    }
)
export const register = createAsyncThunk(
    'POST/register',
    async (data:any)=>{
        const res = await axios.post("http://chitchatbackend-seven.vercel.app/api/anonymous",data,{withCredentials:true})
        return res.data
    }
)


