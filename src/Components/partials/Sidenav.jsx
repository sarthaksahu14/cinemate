import axios from "../../utils/axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
    return (
        <div className="w-[40%] lg:w-[20%] h-full border-r-2 border-zinc-400 p-4 lg:px-6 lg:py-4">
            <h1 className="text-xl lg:text-2xl text-white font-bold">
                <i className="text-[#6556CD] ri-tv-fill mr-2 "></i>
                <span className="text-xl lg:text-2xl">CineMate</span>
            </h1>
            <nav className="flex flex-col text-zinc-400 text-sm lg:text-2xl gap-3">
                <h1 className="text-white font-semibold text-sm lg:text-2xl mt-5 lg:mt-10 mb-2 lg:mb-3">
                  Characters -
                </h1>
                <Link
                    to="/deadpool"
                    className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg pl-3 lg:pl-5 p-2"
                >
                    <i className="ri-fire-fill" ></i> Deadpool
                </Link>
                <Link
                    to="/loki"
                    className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg pl-3 lg:pl-5 p-2"
                >
                    <i className="mr-2 ri-bard-fill"></i>
                    Loki
                </Link>
                <Link
                    to="/aquaman"
                    className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg pl-3 lg:pl-5 p-2"
                >
                    <i className="mr-2 ri-movie-2-fill"></i>
                    Aquaman
                </Link>
                <Link
                    to="/superman"
                    className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg pl-3 lg:pl-5 p-2"
                >
                    <i className="mr-2 ri-tv-2-fill"></i>
                   Superman
                </Link>
                <Link
                    to="/batman"
                    className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg pl-3 lg:pl-5 p-2 "
                >
                    <i className="mr-2 ri-team-fill"></i>
                    Batman
                </Link>
                <Link
                    to="/hulk"
                    className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg pl-3 lg:pl-5 p-2 mb-2"
                >
                    <i className="mr-2 ri-women-fill"></i>
                   Hulk
                </Link>
            </nav>
            <hr className="border-none h-[1px] bg-zinc-400" />
            <nav className="flex flex-col text-zinc-400 text-sm lg:text-2xl  gap-3 ">
                <h1 className="text-white font-semibold text-sm lg:text-2xl mt-6 mb-3">
                    Website Information
                </h1>
                <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg pl-3 lg:pl-5 p-2">
                    <i className="mr-2 ri-information-fill"></i>About CineMate
                </Link>
                <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-2 pl-3 lg:pl-5">
                    <i className="mr-2 ri-phone-fill"></i>
                    Contact Us
                </Link>
            </nav>
        </div>
    );
};

export default Sidenav;
