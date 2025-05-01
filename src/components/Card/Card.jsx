import CountUp from "react-countup";
import { CardJSON } from "../../resources/card";
import "./../../styles/pages/_card.scss";

export const Card = () => {
    const handleRedirect = (redirect) => {
        console.log(redirect);
    };
    return (
        <div className="card__container mt-5 my-mb-5" data-aos="fade-up">
            <div className="row">
                {CardJSON.map((c) => (
                    <div
                        key={c.id}
                        className="col-12 col-md-4 mb-4 mb-lg-0"
                        onClick={() => {
                            handleRedirect(c.path);
                        }}
                    >
                        <div className="card">
                            <p className="card-number">
                                <CountUp end={c.number} duration={5} />
                            </p>
                            <p className="card-title">{c.title}</p>
                            <p className="small-desc">{c.description}</p>
                            <div className="go-corner">
                                <div className="go-arrow">→</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
