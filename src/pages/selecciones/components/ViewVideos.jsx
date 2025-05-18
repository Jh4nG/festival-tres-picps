import { useEffect, useState } from "react";
import { SeleccionesJSON } from "../../../resources/selecciones";
import { Placeholder } from "react-bootstrap";
import { IconClose } from "../../../assets/Icons";
import { scrollToElement } from "../../../helpers/pages";

export const ViewVideos = () => {
    const [category, setCategory] = useState("");
    const [section, setSection] = useState("");
    const [viewVideos, setViewVideos] = useState(null);
    const [videoSelected, setVideoSelected] = useState(null);

    const handleCategory = (e) => {
        setVideoSelected(null);
        setViewVideos(null);
        const value = e.target.value;
        setCategory(value);
        setSection("");
        setTimeout(() => {
            handleViewVideos(value, "");
        }, 500);
    };

    const handleSection = (e) => {
        setVideoSelected(null);
        const value = e.target.value;
        setSection(value);
        handleViewVideos(category, value);
    };

    const handleViewVideos = (category = "", section = "") => {
        setViewVideos(
            section != ""
                ? SeleccionesJSON.videos.filter(
                      (v) => v.category == category && v.section == section
                  )
                : category != ""
                ? SeleccionesJSON.videos.filter((v) => v.category == category)
                : SeleccionesJSON.videos
        );
    };

    const shortDescription = (text = "") => {
        return text.length > 150 ? `${text.substring(0, 150)}...` : text;
    };

    const renderSkeleton = (i) => {
        return (
            <div
                className="col-12 col-sm-6 col-md-4 selecciones-skeleton"
                key={i}
            >
                <Placeholder as="image" animation="glow">
                    <Placeholder xs={12} className="selecciones-skeleton-img" />
                </Placeholder>
                <Placeholder as={"text"} animation="glow">
                    <Placeholder xs={6} />
                </Placeholder>
                <Placeholder as={"text"} animation="glow">
                    <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                    <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                    <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                    <Placeholder xs={8} />
                    <Placeholder xs={5} />
                </Placeholder>
            </div>
        );
    };

    const skeleton = [
        renderSkeleton(1),
        renderSkeleton(2),
        renderSkeleton(3),
        renderSkeleton(4),
        renderSkeleton(5),
        renderSkeleton(6),
    ];

    const handleVideoSelected = (e) => {
        setVideoSelected(e);
        setTimeout(
            () => {
                scrollToElement("videoSelected");
            },
            videoSelected == null ? 100 : 0
        );
    };

    useEffect(() => {
        setTimeout(() => {
            setViewVideos(SeleccionesJSON.videos);
        }, 700);
    }, []);
    return (
        <div className="row">
            <div id="selectCategory" className="col-12 col-sm-6">
                <label>Categoría</label>
                <select
                    id="category"
                    name="category"
                    className="form-control"
                    onChange={handleCategory}
                >
                    <option value="">Todos</option>
                    {SeleccionesJSON.selecciones.map((c, i) => (
                        <option key={i} value={c.id}>
                            {c.title}
                        </option>
                    ))}
                </select>
            </div>
            <div className="col-12 col-sm-6">
                <label>Secciones</label>
                <select
                    id="section"
                    name="section"
                    className="form-control"
                    onChange={handleSection}
                >
                    <option value="">Todos</option>
                    {category &&
                        SeleccionesJSON.selecciones
                            .filter((s) => s.id == category)[0]
                            .subSections?.map((sS, i) => (
                                <option key={i} value={sS.id}>
                                    {sS.title}
                                </option>
                            ))}
                </select>
            </div>
            <div id="countVideos" className="col-12 mt-2">
                <p>Cantidad de vídeos: {viewVideos ? viewVideos.length : 0}</p>
            </div>

            {videoSelected && (
                <div
                    id="videoSelected"
                    className="row col-12 selecciones-selected m-0 p-0"
                >
                    <div className="d-flex justify-content-between col-12 mt-2">
                        <h3>{videoSelected.title}</h3>
                        <IconClose
                            width={"32px"}
                            className="mt-1 pointer"
                            onClick={() => setVideoSelected(null)}
                        />
                    </div>
                    <iframe
                        className="mt-2"
                        src={`https://www.youtube.com/embed/${videoSelected.path}`}
                        title={videoSelected.title}
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                    <i className="mt-2">
                        {
                            SeleccionesJSON.selecciones.find(
                                (c) => c.id == videoSelected.category
                            ).title
                        }{" "}
                        -{" "}
                        {SeleccionesJSON.selecciones.find(
                            (c) => c.id == videoSelected.category
                        ).subSections.length > 0
                            ? SeleccionesJSON.selecciones
                                  .find((c) => c.id == videoSelected.category)
                                  .subSections.find(
                                      (s) => s.id == videoSelected.section
                                  ).title
                            : videoSelected.section}
                    </i>
                    <p>{videoSelected.description}</p>
                </div>
            )}
            {viewVideos
                ? viewVideos?.map((v, i) => (
                      <div
                          key={i}
                          className="col-12 col-sm-6 col-md-4 animate__animated animate__zoomIn pointer selecciones-videos"
                          onClick={() => handleVideoSelected(v)}
                      >
                          <img
                              width={"100%"}
                              src={`https://img.youtube.com/vi/${
                                  v.path.split("?")[0]
                              }/0.jpg`}
                          />
                          <h5>{v.title}</h5>
                          <i>
                              {
                                  SeleccionesJSON.selecciones.find(
                                      (c) => c.id == v.category
                                  ).title
                              }{" "}
                              -{" "}
                              {SeleccionesJSON.selecciones.find(
                                  (c) => c.id == v.category
                              ).subSections.length > 0
                                  ? SeleccionesJSON.selecciones
                                        .find((c) => c.id == v.category)
                                        .subSections.find(
                                            (s) => s.id == v.section
                                        ).title
                                  : v.section}
                          </i>
                          <p>
                              {shortDescription(v.description)}{" "}
                              <span>Ver más.</span>
                          </p>
                      </div>
                  ))
                : skeleton.map((r) => r)}
        </div>
    );
};
