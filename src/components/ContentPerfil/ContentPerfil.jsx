export const ContentPerfil = ({ data }) => {
    return (
        <div className="invitados__content mt-5">
            {data.map((i, e) => (
                <div
                    className="invitados__content-div row m-0 animate__animated animate__zoomIn"
                    key={i.id}
                >
                    <div className="col-12 col-lg-6 col-xl-4 d-flex justify-content-center align-items-center">
                        <div
                            className={`invitados__content-div_img mb-4 mb-lg-0 ${
                                e % 2 == 0 ? "right" : "left"
                            }`}
                        >
                            <img src={i.img} className="rounded-circle" />
                        </div>
                    </div>
                    <div
                        className={`col-12 col-lg-6 col-xl-8 ${
                            !(e % 2) == 0 && "order-lg-first"
                        }`}
                    >
                        <div className="invitados__content-div-info">
                            <h1>{i.title}</h1>
                            <i>{i.charge}</i>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: i.description,
                                }}
                            ></p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
