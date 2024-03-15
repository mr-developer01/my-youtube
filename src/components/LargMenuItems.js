import React from "react";
import {Link} from "react-router-dom";

const LargMenuItems = () => {
  return (
    <div className="w-[11vw] pl-5 pb-4 border-b-[1px] border-slate-300">
      <div className="flex items-center gap-4">
        <h2 className="text-[1.2vw]">You</h2>
        <i className="ri-arrow-right-s-line text-[1.2vw] mt-[6px]"></i>
      </div>
      <div className="w-[8vw] rounded-xl pl-[.5vw] bg-[#F2F2F2] mb-[1vh] cursor-pointer flex items-center">
        <i className="ri-home-4-fill text-[1.4vw]"></i>
        <Link to="/"><h3 className="ml-[1.5vw] text-[.9vw] font-[500]">Home</h3></Link>
      </div>
      <div className="w-[8vw] rounded-xl pl-[.5vw] mb-[1vh] hover:bg-[#F2F2F2] cursor-pointer flex items-center">
        <i className="ri-movie-2-line text-[1.1vw]"></i>
        <h3 className="ml-[1.5vw] text-[.8vw] font-[400]">Shorts</h3>
      </div>
      <div className="w-[8vw] rounded-xl pl-[.5vw] mb-[1vh] hover:bg-[#F2F2F2] cursor-pointer flex items-center">
        <i className="ri-stack-line text-[1.1vw]"></i>
        <h3 className="ml-[1.5vw] text-[.8vw] font-[400]">Subcriptions</h3>
      </div>
    </div>
  );
};

export default LargMenuItems;
