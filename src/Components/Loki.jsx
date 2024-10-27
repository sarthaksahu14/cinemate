import axios from "../utils/axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import Topnav from "./partials/Topnav";
import Cards from "./partials/Cards";

const Loki = () => {
    document.title = "SCSDB | Popular";

    const navigate = useNavigate();
    const [loki, setloki] = useState([]);
    

    const GetLoki = async () => {
        try {
            const { data } = await axios.get(`http://www.omdbapi.com/?s=loki&apikey=${import.meta.env.VITE_API_KEY}`);
            setloki(data.Search);
        } catch (error) {
            console.log("Error: ", error);
        }
    };

 

    useEffect(() => {
        GetLoki();
    }, []);

    return loki.length > 0 ? (
        <div className="w-screen h-screen ">
            <div className=" px-[5%] pt-2 w-full flex items-center justify-between ">
                <h1 className=" text-2xl font-semibold text-zinc-400">
                    <i
                        onClick={() => navigate(-1)}
                        className="hover:text-[#6556CD] ri-arrow-left-line"
                    ></i>{" "}
                    Loki
                </h1>
                <div className="flex items-center w-[80%]">
                    <Topnav />
                     </div>
            </div>

            
                <Cards data={loki} title={loki} />
           
        </div>
    ) : (
        <Loading />
    );
};

export default Loki;