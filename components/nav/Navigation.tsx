import { useState } from "react";
import WebMenu from "./WebMenu";

const Navigation = () => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle: React.CSSProperties = {
    backgroundColor: isHovered ? "#222" : "#000",
    borderRadius: "5px",
    color: isHovered ? "#fff" : "#fff",
    textDecoration: "none",
    background: "none",
    border: "none",
    cursor: "pointer",
    transition: "color 0.3s ease",
    fontSize: ".8rem",
    padding: "5px 10px",
    maxHeight: "40px"
  };

  return (
    <div className="nav">
      <section className="logo-section">
        <img
          className="logo-small"
          id="web-logo"
          src="logo/blk-site-logo.png"
        />
        <img
          className="logo-small"
          id="mobile-logo"
          src="logo/anchor-logo.png"
        />
      </section>
      <section className="menu-section">
        <WebMenu />
      </section>
      <section className="cart-section">
        <button
          onClick={() => window.open("https://m.me/Deck14MobileBar", "_blank")}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          rel="noopener noreferrer"
          style={buttonStyle}
        >
          Message Us
        </button>
      </section>
    </div>
  );
};

export default Navigation;
