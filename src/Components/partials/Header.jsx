import React from "react";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
 
    return (
        <div
        style={{
            background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5), rgba(0,0,0,.8)), url("${
                data.Poster || data.Poster
            })`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
        }}
        className="w-full h-[50vh] flex flex-col justify-end items-start p-[3%]"
    >
     <h1 className="w-[70%] text-md lg:text-5xl font-black text-white">
                {data.Title}
    </h1>
    <p className="text-white mt-2 lg:mt-4 text-[12px] lg:text-xl">
                <i className="text-yellow-500 ri-megaphone-fill"></i>{" "}
                {data.Year || "No Information"}
                <i className="ml-5 text-yellow-500 ri-album-fill"></i>{" "}
                {data.Type.toUpperCase()}
            </p>
            <h1
                className="mt-3 lg:mt-5 mb-2 lg:mb-0 bg-[#6556CD] text-[12px] lg:text-xl p-1 lg:p-4 rounded text-white font-semibold"
            >
                Watch Trailer
            </h1>



        </div>
    );
};

export default Header;