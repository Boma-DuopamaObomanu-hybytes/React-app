import { useState } from "react";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Footer({ switchToArabic, switchToEnglish }) {
  const { t, i18n } = useTranslation();
  const [direction, setDirection] = useState("ltr");

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
     // Dynamically switch language
  };



  // Function to switch language back to English (or any other language)


  return (
    <div>
      <footer className="App-footer">
        <p className="App-footer-text">{t("getInTouch")}</p>

        <div className="App-footer-info-container">
          <div className="App-footer-section-info-container">
            <div className="App-footer-container-image">
              <i
                aria-hidden="true"
                class="fa fa-map-marker"
                style={{ color: "white", fontSize: "25px", margin: "0 10px" }}
              ></i>
            </div>
            <p className="App-footer-info-container-text">
              {t("randomGeneratedText")}
            </p>
          </div>
          <hr width="60%" color="#626485" size="8" margin="40px 10px" />
          <div className="App-footer-section-info-container">
            <div className="App-footer-container-image">
              <i
                aria-hidden="true"
                class="fa fa-phone"
                style={{ color: "white", fontSize: "25px", margin: "0 10px" }}
              ></i>
            </div>
            <p className="App-footer-info-container-text">
              {t("randomGeneratedText")}
            </p>
          </div>
          <hr width="60%" color="#626485" size="8" />
          <div className="App-footer-section-info-container">
            <div className="App-footer-container-image">
              <i
                aria-hidden="true"
                class="fa fa-envelope"
                style={{ color: "white", fontSize: "25px", margin: "0 10px" }}
              ></i>
            </div>
            <p className="App-footer-info-container-text">
              {t("randomGeneratedText")}
            </p>
          </div>
        </div>

        <div>
          <p className="App-footer-text"> {t("followUs")} </p>
        </div>

        <div className="App-footer-social-container-images">
          <i
            aria-hidden="true"
            class="fa fa-facebook"
            style={{ color: "#0255CC", fontSize: "25px", margin: "0 10px" }}
          ></i>
          <i
            aria-hidden="true"
            class="fa fa-twitter"
            style={{ color: "#0255CC", fontSize: "25px", margin: "0 10px" }}
          ></i>
          <i
            aria-hidden="true"
            class="fa fa-youtube"
            style={{ color: "#0255CC", fontSize: "25px", margin: "0 10px" }}
          ></i>
          <i
            aria-hidden="true"
            class="fa fa-instagram"
            style={{ color: "#0255CC", fontSize: "25px", margin: "0 10px" }}
          ></i>
        </div>

        <hr width="50%" color="#626485" size="8" />

        <div className="copyright-info">
          <p className="App-footer-info-container-text">
            {" "}
            {/* ©<span id="displayDateYear">2024</span>  */}
            {t("allRightsReserved")}
            <a
              className="App-footer-info-container-text"
              href="https://html.design/"
            >
              {" "}
               {t("freeHtmlTemplates")}{" "}
            </a>
          </p>
        </div>

        {/* Language Switcher Buttons */}
        <div style={{ marginTop: "20px" }}>
          <button onClick={switchToArabic} style={{ margin: "0 10px" }}>
            {t("switchToArabic")}
          </button>
          <button onClick={switchToEnglish} style={{ margin: "0 10px" }}>
            {t("switchToEnglish")}
          </button>
        </div>
      </footer>
    </div>
  );
}
