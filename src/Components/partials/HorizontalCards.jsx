import React from "react";
import noimage from "/noimage.jpeg";

const HorizontalCards = ({ data, title }) => {
    return (
        <div className="w-[100%] flex overflow-y-hidden pl-2 lg:pl-5 p-1">
            {data.length > 0 ? (
                data.map((d, i) => (
                    <div
                        key={i}
                        className="w-[70%] lg:min-w-[15%] h-[31vh] bg-black mr-5 mb-2 lg:mb-5"
                    >
                        <img
                            className="w-full h-[70%] object-cover bg-no-repeat bg-center"
                            src={d.Poster ? d.Poster : noimage}
                            alt=""
                        />
                        <div className="text-white p-3 h-[55%]">
                            <h1 className="text-sm lg:text-md font-semibold">
                                {d.Title}
                            </h1>
                        </div>
                    </div>
                ))
            ) : (
                <h1 className="text-3xl mt-5 text-white font-black text-center">
                    Nothing to show
                </h1>
            )}
        </div>
    );
};

export default HorizontalCards;
