import { useState } from "react";
import WebMenu from "./WebMenu";
import MobileMenu from "./MobileMenu";

const Navigation = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const buttonStyle: React.CSSProperties = {
    backgroundColor: "#222",
    borderRadius: "5px",
    color: "#fff",
    textDecoration: "none",
    border: "none",
    cursor: "pointer",
    transition: "color 0.3s ease",
    fontSize: ".8rem",
    padding: "5px 10px",
    maxHeight: "40px",
  };

  return (
    <div className="nav">
      <section className="logo-section">
        <img
          className="logo-small"
          id="web-logo"
          src="logo/blk-site-logo.png"
          alt="Web Logo"
        />
        <img
          className="logo-small"
          id="mobile-logo"
          src="logo/anchor-logo.png"
          alt="Mobile Logo"
          onClick={() => setMobileMenuOpen(true)}
          style={{ cursor: "pointer" }}
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

      {/* Mobile Drawer */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </div>
  );
};

export default Navigation;
