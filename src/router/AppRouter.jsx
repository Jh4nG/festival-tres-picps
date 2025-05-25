import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Home } from "../pages/Home";
import { EspaciosMuestra } from "../pages/espaciosMuestra/EspaciosMuestra";
import { SobreFestival } from "../pages/sobreFestival/SobreFestival";
import { Selecciones } from "../pages/selecciones/Selecciones";
import { Invitados } from "../pages/Invitados/Invitados";
import { Inscripciones } from "../pages/inscripciones/Inscripciones";
import { ButtonTop } from "../components/ButtonTop/ButtonTop";
import { ButtonInscripcion } from "../components/ButtonInscripcion/ButtonInscripcion";
import { useEffect, useState } from "react";

export const AppRouter = () => {
    const location = useLocation();
    const [viewButtonInscripcion, setViewButtonInscripcion] = useState(true);

    useEffect(() => {
        setViewButtonInscripcion(
            location.pathname == "/inscripciones" ? false : true
        );
    }, [location.pathname]);
    return (
        <>
            <ButtonTop />
            {viewButtonInscripcion && <ButtonInscripcion />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/*" element={<Navigate to="/" />} />
                <Route path="/sobre-el-festival" element={<SobreFestival />} />
                <Route
                    path="/espacios-de-muestra"
                    element={<EspaciosMuestra />}
                />
                <Route path="/selecciones" element={<Selecciones />} />
                <Route path="/invitados" element={<Invitados />} />
                <Route path="/inscripciones" element={<Inscripciones />} />
            </Routes>
        </>
    );
};
