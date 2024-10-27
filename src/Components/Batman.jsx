import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./partials/Topnav";
import axios from "../utils/axios";
import Cards from "./partials/Cards";
import Loading from "./Loading";

const Batman = () => {
    document.title = "SCSDB | Trending";
    const navigate = useNavigate();
    const [batman, setbatman] = useState([]);


    const GetBatman = async () => {
        try {
            const { data } = await axios.get(`http://www.omdbapi.com/?s=batman&apikey=${import.meta.env.VITE_API_KEY}`);
            setbatman(data.Search);
        } catch (error) {
            console.log("Error: ", error);
        }
    };

   

    useEffect(() => {
       GetBatman();
    }, []);

    return batman.length > 0 ? (
        <div className="w-screen h-screen ">
            <div className=" px-[5%] pt-2 w-full flex items-center justify-between ">
                <h1 className=" text-2xl font-semibold text-zinc-400">
                    <i
                        onClick={() => navigate(-1)}
                        className="hover:text-[#6556CD] ri-arrow-left-line"
                    ></i>{" "}
             Batman
                </h1>
                <div className="flex items-center w-[80%]">
                    <Topnav />
                     </div>
            </div>

            
                <Cards data={batman} title={batman} />
           
        </div>
    ) : (
        <Loading />
    );
};

export default Batman;