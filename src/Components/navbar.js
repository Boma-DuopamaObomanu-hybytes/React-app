import React from 'react'
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Navbar() {
    const { t } = useTranslation(); 

  return (
    <div className="Navbar">
    <div>
      <p className="Navbar-text">{t("brandName")}</p>
    </div>
    <div className="Navbar-sidebar">
      <ul className="Navbar-list">
        <li>
          <Link to="/">{t("navHome")}</Link>
        </li>
        <li>
          <Link to="/about">{t("navAbout")}</Link>
        </li>
        <li>
          <Link to="/services">{t("navServices")}</Link>
        </li>
        <li>
          <Link to="/contact-us">{t("navContactUs")}</Link>
        </li>{" "}
        {/* Updated here */}
      </ul>
    </div>
  </div>

  )
}
