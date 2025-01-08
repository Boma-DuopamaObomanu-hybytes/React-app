import React from "react";
import s1 from '../images/images/s1.png'
import s2 from '../images/images/s2.png'
import s3 from '../images/images/s3.png'
import { useTranslation } from "react-i18next";

export default function Service() {
    const { t } = useTranslation();

  return (
    <div>
      <section>
        <div>
          <h2 className="App-context-header">{t("ourServices")}</h2>
        </div>

        <div className="App-services-container">
          <div className="card">
            <img
              src={s1}
              alt={t("services.maintenance.alt")}
              style={{ width: "50px", height: "50px", alignSelf: "center" }}
            />
            <h5>{t("services.maintenance.title")}</h5>

            <p>
            {t("services.maintenance.description")}
            </p>
          </div>
          <div className="card">
            <img
              src={s2}
              alt={t("services.electrical.alt")}
              style={{ width: "50px", height: "50px", alignSelf: "center" }}
            />
            <h5>{t("services.electrical.title")}</h5>

            <p>
            {t("services.electrical.description")}
            </p>
          </div>
          <div className="card">
            <img
              src={s3}
              alt={t("services.plumbing.alt")}
              style={{ width: "50px", height: "50px", alignSelf: "center" }}
            />
            <h5>{t("services.plumbing.title")}</h5>

            <p>
            {t("services.plumbing.description")}
            </p>
          </div>
        </div>
      </section>

      <div
        style={{
          alignSelf: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <a className="App-link-blue" href="">
        {t("viewMore")} 
        </a>
      </div>
    </div>
  );
}
