import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { EspaciosMuestra } from "../pages/espaciosMuestra/EspaciosMuestra";
import { SobreFestival } from "../pages/sobreFestival/SobreFestival";
import { Selecciones } from "../pages/selecciones/Selecciones";
import { Invitados } from "../pages/Invitados/Invitados";

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
