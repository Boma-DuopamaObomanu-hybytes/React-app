import React from 'react'
import GoogleMapReact from "google-map-react";
import { useTranslation } from "react-i18next";

export default function ContactUs() {

    const { t } = useTranslation(); 

    const AnyReactComponent = ({ text }) => <div>{text}</div>;

    const defaultProps = {
      center: {
        lat: 10.99835602,
        lng: 77.01502627,
      },
      zoom: 11,
    };


  return (
    <div>
        <section>
          <div className="App-contact-us">
            <div className="App-form">
              <h3>{t("contactUsHeader")}</h3>

              <input type="text" placeholder={t("namePlaceholder")} className="input-shadow" />

              <input
                type="text"
                placeholder={t("phonePlaceholder")}
                className="input-shadow"
              />

              <input
                type="text"
                placeholder={t("emailPlaceholder")}
                className="input-shadow"
              />

              <textarea
                type="text"
                placeholder={t("messagePlaceholder")}
                className="input-shadow"
              />

              <div>
                <a className="App-link-blue" href="">
                {t("sendButton")}
                </a>
              </div>
            </div>
            <div style={{ height: "40vh", width: "80%", alignContent:"center" }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
              >
                <AnyReactComponent
                  lat={59.955413}
                  lng={30.337844}
                  text={t("markerText")}
                />
              </GoogleMapReact>
            </div>
          </div>
        </section>
    </div>
  )
}
