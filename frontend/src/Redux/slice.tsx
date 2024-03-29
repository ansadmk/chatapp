"use client";
import { createSlice } from "@reduxjs/toolkit";
import { FetchData, register } from "./axios";


const slice = createSlice({
  name: "user",
  initialState: {
  userData:{},
  register:{}
  },
  reducers:{},
  extraReducers: (builder) => {
    builder
      
      .addCase(FetchData.fulfilled, (state, action) => {
        state.userData = action.payload.data
      })
      .addCase(register.fulfilled, (state, action) => {
        state.register = action.payload.data
      })
     
      
      
  },
});

export default slice.reducer;
