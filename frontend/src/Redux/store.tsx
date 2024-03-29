"use client"
const { configureStore } = require("@reduxjs/toolkit");
import reduce from "./slice"

const stores=configureStore({
    reducer:{
        items:reduce, 
    },
    devTools:true,
    
})

export const store=stores