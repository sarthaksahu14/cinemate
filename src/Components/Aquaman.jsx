import axios from "../utils/axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import Topnav from "./partials/Topnav";
import Cards from "./partials/Cards";

const Aquaman = () => {
    document.title = "SCSDB | Popular";

    const navigate = useNavigate();
    const [aquaman, setaquaman] = useState([]);
    

    const GetAquaman = async () => {
        try {
            const { data } = await axios.get(`http://www.omdbapi.com/?s=aquaman&apikey=${import.meta.env.VITE_API_KEY}`);
            setaquaman(data.Search);
        } catch (error) {
            console.log("Error: ", error);
        }
    };

 

    useEffect(() => {
        GetAquaman();
    }, []);

    return aquaman.length > 0 ? (
        <div className="w-screen h-screen ">
            <div className=" px-[5%] pt-2 w-full flex items-center justify-between ">
                <h1 className=" text-2xl font-semibold text-zinc-400">
                    <i
                        onClick={() => navigate(-1)}
                        className="hover:text-[#6556CD] ri-arrow-left-line"
                    ></i>{" "}
                   Aquaman
                </h1>
                <div className="flex items-center w-[80%]">
                    <Topnav />
                     </div>
            </div>

            
                <Cards data={aquaman} title={aquaman} />
           
        </div>
    ) : (
        <Loading />
    );
};

export default Aquaman;