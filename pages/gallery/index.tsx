import Head from "next/head";
import React, { useEffect, useMemo, useState } from "react";
import Navigation from "../../components/nav/Navigation";
import Footer from "../../components/footer/Footer";

const photos = [
  { src: "gallery/gallery_1.jpg", orientation: "square" },
  { src: "gallery/gallery_2.jpg", orientation: "portrait" },
  { src: "gallery/gallery_3.jpg", orientation: "portrait" },
  { src: "gallery/gallery_4.jpg", orientation: "portrait" },
  { src: "gallery/gallery_5.jpg", orientation: "landscape" },
  { src: "gallery/gallery_6.jpg", orientation: "portrait" },
  { src: "gallery/gallery_7.jpg", orientation: "portrait" },
  { src: "gallery/gallery_8.jpg", orientation: "portrait" },
  { src: "gallery/gallery_9.jpg", orientation: "square" },
  { src: "gallery/gallery_10.jpg", orientation: "portrait" },
  { src: "gallery/gallery_11.jpg", orientation: "landscape" },
  { src: "gallery/gallery_12.jpg", orientation: "portrait" },
  { src: "gallery/gallery_13.jpg", orientation: "portrait" },
  { src: "gallery/gallery_14.jpg", orientation: "portrait" },
  { src: "gallery/gallery_15.jpg", orientation: "portrait" },
  { src: "gallery/gallery_16.jpg", orientation: "landscape" },
  { src: "gallery/gallery_17.jpg", orientation: "portrait" },
  { src: "gallery/gallery_18.jpg", orientation: "portrait" },
  { src: "gallery/gallery_19.jpg", orientation: "portrait" },
  { src: "gallery/gallery_20.jpg", orientation: "portrait" },
  { src: "gallery/gallery_21.jpg", orientation: "portrait" },
  { src: "gallery/gallery_22.jpg", orientation: "portrait" },
  { src: "gallery/gallery_23.jpg", orientation: "portrait" },
  { src: "gallery/gallery_24.jpg", orientation: "portrait" },
  { src: "gallery/gallery_25.jpg", orientation: "landscape" },
  { src: "gallery/gallery_26.jpg", orientation: "portrait" },
  { src: "gallery/gallery_27.jpg", orientation: "landscape" },
];

const events = [
  "Bonding with Friends",
  "Birthdays",
  "Weddings",
  "Graduations",
  "New Home",
  "Corporate Events",
  "Despedida",
  "Debut",
];

const fonts = [
  "'Pacifico', cursive",
  "'Raleway', sans-serif",
  "'Courier Prime', monospace",
  "'Lobster', cursive",
];

// Shuffle array
const shuffledEvents = [...events].sort(() => 0.5 - Math.random());

const getRandomItem = (list: string[]) =>
  list[Math.floor(Math.random() * list.length)];
const containerStyle: React.CSSProperties = {
  padding: "40px",
  backgroundColor: "#222222",
  color: "#fffff",
  fontFamily: "sans-serif",
  minHeight: "100vh",
};

const titleStyle: React.CSSProperties = {
  fontFamily: "'Playfair Display', serif",
  fontSize: "2.8rem",
  textAlign: "center",
  marginBottom: "40px",
  color: "#fff",
  fontWeight: 600,
  letterSpacing: "1px",
};

const gridStyle: React.CSSProperties = {
  columnCount: 3,
  columnGap: "20px",
};

const cardStyle: React.CSSProperties = {
  background: "#fff",
  borderRadius: "8px",
  marginBottom: "20px",
  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
  breakInside: "avoid",
  overflow: "hidden",
  position: "relative",
};

const getAspectRatio = (orientation: string): string => {
  switch (orientation) {
    case "landscape":
      return "3 / 2";
    case "square":
      return "1 / 1";
    case "portrait":
    default:
      return "2 / 3";
  }
};

const imageWrapperStyle = (orientation: string): React.CSSProperties => ({
  position: "relative",
  width: "100%",
  aspectRatio: getAspectRatio(orientation),
  overflow: "hidden",
  cursor: "pointer",
});

const imageStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
};

const introStyle: React.CSSProperties = {
  // fontFamily: "'Dancing Script', 'Lucida Handwriting', cursive, serif",
  fontSize: "1.3rem",
  color: "#fff",
  maxWidth: "600px",
  margin: "20px auto",
  lineHeight: 1.6,
  paddingLeft: "20px",
};

const textCardStyle = (font: string): React.CSSProperties => ({
  background: "#f8f8f8",
  borderRadius: "8px",
  marginBottom: "20px",
  padding: "40px 20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  fontSize: "1.5rem",
  fontFamily: font,
  color: "#333",
  textAlign: "center",
  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  breakInside: "avoid",
});
const GalleryPage = () => {
  const [randomizedData, setRandomizedData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const shuffledEvents = [...events].sort(() => 0.5 - Math.random());

    const data = photos.map((photo, index) => {
      const showText = index % 5 === 0;
      const eventText = showText
        ? shuffledEvents[Math.floor(index / 5) % events.length]
        : "";
      const font = getRandomItem(fonts);

      return {
        ...photo,
        showText,
        eventText,
        font,
      };
    });

    setRandomizedData(data);

    // Delay to trigger fade-in after data set
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (!randomizedData) {
    return (
      <>
        <Navigation />
        <div style={{ padding: 40, backgroundColor: "#222", minHeight: "100vh" }}>
          <h1 style={{ color: "#fff", textAlign: "center" }}>
            Every drink has a story
          </h1>
          <p style={{ color: "#fff", textAlign: "center" }}>Loading gallery...</p>
        </div>
        <Footer />
      </>
    );
  }

  // Fade-in style with stagger by index
  const fadeInStyle = (index: number): React.CSSProperties => ({
    opacity: isLoaded ? 1 : 0,
    transform: isLoaded ? "translateY(0)" : "translateY(20px)",
    transition: `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`,
  });

  return (
    <>
      <Navigation />
      <div style={{ padding: 40, backgroundColor: "#222", minHeight: "100vh" }}>
        <h1 style={{ color: "#fff", textAlign: "center" }}>Every drink has a story</h1>
        <div style={gridStyle}>
          {randomizedData.map((item, index) => (
            <div key={index} style={{ ...cardStyle, ...fadeInStyle(index) }}>
              {item.showText ? (
                <div style={textCardStyle(item.font)}>{item.eventText}</div>
              ) : (
                <div style={imageWrapperStyle(item.orientation)}>
                  <img
                    src={item.src}
                    alt={`Image ${index + 1}`}
                    style={imageStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GalleryPage;
