import Navigation from "../../components/nav/Navigation";
import Footer from "../../components/footer/Footer";
declare global {
  interface Window {
    jotformEmbedHandler?: (iframeSelector: string, url: string) => void;
  }
}

const companies = [
  {
    name: "The Event Tent",
    phone: "0927 740 9202 / theeventtent@gmail.com",
    image: "partners/TET.png",
  },
  {
    name: "DJ Rein",
    phone: "https://www.facebook.com/reinhard.mozo",
    image: "partners/DJRein.png",
  },
  {
    name: "Star Catering Services",
    phone: "0939 286 8178",
    image: "partners/StarCatering.png",
  },
  {
    name: "Sweetworks by Cathy",
    phone: "0915 232 2284",
    image: "partners/SBC.png",
  },
  {
    name: "La Ponce Aromatique",
    phone: "0927 110 9986",
    image: "partners/LaPonce.png",
  },
];

const partnersContainer: React.CSSProperties = {
  paddingTop:"80px",
  minHeight: "100vh",
};

const title: React.CSSProperties = {
  display: "grid",
  padding: "40px",
};

const containerStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px",
};

const cardStyle: React.CSSProperties = {
  backgroundColor: "#fff",
  borderRadius: "8px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  padding: "20px",
  textAlign: "center",
};

const imageStyle: React.CSSProperties = {
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  objectFit: "cover",
  marginBottom: "10px",
};

const nameStyle: React.CSSProperties = {
  fontSize: "18px",
  fontWeight: "bold",
  marginBottom: "8px",
};

const phoneStyle: React.CSSProperties = {
  fontSize: "14px",
  color: "#555",
};

const GetQuotePage = () => {
  return (
    <>
      <Navigation />
      <div style={partnersContainer}>
        <div style={title}>
          <h1>Partners</h1>
        </div>
        <div style={containerStyle}>
          {companies.map((company, index) => (
            <div key={index} style={cardStyle}>
              <img src={company.image} alt={company.name} style={imageStyle} />
              <div style={nameStyle}>{company.name}</div>
              <div style={phoneStyle}>{company.phone}</div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GetQuotePage;
