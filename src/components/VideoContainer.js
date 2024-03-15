import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { YOUTUBE_API } from "../utils/constant";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  // console.log(videos);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const apiData = await fetch(YOUTUBE_API);
    const json = await apiData.json();
    setVideos(json.items);
  };

  if (videos.length === 0) {
    return <h1 className="text-[1vw]">Data is Loading</h1>;
  }

  return (
    <div className="pl-5 flex flex-wrap">
      {/* <VideoCard videoInfo={videos[0]}/> */}
      {videos.map((data) => (
        <Link to={"watch?v=" + data.id} key={data.id}>
          <VideoCard videoInfo={data} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
