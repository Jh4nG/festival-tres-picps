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
import "./../../../styles/_embla.scss";
import { Image } from "react-bootstrap";

export const EmblaStart = ({ ActivityJSON }) => {
    const OPTIONS = { align: "center", loop: true };

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

    const renderItems = (a) => {
        return (
            <div
                className="embla__slide pointer"
                key={a.id}
                onClick={() => {
                    handleRedirect(a.path);
                }}
            >
                <Image src={a.img} roundedCircle />
                <h3 className="mt-4">{a.title}</h3>
                <p>{a.description}</p>
            </div>
        );
    };

    return (
        <section className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container activity__content__carousel">
                    {ActivityJSON.activitys.map((a) => renderItems(a))}
                    {ActivityJSON.proyects.map((a) => renderItems(a))}
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
