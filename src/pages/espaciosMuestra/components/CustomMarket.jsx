import L from "leaflet";
import "leaflet/dist/leaflet.css";
import MakrerUrl from "./../../../../public/assets/img/espacios/pico.svg";
import { Marker, useMap } from "react-leaflet";

const CustomMarker = ({ position, children }) => {
    const map = useMap();

    const customIcon = L.icon({
        iconUrl: MakrerUrl,
        iconSize: [50, 50],
        iconAnchor: [25, 50],
    });

    return (
        <Marker position={position} icon={customIcon}>
            {children}
        </Marker>
    );
};

export default CustomMarker;
