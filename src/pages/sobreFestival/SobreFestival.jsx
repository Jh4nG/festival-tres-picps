import { Activity } from "../../components/Activity/Activity";
import BlurText from "../../components/Activity/components/BlurText";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { SobreFestivalJSON } from "../../resources/sobreFestival";
import { EmblaStartSobreFestival } from "./components/EmblaStart";
import "./../../styles/pages/_sobre-festival.scss";

export const SobreFestival = () => {
    return (
        <>
            <Header />
            <div
                id="sobre-el-festival"
                className="sobre-festival container mt-5"
            >
                <BlurText
                    text={SobreFestivalJSON.title}
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="my-4 mb-3 mb-lg-5 sobre-festival__title"
                />
                <img
                    src={SobreFestivalJSON.imgLogo}
                    className="rounded float-end sobre-festival__img animate__animated animate__rubberBand"
                    alt="..."
                />
                {SobreFestivalJSON.text.map((t, i) => (
                    <div key={i}>
                        <p
                            className="animate__animated animate__zoomIn"
                            dangerouslySetInnerHTML={{ __html: t }}
                        ></p>
                    </div>
                ))}
                <img
                    className="rounded mt-3 mt-lg-5 animate__animated animate__fadeIn"
                    width={"100%"}
                    src={SobreFestivalJSON.img}
                    alt="Localidad"
                />
            </div>
            <div className="container mt-3 mt-lg-5 mb-3 mb-lg-5">
                <BlurText
                    text={SobreFestivalJSON.titleEquipo}
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="my-4 mb-3 mb-lg-5 sobre-festival__title"
                />
                <div className="sobre-festival__equipo row">
                    <EmblaStartSobreFestival equipoJson={SobreFestivalJSON} />
                </div>
            </div>
            <Activity />
            <Footer />
        </>
    );
};
