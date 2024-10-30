import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./partials/Topnav";
import axios from "../utils/axios";
import Cards from "./partials/Cards";
import Loading from "./Loading";

const Deadpool = () => {
    document.title = "SCSDB | Trending";
    const navigate = useNavigate();
    const [deadpool, setdeadpool] = useState([]);


    const GetDeadpool = async () => {
        try {
            const { data } = await axios.get(`https://www.omdbapi.com/?s=deadpool&apikey=${import.meta.env.VITE_API_KEY}`);
            setdeadpool(data.Search);
        } catch (error) {
            console.log("Error: ", error);
        }
    };

   

    useEffect(() => {
       GetDeadpool();
    }, []);

    return deadpool.length > 0 ? (
        <div className="w-screen h-screen ">
            <div className=" px-[5%] pt-2 w-full flex items-center justify-between ">
                <h1 className=" text-2xl font-semibold text-zinc-400">
                    <i
                        onClick={() => navigate(-1)}
                        className="hover:text-[#6556CD] ri-arrow-left-line"
                    ></i>{" "}
                  Deadpool
                </h1>
                <div className="flex items-center w-[80%]">
                    <Topnav />
                     </div>
            </div>

            
                <Cards data={deadpool} title={deadpool} />
           
        </div>
    ) : (
        <Loading />
    );
};

export default Deadpool;
