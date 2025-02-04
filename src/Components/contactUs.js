import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import { useTranslation } from "react-i18next";
import app from "../firebaseConfig.js";

import {
  getDatabase,
  ref,
  set,
  push,
  query,
  orderByChild,
  get,
  remove,
} from "firebase/database";

export default function ContactUs() {
  let [inputName, setInputName] = useState("");
  let [inputEmail, setInputEmail] = useState("");
  let [inputNumber, setInputNumber] = useState("");

  const submitForm = async () => {
    console.log("submit function triggered");
    const db = getDatabase(app);
    const newDocRef = push(ref(db, "contacts/people"));
    console.log("Writing to: ", newDocRef.toString());

    if (inputName === "" || inputNumber === "" || inputEmail === "") {
      alert("Please input all details correctly");
    } else {
      await set(newDocRef, {
        fullName: inputName,
        emailAddress: inputEmail,
        phoneNumber: inputNumber,
      })
        .then(() => {
          alert("data saved successfully");
          setInputEmail("");
          setInputName("");
          setInputNumber("");
        })
        .catch((error) => {
          console.error("Error saving data: ", error);
          alert("Error: " + error.message);
        });
    }
  };

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

            <input
              type="text"
              placeholder={t("namePlaceholder")}
              className="input-shadow"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
            />

            <input
              type="text"
              placeholder={t("phonePlaceholder")}
              className="input-shadow"
              value={inputNumber}
              onChange={(e) => setInputNumber(e.target.value)}
            />

            <input
              type="text"
              placeholder={t("emailPlaceholder")}
              className="input-shadow"
              value={inputEmail}
              onChange={(e) => setInputEmail(e.target.value)}
            />

            <textarea
              type="text"
              placeholder={t("messagePlaceholder")}
              className="input-shadow"
            />

            <div>
              <a
                onClick={(e) => {
                  e.preventDefault(); // Prevents page reload
                  submitForm();
                }}
                className="App-link-blue"
                href=""
              >
                {t("sendButton")}
              </a>
            </div>
          </div>
          <div style={{ height: "40vh", width: "80%", alignContent: "center" }}>
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
  );
}
