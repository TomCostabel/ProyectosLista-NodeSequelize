import { Route, Routes } from "react-router-dom";

import Home from "./components/Home/Home";
import Tasks from "./components/Tasks/Tasks";

function App() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/proyecto/:id" element={<Tasks />} />
        </Routes>
    );
}

export default App;
