import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const Topnav = () => {
    const [query, setquery] = useState("");
    const [searches, setsearches] = useState([]);
    const GetSerches = async () => {
        try {
            const { data } = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=${import.meta.env.VITE_API_KEY}`);
            setsearches(data.Search);
        } catch (error) {
            console.log("Error: ", error);
        }
    };
 

    useEffect(() => {
        GetSerches();
    }, [query]);

    return (
        <div className="w-[90%] h-[7vh] relative flex mx-auto  items-center">
            <i className="text-zinc-400 text-md lg:text-lg ri-search-line"></i>
            <input
                onChange={(e) => setquery(e.target.value)}
                value={query}
                className="w-[100%] lg:w-[50%]  text-zinc-200 lg:mx-10 p-5 text-sm lg:text-md outline-none border-none bg-transparent"
                type="text"
                placeholder="Search anything  ..."
            />
            {query.length > 0 && (
                <i
                    onClick={() => setquery("")}
                    className=" text-zinc-400 text-md lg:text-3xl ri-close-fill right-0"
                ></i>
            )}

            <div className="z-[100] absolute w-[100%] lg:w-[50%] max-h-[50vh] bg-zinc-200 top-[100%] left-[5%] overflow-auto">
            {searches && searches.length > 0 && (
        <ul>
          {searches.map((movie) => (
            <li  className="hover:text-black gap-3 lg:gap-2 hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100"
             key={movie.imdbID}>
              <h2>{movie.Title}  -</h2>
              <p>{movie.Year}</p>
            </li>
          ))}
        </ul>   
      )}
      </div>
        </div>
    );
};

export default Topnav;