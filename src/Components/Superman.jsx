import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./partials/Topnav";
import axios from "../utils/axios";
import Cards from "./partials/Cards";
import Loading from "./Loading";

const Superman = () => {
    document.title = "SCSDB | Trending";
    const navigate = useNavigate();
    const [superman, setsuperman] = useState([]);


    const GetSuperman = async () => {
        try {
            const { data } = await axios.get(`http://www.omdbapi.com/?s=superman&apikey=${import.meta.env.VITE_API_KEY}`);
            setsuperman(data.Search);
        } catch (error) {
            console.log("Error: ", error);
        }
    };

   

    useEffect(() => {
       GetSuperman();
    }, []);

    return superman.length > 0 ? (
        <div className="w-screen h-screen ">
            <div className=" px-[5%] pt-2 w-full flex items-center justify-between ">
                <h1 className=" text-2xl font-semibold text-zinc-400">
                    <i
                        onClick={() => navigate(-1)}
                        className="hover:text-[#6556CD] ri-arrow-left-line"
                    ></i>{" "}
                 Superman
                </h1>
                <div className="flex items-center w-[80%]">
                    <Topnav />
                     </div>
            </div>

            
                <Cards data={superman} title={superman} />
           
        </div>
    ) : (
        <Loading />
    );
};

export default Superman;