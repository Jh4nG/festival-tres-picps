import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { EspaciosMuestra } from "../pages/EspaciosMuestra";
import { SobreFestival } from "../pages/SobreFestival";
import { Selecciones } from "../pages/Selecciones";
import { Invitados } from "../pages/Invitados";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<Navigate to="/" />} />
            <Route path="/sobre-el-festival" element={<SobreFestival />} />
            <Route path="/espacios-de-muestra" element={<EspaciosMuestra />} />
            <Route path="/selecciones" element={<Selecciones />} />
            <Route path="/invitados" element={<Invitados />} />
        </Routes>
    );
};
