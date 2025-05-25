import { Activity } from "../components/Activity/Activity";
import { BannerHome } from "../components/BannerHome/Banner";
import { Card } from "../components/Card/Card";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
// import LiquidChrome from "../components/BackgroudColor/LiquidChrome";

export const Home = () => {
    return (
        <>
            {/* <div
                style={{ width: "100%", height: "100vh", position: "absolute" }}
            >
            </div> */}
            <Header />
            <BannerHome />
            <Card />
            <Activity />
            <Footer />
        </>
    );
};
