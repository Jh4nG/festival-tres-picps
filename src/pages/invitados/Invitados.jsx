import { useEffect } from "react";
import { Activity } from "../../components/Activity/Activity";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { InvitadosJSON } from "../../resources/invitados";
import { ContentPerfil } from "../../components/ContentPerfil/ContentPerfil";
import { scrollToElement } from "../../helpers/pages";
import BlurText from "../../components/Activity/components/BlurText";
import "./../../styles/pages/_invitados.scss";

export const Invitados = () => {
    useEffect(() => {
        scrollToElement("invitados");
    }, []);
    return (
        <>
            <Header />
            <div id="invitados" className="invitados container">
                <BlurText
                    text={InvitadosJSON.title}
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="my-4 mb-3 mb-lg-3 sobre-festival__title"
                />
                <p className="invitados-description">
                    {InvitadosJSON.description}
                </p>
                <ContentPerfil data={InvitadosJSON.invitados} />
            </div>
            <Activity />
            <Footer />
        </>
    );
};
