import React, {useState} from 'react'
import ContactUs from './contactUs.js'
import Header from './header.js'
import Footer from './footer.js'
import Navbar from './navbar.js'
import { useTranslation } from "react-i18next";


export default function ContactUspage() {
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
    <div className="App"style={{ direction: direction }}>
      <Header/>
      <Navbar/>
      <ContactUs/>
      <Footer switchToArabic={switchToArabic} switchToEnglish={switchToEnglish}/>
    </div>
  )
}
