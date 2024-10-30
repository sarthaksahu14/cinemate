import { useEffect, useState } from "react";
import Sidenav from "./partials/Sidenav";
import Topnav from "./partials/Topnav";
import axios from "axios";
import Header from "./partials/Header";
import Loading from "./Loading"; 
import HorizontalCards from "./partials/HorizontalCards";

const Home = () => {
    document.title = "CineMate";
    const [wallpaper, setwallpaper] = useState(null);
    const [trending, settrending] = useState(null);

    const GetHeaderWallpaper = async () => {
        try {
            const { data } = await axios.get(`https://www.omdbapi.com/?s=batman&apikey=${import.meta.env.VITE_API_KEY}`);
            let randomdata =
                data.Search[(Math.random() * data.Search.length).toFixed()];
            setwallpaper(randomdata);
        } catch (error) {
            console.log("Error: ", error);
        }
    };
  const GetTrending = async () => {
        try {
            const { data } = await axios.get(`https://www.omdbapi.com/?s=thor&apikey=${import.meta.env.VITE_API_KEY}`);
            settrending(data.Search);
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    useEffect(() => {
        !trending && GetTrending();
        !wallpaper && GetHeaderWallpaper();
    }, []);
    
    return wallpaper && trending ? (
        <>
            <Sidenav />
            <div className="w-[80%] h-full overflow-auto overflow-x-hidden">
                <Topnav />
                <Header data={wallpaper} />    
                <div className="flex justify-between pl-2 lg:pl-5 p-2">
                    <h1 className="text-md lg:text-xl font-semibold text-zinc-400">
                       Batman
                    </h1>
                   
                </div>
                <HorizontalCards  data={trending}/>        
            </div>
        </>
    )  : (
        <Loading />
    );
};

export default Home;
