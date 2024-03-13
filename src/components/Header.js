import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
    const dispatch = useDispatch()
  return (
    <div className="px-5 py-4 fixed w-full bg-white flex items-center justify-between">
      <div className="flex gap-[1vw] items-center cursor-pointer">
        <i className="ri-menu-line text-[1.2vw]" onClick={() => {
            dispatch(toggleMenu())
        }}></i>
        <img src="images/yt.png" alt="youtube-logo" className="w-[6vw]" />
      </div>
      <div className="rounded-[50px] border-[1px] border-slate-400 pr-3 flex gap-2">
        <input
          type="text"
          className="w-[25vw] bg-slate-100 outline-0 pl-5 rounded-l-[50px]"
        />
        <i className="ri-search-line text-3xl font-[100] opacity-70"></i>
      </div>
      <div className="flex items-center gap-[2vw]">
        <i className="ri-video-add-line text-xl"></i>
        <div><i className="ri-notification-3-line text-xl"></i><sup>1</sup></div>
        <img src="https://images.unsplash.com/photo-1710188801399-f37fed6d7c58?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profile-pic" className="w-8 h-8 rounded-full"/>
      </div>
    </div>
  );
};

export default Header;
