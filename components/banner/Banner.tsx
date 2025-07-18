import { useRouter } from "next/router";

const Banner = () => {
  const { basePath } = useRouter();

  return (
    <div
      className="banner-container"
      style={{
        backgroundImage: `url('${basePath}/mobilebar/crew.jpg')`,
      }}
    >
      <div className="overlay"></div>

      <div id="glowing-logo">
        <img id="logo-big" src="logo/glowing-logo.png" />
        <div id="welcome-msg"></div>
      </div>
    </div>
  );
};

export default Banner;
