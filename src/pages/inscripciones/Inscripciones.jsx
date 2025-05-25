import { useEffect } from "react";
import { Activity } from "../../components/Activity/Activity";
import BlurText from "../../components/Activity/components/BlurText";
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
                        <div
                            className="col-12 col-sm-6 text-center mb-5 mb-md-0 animate__animated animate__zoomIn"
                            key={i.id}
                        >
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

                <div className="invitados__content mt-5">
                    {InscripcionesJSON.jurado.map((j, i) => (
                        <div
                            className="row invitados__content-div jurados"
                            key={i}
                        >
                            <h1 className="text-center text-sm-start">
                                {j.title}
                            </h1>
                            {j.personas.map((i, e) => (
                                <div
                                    className="col-12 col-sm-6 col-md-4 row m-0 animate__animated animate__zoomIn d-flex justify-content-center text-center mt-4"
                                    key={i.id}
                                >
                                    <div className="col-10 col-md-10 col-lg-7 d-flex justify-content-center mb-2">
                                        <div
                                            className={`invitados__content-div_img jurado mb-4 mb-lg-0 right`}
                                        >
                                            <img
                                                src={i.img}
                                                className="rounded-circle"
                                            />
                                        </div>
                                    </div>
                                    <div className="invitados__content-div-info">
                                        <h3>{i.title}</h3>
                                        <i>{i.charge}</i>
                                        <p className="text-center">
                                            {i.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <Activity />
            <Footer />
        </>
    );
};
