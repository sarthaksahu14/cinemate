import axios from "axios";

const instance = axios.create({
    baseURL: `https://www.omdbapi.com/?i=thor&apikey=${import.meta.env.VITE_API_KEY}`,
   
});

export default instance;
