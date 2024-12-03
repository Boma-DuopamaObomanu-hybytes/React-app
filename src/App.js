import React from "react";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import GoogleMapReact from "google-map-react";

function App() {
  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className=" App-header-banner">
          <i
            aria-hidden="true"
            class="fa fa-phone"
            style={{ color: "#FF8A1E", fontSize: "25px", margin: "0 10px" }}
          ></i>
          <p className="App-header-text"> Call : +01 123455678990</p>
        </div>
        <div className="App-header-banner" aria-hidden="true">
          <i
            class="fa fa-envelope"
            style={{ color: "#FF8A1E", fontSize: "25px", margin: "0 10px" }}
          ></i>
          <p className="App-header-text"> Email : demo@gmail.com</p>
        </div>
      </header>

      <div className="Navbar">
        <div>
          <p className="Navbar-text">INANCE</p>
        </div>
        <div className="Navbar-sidebar">
          <ul className="Navbar-list">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>


      <section>
        <h3>WHAT OUR CLIENT SAYS</h3>
        <div>
          <div></div>
          <div></div>
          <button><i class="fa fa-long-arrow-left" aria-hidden="true"></i></button><button><i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>
        </div>
      </section>

      <section>
        <div className="App-contact-us">
          <div className="App-form">
            <h3>CONTACT US</h3>

            <input type="text" placeholder="Name" className="input-shadow" />

            <input type="text" placeholder="Phone Number" className="input-shadow" />

            <input type="text" placeholder="Email "  className="input-shadow"/>

            <textarea type="text" placeholder="Message" className="input-shadow" />


            <button>SEND</button>

          </div>
          <div style={{  height: "50vh", width: "40%" }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
              />
            </GoogleMapReact>
          </div>
        </div>
      </section>

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
  );
}

export default App;
