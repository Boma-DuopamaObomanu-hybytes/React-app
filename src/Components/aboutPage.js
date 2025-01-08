import React, {useState} from "react";
import "../styles/App.css";
import About from "./about.js";
import Header from "./header.js";
import Navbar from "./navbar.js";
import Footer from "./footer.js";
import { useTranslation } from "react-i18next";

export default function AboutPage() {
    const [direction, setDirection] = useState("ltr"); // Default to English (LTR)
    const { t, i18n } = useTranslation();
  
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
      <Header />
      <Navbar/>
      <About />
      <Footer switchToArabic={switchToArabic} switchToEnglish={switchToEnglish}/>
    </div>
  );
}
