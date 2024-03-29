"use client";
import { FetchData } from "@/Redux/axios";
import { axiosInstance } from "@/Redux/AxiosInstance";
import { userData } from "@/Redux/selectors";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const MainAuthprovider = ({ children }: any) => {
  const cookie = getCookie("authcookie");
  const dispatch = useDispatch();
  const data = useSelector(userData);
  const [state, setState] = useState<any>({});
  console.log(data);
  const router=useRouter()
  useEffect(() => {
    dispatch(FetchData() as any);
    async function axio() {
      const res = await axiosInstance.get("/profile");
      setState(res.data);
    }
    axio();
  }, [state]);

  if (state.status == "failure") {
      return <div>{children}</div>;
    } else {
      window.location.href='/chat'
  }
};

export default MainAuthprovider
