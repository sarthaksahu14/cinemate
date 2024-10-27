import axios from "axios";

const instance = axios.create({
    baseURL: `http://www.omdbapi.com/?i=thor&apikey=${import.meta.env.VITE_API_KEY}`,
   
});

export default instance;