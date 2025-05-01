import { HeaderJson } from "./header";

export const ActivityJSON = {
    title: "¡Conozca nuestra actividades y proyectos!",
    activitys: [
        {
            id: "1",
            title: "Edison González",
            description: "Director de proyectos",
            img: "./assets/img/invitados/principales/Ed.jpg",
            path: HeaderJson.headers.find((h) => h.id === "invitados").redirect,
        },
        {
            id: "2",
            title: "Laura Mora",
            description: "Directora de arte",
            img: "./assets/img/invitados/principales/Laura.jpg",
            path: HeaderJson.headers.find((h) => h.id === "invitados").redirect,
        },
        {
            id: "3",
            title: "Geovanny Hernandez",
            description: "Director del estrés",
            img: "./assets/img/invitados/principales/Geo.jpg",
            path: HeaderJson.headers.find((h) => h.id === "invitados").redirect,
        },
    ],
    proyects: [
        {
            id: "1",
            title: "Aleteo transmedia",
            description: "Página web",
            img: "./assets/img/invitados/proyectos/Aleteo.png",
            path: "",
        },
        {
            id: "2",
            title: "Museo Interactivo",
            description: "Museo virtual de aleteo",
            img: "./assets/img/invitados/proyectos/Museo.png",
            path: "",
        },
        {
            id: "3",
            title: "DI rostros y espacios",
            description: "Una muestra de nuestros proyectos locales",
            img: "./assets/img/invitados/proyectos/DI.webp",
            path: "",
        },
    ],
};
