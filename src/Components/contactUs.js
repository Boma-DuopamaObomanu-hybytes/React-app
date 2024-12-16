import React from 'react'
import GoogleMapReact from "google-map-react";

export default function contactUs() {

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
              <h3>CONTACT US</h3>

              <input type="text" placeholder="Name" className="input-shadow" />

              <input
                type="text"
                placeholder="Phone Number"
                className="input-shadow"
              />

              <input
                type="text"
                placeholder="Email "
                className="input-shadow"
              />

              <textarea
                type="text"
                placeholder="Message"
                className="input-shadow"
              />

              <div>
                <a className="App-link-blue" href="">
                  SEND
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
                  text="My Marker"
                />
              </GoogleMapReact>
            </div>
          </div>
        </section>
    </div>
  )
}
