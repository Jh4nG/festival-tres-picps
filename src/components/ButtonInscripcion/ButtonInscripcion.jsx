import { useNavigate } from "react-router-dom";
import "./../../styles/pages/_inscripciones.scss";
import { HeaderJson } from "../../resources/header";

export const ButtonInscripcion = () => {
    const navigate = useNavigate();
    return (
        <div
            className="inscripciones_button"
            onClick={() =>
                navigate(
                    HeaderJson.headers.find((h) => h.id == "inscripciones")
                        .redirect
                )
            }
        >
            Inscripciones
        </div>
    );
};
