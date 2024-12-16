import React from 'react'

export default function footer() {
  return (
    <div>
        <footer className="App-footer">
        <p className="App-footer-text">Get in Touch</p>

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
              Random Generated Text
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
              Random Generated Text
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
              Random Generated Text
            </p>
          </div>
        </div>

        <div>
          <p className="App-footer-text"> Follow US </p>
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
            ©<span id="displayDateYear">2024</span> All Rights Reserved By
            <a
              className="App-footer-info-container-text"
              href="https://html.design/"
            >
              {" "}
              Free Html Templates{" "}
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
