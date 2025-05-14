import { Activity } from "../../components/Activity/Activity";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { CardEspacios } from "./components/CardEspacios";
import { EspaciosJSON } from "../../resources/espacios";
import BlurText from "../../components/Activity/components/BlurText";
import { MapaEspacios } from "./components/Mapa";
import "./../../styles/pages/_espacios.scss";

export const EspaciosMuestra = () => {
    return (
        <>
            <Header />
            <div
                id="espacios-de-muestra"
                className="espacios-muestra container"
            >
                <BlurText
                    text={EspaciosJSON.title}
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="my-4 mb-3 mb-lg-3 sobre-festival__title"
                />

                {/* <Row xs={1} md={2} className="g-4">
                    {EspaciosJSON.espacios.map((e) => (
                        <Col key={e.id}>
                            <CardEspacios
                                title={e.title}
                                description={e.description}
                                img={e.img}
                                maps={e.maps}
                            />
                        </Col>
                    ))}
                </Row> */}
            </div>
            <div className="espacios-muestra__map" style={{ width: "100%" }}>
                <MapaEspacios
                    positionInit={EspaciosJSON.positionInit}
                    espaciosMap={EspaciosJSON.espacios}
                />
            </div>
            <Activity />
            <Footer />
        </>
    );
};
