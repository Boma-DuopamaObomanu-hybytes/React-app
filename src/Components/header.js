import React from 'react'
import { useTranslation } from "react-i18next";


export default function Header() {
    const { t } = useTranslation();

  return (
    <div>
       <header className="App-header">
        <div className=" App-header-banner">
          <i
            aria-hidden="true"
            class="fa fa-phone"
            style={{ color: "#FF8A1E", fontSize: "25px", margin: "0 10px" }}
          ></i>
          <p className="App-header-text"> {t("callLabel")}: {t("phoneNumber")}</p>
        </div>
        <div className="App-header-banner" aria-hidden="true">
          <i
            class="fa fa-envelope"
            style={{ color: "#FF8A1E", fontSize: "25px", margin: "0 10px" }}
          ></i>
          <p className="App-header-text"> {t("emailLabel")}: {t("emailAddress")}</p>
        </div>
      </header>
    </div>
  )
}
