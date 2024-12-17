import React from "react";
import s1 from '../images/images/s1.png'
import s2 from '../images/images/s2.png'
import s3 from '../images/images/s3.png'

export default function service() {
  return (
    <div>
      <section>
        <div>
          <h2 className="App-context-header">OUR SERVICES</h2>
        </div>

        <div className="App-services-container">
          <div className="card">
            <img
              src={s1}
              alt="maintenance"
              style={{ width: "50px", height: "50px", alignSelf: "center" }}
            />
            <h5>Maintenance</h5>

            <p>
              when looking at its layout. The point of using Lorem Ipsum is that
              it has a more-or-less normal
            </p>
          </div>
          <div className="card">
            <img
              src={s2}
              alt="maintenance"
              style={{ width: "50px", height: "50px", alignSelf: "center" }}
            />
            <h5>Electrical</h5>

            <p>
              when looking at its layout. The point of using Lorem Ipsum is that
              it has a more-or-less normal
            </p>
          </div>
          <div className="card">
            <img
              src={s3}
              alt="maintenance"
              style={{ width: "50px", height: "50px", alignSelf: "center" }}
            />
            <h5>Plumbing</h5>

            <p>
              when looking at its layout. The point of using Lorem Ipsum is that
              it has a more-or-less normal
            </p>
          </div>
        </div>
      </section>

      <div
        style={{
          alignSelf: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <a className="App-link-blue" href="">
          View More
        </a>
      </div>
    </div>
  );
}