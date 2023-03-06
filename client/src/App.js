import { Route, Routes } from "react-router-dom";

import Home from "./components/Home/Home";
import Tasks from "./components/Tasks/Tasks";
import axios from "axios";
axios.defaults.baseURL = "https://listaproyectosnodesequelize1.up.railway.app/";

function App() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/proyecto/:id" element={<Tasks />} />
        </Routes>
    );
}

export default App;
