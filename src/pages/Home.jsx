import { Activity } from "../components/Activity/Activity";
// import LiquidChrome from "../components/BackgroudColor/LiquidChrome";
import { BannerHome } from "../components/BannerHome/Banner";
import { Card } from "../components/Card/Card";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";

export const Home = () => {
    return (
        <>
            {/* <div
                style={{ width: "100%", height: "100vh", position: "absolute" }}
            >
                <LiquidChrome />
            </div> */}
            <Header />
            <BannerHome />
            <Card />
            <Activity />
            <Footer />
        </>
    );
};
