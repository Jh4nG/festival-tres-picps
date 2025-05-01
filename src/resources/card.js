import { HeaderJson } from "./header";

export const CardJSON = [
    {
        id: 1,
        number: 5,
        title: HeaderJson.headers.find((h) => h.id === "espacios").name,
        description: "Esta es la descripción de espacios de muestra",
        path: HeaderJson.headers.find((h) => h.id === "espacios").redirect,
    },
    {
        id: 2,
        number: 10,
        title: HeaderJson.headers.find((h) => h.id === "selecciones").name,
        description: "Esta es la descripción de secciones",
        path: HeaderJson.headers.find((h) => h.id === "selecciones").redirect,
    },
    {
        id: 3,
        number: 15,
        title: HeaderJson.headers.find((h) => h.id === "invitados").name,
        description: "Esta es la descripción de invitados",
        path: HeaderJson.headers.find((h) => h.id === "invitados").redirect,
    },
];
