import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const overlayStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  zIndex: 999,
  transition: "opacity 0.5s ease",
  opacity: 1,
};

const hiddenOverlayStyle: React.CSSProperties = {
  ...overlayStyle,
  opacity: 0,
  pointerEvents: "none",
};

const drawerStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  height: "100vh",
  width: "100vw", // full screen
  backgroundColor: "#222",
  color: "#fff",
  zIndex: 1000,
  transform: "translateX(0)",
  transition: "transform 0.3s ease",
};

const hiddenDrawerStyle: React.CSSProperties = {
  ...drawerStyle,
  transform: "translateX(-100%)",
};

const closeButtonStyle: React.CSSProperties = {
  background: "none",
  color: "#fff",
  border: "none",
  fontSize: "2rem",
  cursor: "pointer",
  position: "absolute",
  top: "20px",
  right: "25px",
};

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  // ✅ Disable scroll on open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <div
        style={isOpen ? overlayStyle : hiddenOverlayStyle}
        onClick={onClose}
      ></div>

      <div style={isOpen ? drawerStyle : hiddenDrawerStyle}>
        <button onClick={onClose} style={closeButtonStyle}>
          &times;
        </button>
        <nav style={{ marginTop: "80px", textAlign: "center" }}>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              fontSize: "1.5rem",
              lineHeight: "2.5rem",
            }}
          >
            <li>
              <a
                style={{ color: "#fff", textDecoration: "none" }}
                className="menu-item"
                onClick={() => {
                  router.push("/#services");
                  onClose()
                }}
              >
                Services
              </a>
            </li>
            <li>
              <a
                style={{ color: "#fff", textDecoration: "none" }}
                className="menu-item"
                onClick={() => {
                  router.push("/#story")
                  onClose()
                }}
              >
                Our Story
              </a>
            </li>
            <li>
              <Link
                className="menu-item"
                style={{ color: "#fff", textDecoration: "none" }}
                href={"/gallery"}
                onClick={() => {
                  onClose()
                }}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                className="menu-item"
                style={{ color: "#fff", textDecoration: "none" }}
                href={"/partners"}
                onClick={() => {
                  onClose()
                }}
              >
                Partners
              </Link>
            </li>
            <li>
              <Link
                className="menu-item"
                style={{ color: "#fff", textDecoration: "none" }}
                href={"/get-quote"}
                onClick={() => {
                  onClose()
                }}
              >
                Get Quote
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
