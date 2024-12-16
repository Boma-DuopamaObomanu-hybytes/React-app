import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutPage from "../Components/aboutPage";
import ServicePage from "../Components/servicePage";
import ContactUspage from "../Components/contactUspage";
import React from "react";
import App from "../App";

export default function routes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />} /> {/* Define your Home component */}
        <Route path="/about" element={<AboutPage />} />{" "}
        {/* Define your About component */}
        <Route path="/services" element={<ServicePage />} />{" "}
        {/* Define your Services component */}
        <Route path="/contact-us" element={<ContactUspage />} />{" "}
        {/* Contact Us */}
      </Routes>
    </div>
  );
}
