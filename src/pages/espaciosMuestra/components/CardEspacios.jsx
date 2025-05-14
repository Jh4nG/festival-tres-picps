import { Button, Card } from "react-bootstrap";
import { IconMap } from "../../../assets/Icons";

export const CardEspacios = ({ title, description, img, maps }) => {
    const handleRedirect = (redirect) => {
        redirect.includes("http")
            ? window.open(redirect, "_blank")
            : navigate(`/${redirect}`);
    };

    return (
        <Card>
            <Card.Img
                variant="top"
                src={img != "" ? img : "./assets/img/espacios/temp.svg"}
            />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text
                    dangerouslySetInnerHTML={{ __html: description }}
                ></Card.Text>
            </Card.Body>
            <Card.Footer
                style={{
                    border: "none",
                    width: "100%",
                    background: "transparent",
                }}
            >
                <div
                    className="d-flex justify-content-end pointer"
                    onClick={() => handleRedirect(maps)}
                >
                    <IconMap />
                    Ver espacio
                </div>
            </Card.Footer>
        </Card>
    );
};
