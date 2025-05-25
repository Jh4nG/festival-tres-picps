import { useState } from "react";
import { IconClose, IconMenu } from "../../assets/Icons";
import { HeaderJson } from "../../resources/header";
import { useNavigate } from "react-router-dom";
import { scrollToElement } from "../../helpers/pages";
import "./../../styles/pages/_header.scss";

export const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const navigate = useNavigate();

    const renderListItem = (header) => {
        const path = window.location.pathname;
        return (
            <div
                className={`my-2 header__list__link ${
                    path == `/${header.redirect}` && "active"
                }`}
                key={header.id}
                onClick={() => {
                    if (path === `/${header.redirect}`) {
                        return;
                    }
                    navigate(`/${header.redirect}`);
                    setTimeout(() => {
                        scrollToElement(header.redirect);
                    }, 200);
                }}
            >
                {header.name}
            </div>
        );
    };

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <div id="header" className="header">
            <div className="d-flex justify-content-between mx-0">
                <div className="header__img col-4">
                    <img
                        className="my-lg-2 mx-4 pointer"
                        src={HeaderJson.img}
                        onClick={() => navigate("/inicio")}
                    />
                </div>
                <div className="d-none d-md-flex header__list col-8 col-md-8 col-lg-7 col-xl-6 justify-content-between align-self-center">
                    {HeaderJson.headers.map((header) => renderListItem(header))}
                </div>

                <div className="d-flex d-md-none col-6 justify-content-end px-4">
                    <IconMenu
                        width={"35px"}
                        className="pointer"
                        onClick={handleOpenMenu}
                    />
                </div>
                {openMenu && (
                    <div className="d-block d-md-none header__list">
                        <div className="d-flex d-md-none col-12 justify-content-end px-3 mt-4">
                            <IconClose
                                width={"32px"}
                                className="mt-1 pointer"
                                onClick={handleOpenMenu}
                            />
                        </div>
                        <div className="d-flex justify-content-center">
                            <div className="row col-11 mx-0 mt-4">
                                {HeaderJson.headers.map((header) =>
                                    renderListItem(header)
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
