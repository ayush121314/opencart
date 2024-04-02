import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
export const LoginSignup = () => {
  const [logtype, setlogtype] = useState("Signup");
  const navigate=useNavigate()
  const [formdet, setformdet] = useState({
    username: "",
    email: "",
    password: "",
  });
  async function login() {
    let responsedata;
    await fetch('http://localhost:4000/login',{
      method:'POST',
      headers:{
          Accept:'application/json',
          'Content-Type':'application/json'
      },
      body:JSON.stringify(formdet),
    
     }).then((resp)=>resp.json()).then((data)=>{responsedata=data})
    
     if(responsedata.success)
     {
        localStorage.setItem('auth-token',responsedata.token)
       window.location.replace("/")
     }
     else
     {
      toast.error(responsedata.errors)
     }
  }
 async function signup() {
  
  let responsedata;
 
    await fetch('http://localhost:4000/signup',{
        method:'POST',
        headers:{
            Accept:'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(formdet),
      
       }).then((resp)=>resp.json()).then((data)=>{responsedata=data})
      
       if(responsedata.success)
       {
          localStorage.setItem('auth-token',responsedata.token)
          window.location.replace("/")
       }
       else
       {
        toast.error(responsedata.errors)
       }
     
  }
  function valuechange(e) {
    setformdet({ ...formdet, [e.target.name]: e.target.value });
   
  }
  return (
    <div className="flex flex-col w-[100%] h-[100vh] bg-[#fce3fe] pt-[100px]">
      <div className="flex self-center flex-col  lg:w-[40%] md:w-[70%] w-[95%] lg:h-[80vh] md:h-[80vh] h-[78vh] bg-white lg:px-[40px] md:px-[40px] px-[15px] py-[60px] gap-[29px]">
        <h1 className="mx-[20px] font-[700] text-2xl">{logtype}</h1>
        {logtype == "Signup" ? (
          <input
            name="username"
            value={formdet.username}
            onChange={valuechange}
            className="h-[92px] w-[100%] lg:pl-[20px] md:pl-[20px] pl-[5px] border-[1px] border-[#c9c9c9] outline-none text-[#5c5c5c] lg:text-[20px] md:text-[22px] py-2 text-[17px]"
            type="text"
            placeholder="Your name"
          ></input>
        ) : (
          <div />
        )}
        <input
          name="email"
          value={formdet.email}
          onChange={valuechange}
          className="h-[92px] w-[100%] lg:pl-[20px] md:pl-[20px] pl-[5px] border-[1px] border-[#c9c9c9] outline-none text-[#5c5c5c] lg:text-[20px] md:text-[22px] py-2 text-[17px]"
          type="email"
          placeholder="Your email"
        ></input>
        <input
          name="password"
          value={formdet.password}
          onChange={valuechange}
          className="h-[92px] w-[100%] lg:pl-[20px] md:pl-[20px] pl-[5px] border-[1px] border-[#c9c9c9] outline-none text-[#5c5c5c] lg:text-[20px] md:text-[22px] py-2 text-[17px]"
          type="password"
          placeholder="Your password"
        ></input>
        <button
          onClick={() => {
            logtype == "Login"?login():signup()
          }}
          className=" w-[100%] active:bg-slate-600 rounded-lg h-[72px] text-white bg-[#ff4141] lg:mt-[20px] md:mt-[20px] mt-[10px] text-[24px] font-[500] cursor-pointer"
        >
          Continue
        </button>
        {logtype == "Signup" ? (
          <p className="text-sm lg:text-lg md:text-lg">
            Already have an account?{" "}
            <button
              onClick={() => {
                setlogtype("Login");
              }}
              className="text-red-700 cursor-pointer"
            >
              Login here
            </button>
          </p>
        ) : (
          <div />
        )}
        {logtype == "Login" ? (
          <p className="text-sm lg:text-lg md:text-lg">
            Don't have a account?{" "}
            <button
              onClick={() => {
                setlogtype("Signup");
              }}
              className="text-red-700 cursor-pointer"
            >
              Create here
            </button>
          </p>
        ) : (
          <div />
        )}

        <div className="flex gap-2 flex-row">
          <div>
            <input
              className="self-start cursor-pointer"
              type="checkbox"
              name=""
              id="h1"
            ></input>
          </div>
          <label className=" cursor-pointer" for="h1">
            By continuing you agree to terms and conditions
          </label>
        </div>
      </div>
    </div>
  );
};
export default LoginSignup;
