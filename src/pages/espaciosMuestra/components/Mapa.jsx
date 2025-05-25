import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import CustomMarker from "./CustomMarket";

export const MapaEspacios = ({ positionInit, espaciosMap }) => {
    const zoomInit = window.innerWidth < 768 ? 13 : 16;
    return (
        <MapContainer
            center={positionInit}
            zoom={zoomInit}
            scrollWheelZoom={false}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {espaciosMap.map(
                (e) =>
                    e.position && (
                        <CustomMarker position={e.position} key={e.id}>
                            <Popup className="espacios-muestra__market">
                                <div className="espacios-muestra__market__div">
                                    <img
                                        src={
                                            e.img != ""
                                                ? e.img
                                                : "./assets/img/espacios/temp.svg"
                                        }
                                    />
                                </div>
                                <h3>{e.title}</h3>
                                <div
                                    className="espacios-muestra__market__description"
                                    dangerouslySetInnerHTML={{
                                        __html: e.description,
                                    }}
                                ></div>
                            </Popup>
                        </CustomMarker>
                    )
            )}
        </MapContainer>
    );
};
