import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

function App() {
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
        <div  className="App-form">
          <h3>CONTACT US</h3>

          <input type="text" placeholder="Name"  />

          <input type="text" placeholder="Phone Number" />

          <input type="text" placeholder="Email " />

          <input type="text" placeholder="Message" />
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
