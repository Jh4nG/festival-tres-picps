import { BannerHomeJSON } from "../../resources/bannerHome";
import { Carousel } from "react-bootstrap";
import "./../../styles/pages/_banner.scss";
import { IconNextBanner, IconPrevBanner } from "../../assets/Icons";

export const BannerHome = () => {
    const handleRedirect = (redirect) => {
        console.log(redirect);
    };
    return (
        <div className="banner" data-aos="fade-in">
            <div className="banner__container">
                <Carousel
                    data-bs-theme="light"
                    // nextIcon={<IconNextBanner />}
                    // prevIcon={<IconPrevBanner />}
                >
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
