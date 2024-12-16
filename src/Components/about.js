import React from 'react'
import AboutImage from "../images/images/about-img.jpg";

export default function about() {
  return (
    <div>
       <section>
          <div className="App-about-layout">
            <div className="App-about-container-text">
              <h2>About Us</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomisedThere are many variations of
                passages of Lorem Ipsum available, but the majority have
                suffered alteration in some form, by injected humour, or
                randomised
              </p>
              <a className="App-link-blue" href="">
                Read More
              </a>
            </div>
            <div>
              <img
                src={AboutImage}
                alt="aboutImage"
                style={{ width: 500, height: 500 }}
              />
            </div>
          </div>
        </section>
    </div>
  )
}
