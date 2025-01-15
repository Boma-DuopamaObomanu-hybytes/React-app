import React, {useState,useEffect} from "react";
import "../styles/App.css";
import About from "./about.js";
import Header from "./header.js";
import Navbar from "./navbar.js";
import Footer from "./footer.js";
import { useTranslation } from "react-i18next";

export default function AboutPage() {
    const [direction, setDirection] = useState("ltr"); // Default to English (LTR)
    const { t, i18n } = useTranslation();
    const canonicalUrl = i18n.language === "ar"
    ? "https://example.com/ar/about"
    : "https://example.com/en/about";

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
    <div className="App"style={{ direction: direction }} >
        <head>
        <link rel="canonical" href={canonicalUrl} />
        </head>
      <Header />
      <Navbar/>
      <About />
      <Footer switchToArabic={switchToArabic} switchToEnglish={switchToEnglish}/>
    </div>
  );
}
