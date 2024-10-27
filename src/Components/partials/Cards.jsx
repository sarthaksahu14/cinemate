import React from "react";
import noimage from "/noimage.jpeg";

const Cards = ({ data, title }) => {
    return (
        <div className="flex flex-wrap gap-6 w-full px-[5%] bg-black pt-[3%]">
            <div
                onClick={() => {
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                    });
                }}
                className="fixed bottom-[5%] right-[5%] flex justify-center items-center w-[5vh] h-[5vh] bg-[#6556cd] rounded-lg cursor-pointer"
            >
                <i className="text-white ri-arrow-up-line text-xl"></i>
            </div>
            {data.map((c, i) => (
                <div
                    className="relative w-[25vh] mr-[5%] mb-[5%]"
                    key={i}
                >
                    <img
                        className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[40vh] object-cover"
                        src={c.Poster ? c.Poster : noimage}
                        alt={c.Title}
                    />
                    <h1 className="text-2xl text-zinc-300 mt-3 font-semibold">
                        {c.Title}
                    </h1>
                </div>
            ))}
        </div>
    );
};

export default Cards;
