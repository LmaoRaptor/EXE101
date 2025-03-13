// src/components/GoogleAnalytics.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GA_TRACKING_ID = "G-Z6T7QVJVBH"; // Thay bằng ID của bạn

const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Load Google Analytics khi component được mount
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_TRACKING_ID}');
    `;
    document.head.appendChild(script2);
  }, []);

  useEffect(() => {
    // Gửi sự kiện pageview khi route thay đổi
    if (window.gtag) {
      window.gtag("config", GA_TRACKING_ID, {
        page_path: location.pathname,
      });
    }
  }, [location]);

  return null;
};

export default GoogleAnalytics;
