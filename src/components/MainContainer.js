import React from "react";
import ButtonsList from "./ButtonsList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="ml-[1vw] w-screen relative">
      <div className="fixed top-14 bg-white">
        <ButtonsList />
      </div>
      <div className="mt-36">
        <VideoContainer />
      </div>
    </div>
  );
};

export default MainContainer;
