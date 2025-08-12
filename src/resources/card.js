import { HeaderJson } from "./header";
import { SeleccionesJSON } from "./selecciones";

export const CardJSON = [
    {
        id: 1,
        number: 8,
        title: HeaderJson.headers.find((h) => h.id === "espacios").name,
        description:
            "Conoce los espacios de esta versión del festival. Fechas y muestras",
        path: HeaderJson.headers.find((h) => h.id === "espacios").redirect,
    },
    {
        id: 2,
        number: 1,
        title: "Memorias del festival",
        description:
            "Conoce todo lo referente a nuestro festival y sus 45 piezas en muestra en su <b>Fanzine</b>.",
        path: "viewModal",
    },
    {
        id: 3,
        number: 5,
        title: HeaderJson.headers.find((h) => h.id === "invitados").name,
        description: "Perfiles de nuestros invitados y talleristas.",
        path: HeaderJson.headers.find((h) => h.id === "invitados").redirect,
    },
];
