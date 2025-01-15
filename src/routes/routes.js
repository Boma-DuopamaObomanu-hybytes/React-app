import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";
import AboutPage from "../Components/aboutPage.js";
import ServicePage from "../Components/servicePage.js";
import ContactUspage from "../Components/contactUspage.js";
import React, { useEffect } from "react";
import App from "../App.js";
import { useTranslation } from "react-i18next";

export default function MainRoutes() {
  const { i18n } = useTranslation();
  const navigate = useNavigate(); // Hook to navigate programmatically
  const location = useLocation(); // Get the current location (URL path)

  // Handle language prefix in the URL
  useEffect(() => {
    const { pathname } = location;
    const langPrefix = pathname.split("/")[1]; // Extract language prefix from the URL

    // Redirect to the correct language route if not properly prefixed
    if (!["ar", "en"].includes(langPrefix)) {
      navigate(`/${i18n.language}${pathname}`, { replace: true });
    }
  }, [i18n.language, navigate, location]);

  return (
    <div>
      <Routes>
        {/* Dynamic Language Routes */}
        <Route path="/:lang" element={<App />} />
        <Route path="/:lang/about" element={<AboutPage />} />
        <Route path="/:lang/services" element={<ServicePage />} />
        <Route path="/:lang/contact-us" element={<ContactUspage />} />
        <Route path="/:lang/عن-نا" element={<AboutPage />} />
        <Route path="/:lang/خدمات" element={<ServicePage />} />
        <Route path="/:lang/اتصل-بنا" element={<ContactUspage />} />

        {/* Redirect to default language if route doesn't match */}
        <Route path="*" element={<NavigateToDefaultLanguage />} />
      </Routes>
    </div>
  );
}

// Helper Component to Redirect to the Default Language
function NavigateToDefaultLanguage() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/${i18n.language}`, { replace: true });
  }, [i18n.language, navigate]);

  return null;
}
