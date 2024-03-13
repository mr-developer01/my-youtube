import React from "react";

const ButtonsList = () => {
  const btn = [
    "All",
    "Music",
    "React routers",
    "computer programming",
    "A. R. Rahman",
    "T-Series",
    "Trailers",
    "Mixrs",
    "Gaming",
    "Music",
    "React routers",
    "computer programming",
    "A. R. Rahman",
    "T-Series",
    "Trailers",
    "Mixrs",
    "Gaming",
  ];
  return (
    <div className="w-full py-6 pl-5 overflow-x-auto no-scrollbar flex items-center gap-5">
      {btn.map((data, index) => (
        <button key={index}
          className={`min-w-fit rounded py-[5px] px-3  ${
            data === "All"
              ? "text-white font-[500]"
              : "text-black font-[500] text-[.8vw]"
          } ${data === "All" ? "bg-[#0F0F0F]" : "bg-[#f0f0f0]"}`}
        >
          {data}
        </button>
      ))}
    </div>
  );
};

export default ButtonsList;
