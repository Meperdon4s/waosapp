import { Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";

import Home from "../pages/Home";
import ExplorarCategorias from "../pages/ExplorarCategorias";
import Usuarios from "../pages/Usuarios";
import ExplorarComunidades from "../pages/ExplorarComunidades";
import MisComunidades from "../pages/MisComunidades";
import VistaInformacion from "../pages/VistaInformacion"
import HacerPregunta from "../pages/HacerPregunta";

function Rutas(){
    return(
        <Layout>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/explorarcat" element={<ExplorarCategorias/>}/>
                <Route path="/usuarios" element={<Usuarios/>}/>
                <Route path="/explorarcom" element={<ExplorarComunidades/>}/>
                <Route path="/miscom" element={<MisComunidades/>}/>
                <Route path="/vista" element={<VistaInformacion/>}/>
                <Route path="/pregunta" element={<HacerPregunta/>}/>
            </Routes>
        </Layout>
    )
}

export default Rutas;