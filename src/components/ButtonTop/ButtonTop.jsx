import { useEffect, useState } from "react";
import { IconBackToTop } from "../../assets/Icons";

export const ButtonTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Mostrar u ocultar el botón según el scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 150);
        };

        window.addEventListener("scroll", handleScroll);

        // Limpieza del event listener
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Función para volver arriba
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <>
            <div className="top"></div>
            <a
                id="backtotop"
                href="#top"
                onClick={scrollToTop}
                className={isVisible ? "visible" : ""}
            >
                <IconBackToTop />
            </a>
        </>
    );
};
