import React from 'react'
import profImage from "../images/images/professional-img.png";
import { useTranslation } from "react-i18next";

export default function Professional() {
    const { t } = useTranslation();
    
  return (
    <div>
       <section>
          <div className="App-professional-layout">
            <img
              src={profImage}
              alt={t("professional.imageAlt")}
              style={{ width: 500, height: 500 }}
            />
            <div className="App-professional-container-text">
              <h2 className="App-h1-text">
              {t("professional.title")}
              </h2>
              <p>
              {t("professional.description")}
              </p>
              <div>
                <a className="App-link-orange" href="">
                {t("professional.readMore")}
                </a>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}
