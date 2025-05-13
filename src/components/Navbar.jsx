import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container d-flex align-items-center justify-content-between">
        <Link className="navbar-brand" to="/">
          Pies sobre el <b>bosque</b>
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
              <Link className="nav-link" to="/about">{t("about")}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/proyecto">{t("project")}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/galeria">{t("gallery")}</Link>
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
