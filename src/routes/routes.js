import { BrowserRouter as Router, Route, Routes,useNavigate,useLocation } from "react-router-dom";
import AboutPage from "../Components/aboutPage.js";
import ServicePage from "../Components/servicePage.js";
import ContactUspage from "../Components/contactUspage.js";
import React, { useEffect } from "react";
import App from "../App.js";
import { useTranslation } from "react-i18next";

export default function MainRoutes() {
    const { i18n } = useTranslation();
    const navigate = useNavigate();  // Hook to navigate programmatically
    const location = useLocation();  // Get the current location (URL path)
  
    // Handle language switching and update URL accordingly
    useEffect(() => {
      const currentPath = location.pathname;
  
      // If current language is Arabic, update the URL accordingly
      if (i18n.language === "ar") {
        if (currentPath === "/about") {
          navigate("/عن-نا");
        } else if (currentPath === "/services") {
          navigate("/خدمات");
        } else if (currentPath === "/contact-us") {
          navigate("/اتصل-بنا");
        }
      }
  
      // If current language is English, update the URL accordingly
      else if (i18n.language === "en") {
        if (currentPath === "/عن-نا") {
          navigate("/about");
        } else if (currentPath === "/خدمات") {
          navigate("/services");
        } else if (currentPath === "/اتصل-بنا") {
          navigate("/contact-us");
        }
      }
    }, [i18n.language, navigate, location]);

  return (
    <div>
      <Routes>
        {/* Define Routes */}
        <Route path="/" element={<App />} />
        <Route
          path={`/${i18n.language === "ar" ? "عن-نا" : "about"}`}
          element={<AboutPage />}
        />
        <Route
          path={`/${i18n.language === "ar" ? "خدمات" : "services"}`}
          element={<ServicePage />}
        />
        <Route
          path={`/${i18n.language === "ar" ? "اتصل-بنا" : "contact-us"}`}
          element={<ContactUspage />}
        />
      </Routes>
    </div>
  );
}
