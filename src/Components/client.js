import React, { useState} from "react";
import client2 from "../images/images/client-2.jpg";
import client1 from "../images/images/client-1.jpg";
import { useTranslation } from "react-i18next";

export default function Client() {
    const { t } = useTranslation();


    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handlePrev = () => {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
          );
          setIsTransitioning(false);
        }, 300); // Match this duration to the CSS transition duration
      };
    
      const handleNext = () => {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
          setIsTransitioning(false);
        }, 300); // Match this duration to the CSS transition duration
      };
   
    const testimonials = [
        
        {
          name: t("testimonials.0.name"),
          image: client1,
          text: t("testimonials.0.text"),
          rating: 5,
        },
        {
          name: t("testimonials.1.name"),
          image: client2,
          text: t("testimonials.1.text"),
          rating: 5,
        },
      ];
    

      

  return (
    
    <div>
       <div>
          <h2 className="App-context-header">{t("header")}</h2>
        </div>

        <div className="testimonial-container">
          <div className="card-wrapper">
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

            <div className="card">
              <img
                src={
                  testimonials[(currentIndex + 1) % testimonials.length].image
                }
                alt={
                  testimonials[(currentIndex + 1) % testimonials.length].name
                }
                className="profile-img"
              />
              <h3>
                {testimonials[(currentIndex + 1) % testimonials.length].name}
              </h3>
              <p>⭐⭐⭐⭐⭐</p>
              <p>
                {testimonials[(currentIndex + 1) % testimonials.length].text}
              </p>
            </div>
          </div>

          <div className="buttons">
            <button onClick={handlePrev} className="btn">
              <i
                className="fa fa-long-arrow-left"
                style={{ color: "white" }}
              ></i>
              {/* {t("buttons.prev")} */}
            </button>
            <button onClick={handleNext} className="btn">
              <i
                className="fa fa-long-arrow-right"
                style={{ color: "white" }}
              ></i>
              {/* {t("buttons.next")} */}
            </button>
          </div>
        </div>
    </div>
  )
}
