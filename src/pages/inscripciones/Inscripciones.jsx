import { useEffect } from "react";
import { Activity } from "../../components/Activity/Activity";
import BlurText from "../../components/Activity/components/BlurText";
import { ContentPerfil } from "../../components/ContentPerfil/ContentPerfil";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { InscripcionesJSON } from "../../resources/inscripciones";
import { scrollToElement } from "../../helpers/pages";
import "./../../styles/pages/_inscripciones.scss";

export const Inscripciones = () => {
    const handleRedirect = (redirect) => {
        redirect.includes("http")
            ? window.open(redirect, "_blank")
            : navigate(`/${redirect}`);
    };

    useEffect(() => {
        scrollToElement("inscripciones");
    }, []);
    return (
        <>
            <Header />
            <div id="inscripciones" className="inscripciones container">
                <BlurText
                    text={InscripcionesJSON.title}
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="my-4 mb-3 mb-lg-3 sobre-festival__title"
                />

                <div className="inscripciones-content row">
                    {InscripcionesJSON.inscripciones.map((i) => (
                        <div className="col-12 col-sm-6 text-center" key={i.id}>
                            <img
                                className="mb-3 pointer"
                                width={"100%"}
                                src={i.img}
                                onClick={() => handleRedirect(i.path)}
                            />
                            <h3 className="mb-4">{i.title}</h3>
                            <a href={i.path} target="_blank">
                                Inscribete aquí
                            </a>
                        </div>
                    ))}
                </div>

                <BlurText
                    text={InscripcionesJSON.titleJurado}
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="my-4 mb-3 mb-lg-3 sobre-festival__title"
                />
                <ContentPerfil data={InscripcionesJSON.jurado} />
            </div>
            <Activity />
            <Footer />
        </>
    );
};
