import { ActivityJSON } from "../../resources/activity";
import { EmblaStart } from "./components/EmblaStart";
import BlurText from "./components/BlurText";
import "./../../styles/pages/_activity.scss";

export const Activity = () => {
    const handleRedirect = (redirect) => {
        console.log(redirect);
    };

    return (
        <div
            className="activity mb-2 mb-md-5"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="60"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
        >
            <div className="activity__container">
                <div className="activity__content py-1">
                    <BlurText
                        text={ActivityJSON.title}
                        delay={150}
                        animateBy="words"
                        direction="top"
                        className="my-4 mb-5 activity__content__carousel__title"
                    />
                    <EmblaStart ActivityJSON={ActivityJSON} />
                </div>
            </div>
        </div>
    );
};
