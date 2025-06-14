import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.png"

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (lng, event) => {
    event.preventDefault();
    event.stopPropagation();

    i18n.changeLanguage(lng);

    const dropdownMenu = document.getElementById("dropdownMenuButton");
    if (dropdownMenu) {
      const dropdown = new bootstrap.Dropdown(dropdownMenu);
      dropdown.hide();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container d-flex align-items-center justify-content-between">
        <Link className="navbar-brand d-flex align-items-center" to="/" style={{ lineHeight: "1.1" }}>
          <img
            src={logo}
            alt="Logo"
            className="logo-shadow"
            style={{ height: "120px", marginRight: "10px" }}
          />
          <div className="text-center custom-navbar-text">
            <div>Pies en el</div>
            <div className="fw-bold">Bosque</div>
          </div>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">{t("home")}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pies">{t("What is feet in the forest?")}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/nosotros">{t("About us")}</Link>
            </li>
             <li className="nav-item">
              <Link className="nav-link" to="/galeria">{t("Gallery")}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/guardian">{t("Be the guardian of the forest")}</Link>
            </li>
            <li className="nav-item dropdown">
              <button
                className="btn btn-outline-secondary btn-sm dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {i18n.language === "es" ? "Español" : "English"}
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li>
                  <button className="dropdown-item" onClick={(event) => handleChangeLanguage("es", event)}>
                    Español
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" onClick={(event) => handleChangeLanguage("en", event)}>
                    English
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
