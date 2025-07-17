import { useEffect } from "react";
import Navigation from "../../components/nav/Navigation";
declare global {
  interface Window {
    jotformEmbedHandler?: (iframeSelector: string, url: string) => void;
  }
}
const GetQuotePage = () => {
  useEffect(() => {
    // Dynamically load the form handler only when this page mounts
    const script = document.createElement("script");
    script.src = "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js";
    script.async = true;
    script.onload = () => {
      if (window.jotformEmbedHandler) {
        window.jotformEmbedHandler(
          "iframe[id='JotFormIFrame-233018541248452']",
          "https://form.jotform.com/"
        );
      }
    };
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <div>
      <Navigation />
      <h1>Get a Quote</h1>
      <iframe
        id="JotFormIFrame-233018541248452"
        title="Deck14 Mobile Bar Booking"
        allow="geolocation; microphone; camera; fullscreen; payment"
        src="https://form.jotform.com/233018541248452"
        frameBorder="0"
        style={{
          minWidth: "100%",
          maxWidth: "100%",
          height: "539px",
          border: "none",
        }}
        scrolling="no"
      />
    </div>
  );
};

export default GetQuotePage;
