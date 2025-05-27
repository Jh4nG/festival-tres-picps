import { BannerHomeJSON } from "../../resources/bannerHome";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./../../styles/pages/_banner.scss";

export const BannerHome = () => {
    const navigate = useNavigate();
    const handleRedirect = (redirect) => {
        redirect.includes("http")
            ? window.open(redirect, "_blank")
            : navigate(`/${redirect}`);
    };

    return (
        <div className="banner">
            <div className="banner__container p-0 container-md mt-md-5">
                <Carousel data-bs-theme="light">
                    {BannerHomeJSON.map((b) => (
                        <Carousel.Item key={b.id}>
                            <img
                                className={`d-block ${b.redirect && "pointer"}`}
                                src={b.img}
                                alt={b.title}
                                onClick={() => {
                                    b.redirect && handleRedirect(b.path);
                                }}
                            />
                            <Carousel.Caption>
                                <h5>{b.title}</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};
