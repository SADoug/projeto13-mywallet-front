import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaLogin from "./TelaLogin";
import TelaCadastro from "./TelaCadastro";
import UserContext from "./Usecontext";
import { useState } from "react";
import TelaHome from "./TelaHome";
import TelaNovaentrada from "./TelaNovaentrada";
import TelaNovasaida from "./TelaNovasaida"



function App() {
    const [token, setToken] = useState("");
    const [dados, setDados] = useState("");
    const [logo, setLogo] = useState("");
    const [name, setName] = useState("");


    return (
        <UserContext.Provider value={{ token, setToken, dados, setDados, logo, setLogo, name, setName }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TelaLogin />} />
                    <Route path="/sign-up" element={<TelaCadastro />} />
                    <Route path="/home" element={<TelaHome />} />
                    <Route path="/new-entry" element={<TelaNovaentrada />} />
                    <Route path="/new-retire" element={<TelaNovasaida />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}

export default App;

