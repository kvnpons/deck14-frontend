const Banner = () => {
    return <div className="banner-container" style={
        {
            backgroundImage: "url('/mobilebar/crew.jpg')"
        }
    }>
        <div className="overlay">
        </div>

        <div id="glowing-logo">
            <img id="logo-big" src="logo/glowing-logo.png" />
            <div id='welcome-msg'>

            </div>
        </div>


    </div>
}

export default Banner