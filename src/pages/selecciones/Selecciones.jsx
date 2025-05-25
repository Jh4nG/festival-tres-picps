import BlurText from "../../components/Activity/components/BlurText";
import { Activity } from "../../components/Activity/Activity";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { SeleccionesJSON } from "../../resources/selecciones";
import { ViewVideos } from "./components/ViewVideos";
import "./../../styles/pages/_selecciones.scss";
import { useEffect } from "react";
import { scrollToElement } from "../../helpers/pages";

export const Selecciones = () => {
    useEffect(() => {
        scrollToElement("selecciones");
    }, []);
    return (
        <>
            <Header />
            <div id="selecciones" className="selecciones container">
                <BlurText
                    text={SeleccionesJSON.title}
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="my-4 mb-3 mb-lg-3 sobre-festival__title"
                />

                {/* <ViewVideos /> */}
            </div>
            <Activity />
            <Footer />
        </>
    );
};
