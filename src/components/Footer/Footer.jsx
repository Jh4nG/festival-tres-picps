import {
    IconEmail,
    IconFacebook,
    IconInstagram,
    IconTikTok,
    IconWhatsApp,
    IconYoutube,
} from "../../assets/Icons";
import "./../../styles/pages/_footer.scss";

export const Footer = () => {
    const FooterJSON = {
        title: "Festival tres picos de suba",
        email: "proyectoaleteoproduccion@gmail.com",
        whatsapp: {
            number: "+57 3214175816",
            link: "https://wa.link/fghs46",
        },
        titleSecciones: "Nuestras secciones",
        titleLogos: "Organiza",
        logoOrganizadores: [
            {
                id: "alcaldia",
                name: "Alcaldía Mayor",
                img: "./assets/img/Logos/DuplaBogotaBlanco.png",
            },
        ],
        logos: [
            {
                id: "localidad",
                name: "MCL",
                img: "./assets/img/Logos/Suba-V1.png",
            },
            {
                id: "1",
                name: "La chimenea",
                img: "./assets/img/Logos/2LogoChimenea.png",
            },
            {
                id: "2",
                name: "Tres olas",
                img: "./assets/img/Logos/LOGO_TRES OLAS.png",
            },
            {
                id: "festival",
                name: "Festiva tres picos de suba",
                img: "./assets/img/principal/Logo-2.png",
            },
        ],
        copy: "© Festival tres picos de suba. Todos los derechos reservados, 2025",
        redes: [
            {
                id: "1",
                name: "facebook",
                link: "https://www.facebook.com/profile.php?id=61575877233035",
                icon: <IconFacebook />,
            },
            {
                id: "2",
                name: "tiktok",
                link: "https://www.tiktok.com/@festivaldecinetrespicos?_t=ZS-8wFYNacvVVo&_r=1",
                icon: <IconTikTok />,
            },
            {
                id: "3",
                name: "instagram",
                link: "https://www.instagram.com/festival_trespicossuba/",
                icon: <IconInstagram />,
            },
            {
                id: "4",
                name: "youtube",
                link: "https://www.youtube.com/@FestivaldecineTrespicos",
                icon: <IconYoutube />,
            },
            {
                id: "5",
                name: "whatsApp",
                link: "https://wa.link/1bb7h3",
                icon: <IconWhatsApp />,
            },
            {
                id: "6",
                name: "email",
                link: "mailto:festivaldecinetrespicos@gmail.com",
                icon: <IconEmail />,
            },
        ],
    };

    return (
        <div>
            <div className="footer">
                <div className="footer__container">
                    <div className="footer__redes text-center pt-2">
                        <ul
                            className="footer__redes_faico clear"
                            id="contentSocial"
                        >
                            {FooterJSON.redes.map((r) => (
                                <li key={r.id} style={{ marginRight: "10px" }}>
                                    <a
                                        className={`footer__redes_faicon-${r.name.toLowerCase()}`}
                                        href={r.link}
                                        target="_blank"
                                    >
                                        {r.icon}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="row pt-5 px-2 p-mb-5 px-sm-5">
                        <div className="row col-12 col-md-9 col-lg-8 mb-3 mb-md-5 text-center text-md-start">
                            {FooterJSON.logos.map((l) => (
                                <div
                                    key={l.id}
                                    className="footer__logos col-6 col-md-2 d-block text-center text-md-start d-md-flex align-items-center mb-3 mb-lg-0"
                                >
                                    <img
                                        className={`footer__logos-${l.id}`}
                                        src={l.img}
                                        alt={l.name}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="col-12 col-md-3 col-lg-4 mb-3 text-center text-md-end">
                            <img
                                className="footer__logos-alcaldia"
                                src={
                                    FooterJSON.logoOrganizadores.find(
                                        (l) => l.id == "alcaldia"
                                    ).img
                                }
                                alt={
                                    FooterJSON.logoOrganizadores.find(
                                        (l) => l.id == "alcaldia"
                                    ).name
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__copy py-2 px-2 p-mb-5 px-sm-5 text-center text-md-start">
                <div className="footer__container">{FooterJSON.copy}</div>
            </div>
        </div>
    );
};
