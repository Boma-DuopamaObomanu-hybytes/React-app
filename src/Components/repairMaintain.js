import React from 'react'
import slider from "../images/images/slider-img.png";
import { useTranslation } from "react-i18next";

export default function RepairMaintain() {
    const { t } = useTranslation();


  return (
    <div>
       <section className="App-section">
          <div className="App-main-layout">
            <div className="App-text-container">
              <h1 className="App-h1-text">{t("repairMaintain.header")}</h1>
              <p>
              {t("repairMaintain.text")}
              </p>
              <a className="App-link-orange" href="">
              {t("repairMaintain.contactUs")}
              </a>
            </div>
            <div className="App-image-container">
              <img
                src={slider}
                alt="sliderImage"
                className="App-slider-image"
              />
            </div>
          </div>
        </section>
    </div>
  )
}
