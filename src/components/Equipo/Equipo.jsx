import "./../../styles/components/_equipoCard.scss";

export const EquipoCard = ({ nameTitle, charge, description, img }) => {
    return (
        <div className="equipo__card animate__animated animate__fadeInUp">
            <div className="equipo__card__container">
                <div className="equipo__card__card">
                    <div className="equipo__card__front">
                        <div className="equipo__card__card-top">
                            <p className="equipo__card__card-top-para">
                                Perfíl
                            </p>
                        </div>

                        <img
                            src={img}
                            width={100}
                            className="rounded-circle mt-4"
                        />
                        <p className="equipo__card__heading"> {nameTitle} </p>
                        <p className="equipo__card__follow">{charge}</p>
                    </div>
                    <div className="equipo__card__back">
                        <p className="equipo__card__heading">Sobre mí</p>
                        <p className="equipo__card__follow">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
