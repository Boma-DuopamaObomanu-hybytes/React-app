import React from 'react'
import slider from "../images/images/slider-img.png";

export default function repairMaintain() {
  return (
    <div>
       <section className="App-section">
          <div className="App-main-layout">
            <div className="App-text-container">
              <h1 className="App-h1-text">Repair and Maintenance Services</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                harum voluptatem adipisci. Quos molestiae saepe dicta nobis
                pariatur, tempora iusto, ad possimus soluta hic praesentium
                mollitia consequatur beatae, aspernatur culpa.
              </p>
              <a className="App-link-orange" href="">
                Contact Us
              </a>
            </div>
            <div className="App-image-container">
              <img
                src={slider}
                alt="sliderImage"
                className="App-slider-image"
              />
            </div>
          </div>
        </section>
    </div>
  )
}
