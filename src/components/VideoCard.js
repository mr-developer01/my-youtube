import React from "react";

const VideoCard = ({ videoInfo }) => {
  const { snippet, statistics } = videoInfo;
  const { thumbnails, title, channelTitle } = snippet;
  const vidImg = thumbnails.medium.url;
  // console.log(videoInfo);
  return (
    <div className="w-[18vw] h-[30vh] mr-[3.4vw] mb-8 flex flex-col">
      <img
        src={vidImg}
        alt="video_img"
        className="w-full rounded-xl hover:rounded-none"
      />
      <h3 className="h-[4vh] mt-1 text-[1vw] font-[500] leading-none text-ellipsis overflow-hidden">
        {title}
      </h3>
      <h3 className="mt-1">{channelTitle}</h3>
      <h3>{statistics.viewCount} views</h3>
    </div>
  );
};

export default VideoCard;
