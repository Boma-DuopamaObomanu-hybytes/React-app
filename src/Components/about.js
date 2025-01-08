import React from 'react'
import AboutImage from "../images/images/about-img.jpg";
import { useTranslation } from "react-i18next";

export default function About() {
    const { t } = useTranslation();


  return (
    <div>
       <section>
          <div className="App-about-layout">
            <div className="App-about-container-text">
              <h2>{t("aboutTitle")}</h2>
              <p>
              {t("aboutDescription")}
              </p>
              <a className="App-link-blue" href="">
              {t("readMore")}
              </a>
            </div>
            <div>
              <img
                src={AboutImage}
                alt={t("aboutImageAlt")}
                style={{ width: 500, height: 500 }}
              />
            </div>
          </div>
        </section>
    </div>
  )
}
