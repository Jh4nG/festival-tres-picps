import CountUp from "react-countup";
import { CardJSON } from "../../resources/card";
import "./../../styles/pages/_card.scss";
import { useNavigate } from "react-router-dom";

export const Card = () => {
    const navigate = useNavigate();
    const handleRedirect = (redirect) => {
        redirect.includes("http")
            ? window.open(redirect, "_blank")
            : navigate(`/${redirect}`);
    };
    return (
        <div className="card__container mt-5 my-mb-5 mb-5 animate__animated animate__zoomIn">
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
                                </p>
                            )}
                            <p className="card-title">{c.title}</p>
                            <p className="small-desc">{c.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
