import React from "react";

const SmallMenuCard = () => {
  return (
    <div className="w-fit flex flex-col gap-6 cursor-pointer">
      <div className="flex flex-col items-center">
        <i className="ri-home-smile-line text-[1.4vw] font-[100]"></i>
        <p className="mt-[-5px] text-[.6vw]">Home</p>
      </div>
      <div className="flex flex-col items-center">
        <i className="ri-movie-2-line text-[1.4vw] font-[100]"></i>
        <p className="mt-[-5px] text-[.6vw]">Shorts</p>
      </div>
      <div className="flex flex-col items-center">
        <i className="ri-stack-line text-[1.4vw] font-[100]"></i>
        <p className="mt-[-5px] text-[.6vw]">Subscriptions</p>
      </div>
      <div className="flex flex-col items-center">
        <i className="ri-user-line text-[1.4vw] font-[100]"></i>
        <p className="mt-[-5px] text-[.6vw]">You</p>
      </div>
    </div>
  );
};

export default SmallMenuCard;
