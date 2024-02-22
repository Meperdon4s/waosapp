import { Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";

import Home from "../pages/Home";
import ExplorarCategorias from "../pages/ExplorarCategorias";
import Usuarios from "../pages/Usuarios";
import ExplorarComunidades from "../pages/ExplorarComunidades";
import MisComunidades from "../pages/MisComunidades";

function Rutas(){
    return(
        <Layout>
            <Routes>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/Explorarcat" element={<ExplorarCategorias/>}/>
                <Route path="/Usuarios" element={<Usuarios/>}/>
                <Route path="/Explorarcom" element={<ExplorarComunidades/>}/>
                <Route path="/Miscom" element={<MisComunidades/>}/>
            </Routes>
        </Layout>
    )
}

export default Rutas;