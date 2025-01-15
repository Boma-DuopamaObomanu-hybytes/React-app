import React, {useState,useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "font-awesome/css/font-awesome.min.css";
import "../src/styles/App.css";
import Header from "./Components/header.js";
import RepairMaintain from "./Components/repairMaintain.js";
import Feature from "./Components/feature.js";
import AboutUs from "./Components/about.js";
import Professional from "./Components/professional.js";
import Service from "./Components/service.js";
import Client from "./Components/client.js";
import ContactUs from "./Components/contactUs.js";
import Navbar from "./Components/navbar.js";
import Footer from "./Components/footer.js";
import { useTranslation } from "react-i18next";

function App() {

  const [direction, setDirection] = useState("ltr"); // Default to English (LTR)
  const { t, i18n } = useTranslation();

  const canonicalUrl = i18n.language === "ar"
  ? "https://example.com/ar/mainPage"
  : "https://example.com/en/mainPage";


  const updateDirection = (lang) => {
    if (lang === "ar") {
      setDirection("rtl");
    } else {
      setDirection("ltr");
    }
  };

  // Run on language change
  useEffect(() => {
    updateDirection(i18n.language); // Set initial direction based on the current language

    // Listen for language changes and update direction
    const handleLanguageChange = (lang) => {
      updateDirection(lang);
    };

    i18n.on("languageChanged", handleLanguageChange);

    // Cleanup listener on unmount
    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [i18n]);



  const switchToArabic = () => {
    i18n.changeLanguage("ar");
    setDirection("rtl");
     // 'ar' is the language code for Arabic
  };

  const switchToEnglish = () => {
    i18n.changeLanguage("en"); 
    setDirection("ltr");
    // 'en' is the language code for English
  };
  

  return (
    
      /*
      Structure of the Components
      <Header/>
      <Navbar/>
      <repairMaintain/>
      <feature/>
      <aboutUS/>
      <profession/>
      <services/>
      <client/>
      <contactUs/>
      <footer/>
      
      */

    <div className="App"style={{ direction: direction }} >
       <head>
        <link rel="canonical" href={canonicalUrl} />
        </head>

      <Header />
      <Navbar />
      <RepairMaintain />
      <Feature />
      <AboutUs />
      <Professional />
      <Service />
      <Client />
      <ContactUs />
      <Footer switchToArabic={switchToArabic} switchToEnglish={switchToEnglish} />

    </div>
  );
}

export default App;
