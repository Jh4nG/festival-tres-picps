import CountUp from "react-countup";
import { CardJSON } from "../../resources/card";
import { useNavigate } from "react-router-dom";
import ModalFanzine from "../modal/modal";
import { useState } from "react";
import "./../../styles/pages/_card.scss";

export const Card = () => {
    const navigate = useNavigate();
    const [modalShow, setModalShow] = useState(false);
    const handleRedirect = (redirect) => {
        if (redirect == "viewModal") {
            setModalShow(true);
        } else {
            redirect.includes("http")
                ? window.open(redirect, "_blank")
                : navigate(`/${redirect}`);
        }
    };
    return (
        <div className="card__container mt-5 my-mb-5 mb-5 animate__animated animate__zoomIn">
            <ModalFanzine show={modalShow} onHide={() => setModalShow(false)} />
            <div className="row justify-content-center">
                {CardJSON.map((c) => (
                    <div
                        key={c.id}
                        className="col-12 col-md-4 mb-4 mb-lg-0"
                        onClick={() => {
                            handleRedirect(c.path);
                        }}
                    >
                        <div className="card">
                            {c.number == 0 ? (
                                <span className="card-processing">
                                    En proceso
                                </span>
                            ) : (
                                <p className="card-number">
                                    <CountUp end={c.number} duration={5} />
                                    {c.id == 2 && "°"}
                                </p>
                            )}
                            <p className="card-title">{c.title}</p>
                            <p
                                className="small-desc"
                                dangerouslySetInnerHTML={{
                                    __html: c.description,
                                }}
                            ></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
