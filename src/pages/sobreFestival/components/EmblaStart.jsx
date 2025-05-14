import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { useDotButton } from "./EmblaCarouselDotButton";
import {
    NextButton,
    PrevButton,
    usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import {
    SelectedSnapDisplay,
    useSelectedSnapDisplay,
} from "./EmblaCarouselSelectSnapDisplay";
import { useNavigate } from "react-router-dom";
import "./../../../styles/_embla.scss";
import { EquipoCard } from "../../../components/Equipo/Equipo";

export const EmblaStartSobreFestival = ({ equipoJson }) => {
    const OPTIONS = { align: "center", loop: true };

    const navigate = useNavigate();
    const handleRedirect = (redirect) => {
        redirect.includes("http")
            ? window.open(redirect, "_blank")
            : navigate(`/${redirect}`);
    };

    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [
        AutoScroll({
            playOnInit: true,
            delay: 4000,
            speed: 1,
            stopOnMouseEnter: true,
        }),
    ]);
    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi);
    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);
    const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi);

    return (
        <section className="embla">
            <div className="embla__viewport sobre-festival" ref={emblaRef}>
                <div className="embla__container sobre-festival__carousel">
                    {equipoJson.equipo.map((e) => (
                        <div
                            key={e.id}
                            className="col-12 col-sm-6 col-lg-4 col-xl-3"
                        >
                            <EquipoCard
                                nameTitle={e.title}
                                charge={e.charge}
                                description={e.description}
                                img={e.img}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla__controls">
                <div className="embla__buttons">
                    <PrevButton
                        onClick={onPrevButtonClick}
                        disabled={prevBtnDisabled}
                    />
                    <NextButton
                        onClick={onNextButtonClick}
                        disabled={nextBtnDisabled}
                    />
                </div>

                {/* <div className="embla__dots">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={"embla__dot".concat(
                                index === selectedIndex
                                    ? " embla__dot--selected"
                                    : ""
                            )}
                        />
                    ))}
                </div> */}
                <SelectedSnapDisplay
                    selectedSnap={selectedSnap}
                    snapCount={snapCount}
                />
            </div>
        </section>
    );
};
