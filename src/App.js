import React, { useState } from "react";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import GoogleMapReact from "google-map-react";
import "font-awesome/css/font-awesome.min.css";
import client2 from "./images/images/client-2.jpg";
import client1 from "./images/images/client-1.jpg";
import s1 from "./images/images/s1.png";
import s2 from "./images/images/s2.png";
import s3 from "./images/images/s3.png";
import profImage from "./images/images/professional-img.png";
import aboutImage from "./images/images/about-img.jpg";
import slider from "./images/images/slider-img.png";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Jorch Morik",
      image: client1,
      text: "Chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words.",
      rating: 5,
    },
    {
      name: "Jorch Morik",
      image: client2,
      text: "Chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words.",
      rating: 5,
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

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
        <div>
          <h1>
            Repair and Maintenance 
            Services
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui harum
            voluptatem adipisci. Quos molestiae saepe dicta nobis pariatur,
            tempora iusto, ad possimus soluta hic praesentium mollitia
            consequatur beatae, aspernatur culpa.
          </p>
          <a href="">
                Contact Us
              </a>
        </div>
        <div>
          <img src={slider} alt="sliderImage" style={{width:50,height:50}}/>
        </div>
      </section>

      <section>
        <div>
          <img
            src={aboutImage}
            alt="aboutImage"
            style={{ width: "50px", height: "50px" }}
          />
          <h2>About Us</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomisedThere are many variations of passages of Lorem
            Ipsum available, but the majority have suffered alteration in some
            form, by injected humour, or randomised
          </p>
          <a href="">Read More</a>
        </div>
      </section>

      <section> 
        <div className="App-professional-layout">
          <img
            src={profImage}
            alt="professionalImage"
            style={{ width: "50px", height: "50px" }}
          />
          <div>
            <h2>
              We Provide Professional
              <br></br>
              Home Services.
            </h2>
            <p>
              randomised words which don't look even slightly believable. If you
              are going to use a passage of Lorem Ipsum, you need to be sure
              there isn't anything embarrassing hidden in the middle of text.
              All randomised words which don't look even slightly
            </p>
            <a href="">Read More</a>
          </div>
        </div>
      </section>

      <section>
        <h4>OUR SERVICES</h4>
        <div className="App-services-container">
          <div className="card">
            <h5>Maintenance</h5>
            <img
              src={s1}
              alt="maintenance"
              style={{ width: "50px", height: "50px" }}
            />
            <p>
              when looking at its layout. The point of using Lorem Ipsum is that
              it has a more-or-less normal
            </p>
          </div>
          <div className="card">
            <h5>Electrical</h5>
            <img
              src={s2}
              alt="maintenance"
              style={{ width: "50px", height: "50px" }}
            />
            <p>
              when looking at its layout. The point of using Lorem Ipsum is that
              it has a more-or-less normal
            </p>
          </div>
          <div className="card">
            <h5>Plumbing</h5>
            <img
              src={s3}
              alt="maintenance"
              style={{ width: "50px", height: "50px" }}
            />
            <p>
              when looking at its layout. The point of using Lorem Ipsum is that
              it has a more-or-less normal
            </p>
          </div>
        </div>
      </section>

      <div style={{ alignSelf: "center", justifyContent: "center" }}>
        <button>VIEW MORE</button>
      </div>

      <section>
        <h4>WHAT OUR CLIENT SAYS</h4>
        <div className="testimonial-container">
          <div className="card">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="profile-img"
            />
            <h3>{testimonials[currentIndex].name}</h3>
            <p>⭐⭐⭐⭐⭐</p>
            <p>{testimonials[currentIndex].text}</p>
          </div>
          <div className="buttons">
            <button onClick={handlePrev} className="btn">
              <i
                className="fa fa-long-arrow-left"
                style={{ color: "white" }}
              ></i>
            </button>
            <button onClick={handleNext} className="btn">
              <i
                className="fa fa-long-arrow-right"
                style={{ color: "white" }}
              ></i>
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="App-contact-us">
          <div className="App-form">
            <h3>CONTACT US</h3>

            <input type="text" placeholder="Name" className="input-shadow" />

            <input
              type="text"
              placeholder="Phone Number"
              className="input-shadow"
            />

            <input type="text" placeholder="Email " className="input-shadow" />

            <textarea
              type="text"
              placeholder="Message"
              className="input-shadow"
            />

            <button>SEND</button>
          </div>
          <div style={{ height: "50vh", width: "40%" }}>
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
