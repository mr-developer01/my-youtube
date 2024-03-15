import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";

const Header = () => {
  const [focus, setFocus] = useState(false)
  const [searchQry, setSearchQry] = useState("");
  const [dataForsearch, setDataForSearch] = useState([]);
  const dispatch = useDispatch();
  console.log(dataForsearch);
  useEffect(() => {
    // Debouncing Searching
    const timer = setTimeout(() => getSearchSuggestion(), 200);

    return () => {
      clearTimeout(timer);
      // console.log("Destroying timer");
    };
  }, [searchQry]);

  const getSearchSuggestion = async () => {
    const data = await fetch(`${YOUTUBE_SEARCH_API}${searchQry}`);
    const str = await data.text();
    const arr = await JSON.parse(
      str.substring(str.indexOf("["), str.indexOf("])") + 1)
    );
    const dummy = arr[1];
    const qryData = dummy.map((qd) => {
      return qd[0];
    });
    setDataForSearch([...qryData]);
    // console.log(searchQry);
  };
  return (
    <div className="z-10 px-5 py-4 fixed w-full bg-white flex items-center justify-between">
      <div className="flex gap-[1vw] items-center cursor-pointer">
        <i
          className="ri-menu-line text-[1.2vw]"
          onClick={() => {
            dispatch(toggleMenu());
          }}
        ></i>
        <img src="images/yt.png" alt="youtube-logo" className="w-[6vw]" />
      </div>
      <div>
        <div className="w-[28vw] rounded-[50px] border-[1px] border-slate-400 pr-3 flex justify-between gap-2">
          <input
            type="text"
            className="w-[85%] bg-slate-100 outline-blue-500 pl-5 rounded-l-[50px]"
            value={searchQry}
            onChange={(e) => setSearchQry(e.target.value)}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          />
          {searchQry !== "" ? (
            <i
              className="ri-close-line text-3xl font-[100] opacity-70"
              onClick={() => {
                setSearchQry("");
              }}
            ></i>
          ) : null}
          <i className="ri-search-line text-3xl font-[100] opacity-70"></i>
        </div>
        {focus && (
          <div className="w-[28vw] rounded-md bg-white absolute px-5 py-4">
            {dataForsearch.map((data, index) => (
              <h4
                key={index}
                className="hover:bg-[#F1F5F9] text-[1vw] font-[400] opacity-80 py-1 pl-2 rounded-md mb-3"
                onClick={() => {
                  setSearchQry(data)
                  setFocus(false)
                }}
              >
                {data}
              </h4>
            ))}
          </div>
        )}
      </div>
      <div className="flex items-center gap-[2vw]">
        <i className="ri-video-add-line text-xl"></i>
        <div>
          <i className="ri-notification-3-line text-xl"></i>
          <sup>1</sup>
        </div>
        <img
          src="https://images.unsplash.com/photo-1710188801399-f37fed6d7c58?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="profile-pic"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </div>
  );
};

export default Header;
