import Modal from "react-bootstrap/Modal";
import "./../../styles/pages/_modal.scss";
import { IconClose } from "../../assets/Icons";
import { Button } from "react-bootstrap";

function ModalFanzine(props) {
    return (
        <Modal
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header className="">
                <Modal.Title
                    id="contained-modal-title-vcenter"
                    className="modal-header d-flex justify-content-center m-0 p-1"
                >
                    Fanzine
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <iframe
                    src="/assets/docs/Fanzine.pdf"
                    width="100%"
                    style={{ height: "70vh" }}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => props.onHide()}>
                    Cerrar
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalFanzine;
