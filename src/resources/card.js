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
    // {
    //     id: 2,
    //     number: 37, //SeleccionesJSON.videos.length,
    //     title: HeaderJson.headers.find((h) => h.id === "selecciones").name,
    //     description:
    //         "Mira las piezas seleccionadas del festival y descubre el cine que se hace en Suba.",
    //     path: HeaderJson.headers.find((h) => h.id === "selecciones").redirect,
    // },
    {
        id: 3,
        number: 5,
        title: HeaderJson.headers.find((h) => h.id === "invitados").name,
        description: "Perfiles de nuestros invitados y talleristas.",
        path: HeaderJson.headers.find((h) => h.id === "invitados").redirect,
    },
];
