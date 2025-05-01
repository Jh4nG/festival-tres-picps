import { FooterJSON } from "../../resources/footer";
import { IconEmail, IconWhatsApp } from "../../assets/Icons";
import { HeaderJson } from "../../resources/header";
import "./../../styles/pages/_footer.scss";

export const Footer = () => {
    return (
        <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="60"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
        >
            <div className="footer pt-5 px-2 p-mb-5 px-sm-5">
                <div className="footer__container">
                    <div className="row">
                        <div className="footer__title col-12 col-md-6 text-center text-md-start mb-4 mb-md-0">
                            <h1>{FooterJSON.title}</h1>
                            <a href={FooterJSON.whatsapp.link} target="_blank">
                                <IconWhatsApp /> {FooterJSON.whatsapp.number}
                            </a>
                            <br />
                            <a href={`mailto:${FooterJSON.email}`}>
                                <IconEmail /> {FooterJSON.email}
                            </a>
                        </div>
                        <div className="col-12 col-md-6 text-center mb-4">
                            <h4>Nuestra secciones</h4>
                            {HeaderJson.headers.map((h) => (
                                <div className="pointer footer__secciones">
                                    {h.name}
                                </div>
                            ))}
                        </div>

                        <div className="col-12 mt-4 mb-4 text-center text-md-start">
                            <div className="row">
                                <h5 className="mb-3">
                                    {FooterJSON.titleLogos}
                                </h5>
                                {FooterJSON.logos.map((l) => (
                                    <div className="footer__logos col-6 col-md-3">
                                        <img src={l.img} alt={l.name} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__copy py-2 px-2 p-mb-5 px-sm-5 text-center text-md-start">
                <div className="footer__container">{FooterJSON.footerCopy}</div>
            </div>
        </div>
    );
};
