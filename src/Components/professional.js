import React from 'react'
import profImage from "../images/images/professional-img.png";

export default function professional() {
  return (
    <div>
       <section>
          <div className="App-professional-layout">
            <img
              src={profImage}
              alt="professionalImage"
              style={{ width: 500, height: 500 }}
            />
            <div className="App-professional-container-text">
              <h2 className="App-h1-text">
                We Provide Professional
                <br></br>
                Home Services.
              </h2>
              <p>
                randomised words which don't look even slightly believable. If
                you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn't anything embarrassing hidden in the middle of
                text. All randomised words which don't look even slightly
              </p>
              <div>
                <a className="App-link-orange" href="">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}
