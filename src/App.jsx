import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Deadpool from "./Components/Deadpool";
import Loki from "./Components/Loki";
import Aquaman from "./Components/Aquaman";
import Superman from "./Components/Superman";
import Hulk from "./Components/Hulk";
import Batman from "./Components/Batman";



const App = () => {
    return (
        
        <div className="bg-black  w-screen h-screen flex">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/deadpool" element={<Deadpool />} />
                <Route path="/loki" element={<Loki />} />
                <Route path="/aquaman" element={<Aquaman />} />
                <Route path="/superman" element={<Superman />} />
                <Route path="/hulk" element={<Hulk />} />
                <Route path="/batman" element={<Batman />} />

            </Routes>
        </div>
    );
};

export default App;