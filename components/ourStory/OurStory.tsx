const OurStory = () => <section className="section-container">
    <div className="section-title">
        <h1>Our Story</h1>
    </div>
    <div className="section-content">
        <div className="story-container">
            <div className="story-tile story-tile-bg" style={
                {
                    backgroundImage: "url('/gallery/gallery_14.jpg')"
                }
            }>
                <i>
                    <div className="story">
                        <h3>Journey</h3>
                        Growing up, we spent most of our time
                        hanging out with friends and drinking.
                        Our joy was mixing and matching drinks.
                        From the classic Gin and Pomelo turned into Shembot or
                        (Kopiko brown, Sunday's melon juice, and Gin bilog).
                        We realized this could be our passion: mixing drinks.
                        <br />
                        <br />

                        Paul went overseas to pursue this dream and
                        was lucky enough to have worked in one
                        of the most prestigious cruise lines in the United States.
                        Armed with his experience and knowledge in international
                        hospitality and mixology. He and his buddy Kevin
                        started Deck 14 Mobile Bar.
                    </div>
                </i>
            </div>
            <div className="story-tile video-wrapper">
                <video autoPlay muted loop>
                    <source src="gallery/video_bg.MOV" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    </div>

</section>

export default OurStory