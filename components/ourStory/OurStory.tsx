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
                    <h1>Our Journey</h1>
                    <p>It all started with good friends, late nights, and a lot of experimenting. Back then, our weekends were defined by laughter, loud music, and the thrill of mixing whatever we could get our hands on—Gin and Pomelo turned <em>Shembot</em>, or wild combos like Kopiko Brown, Sunday’s melon juice, and a splash of Gin Bilog. It was chaotic, fun, and oddly delicious.</p>
                    
                    <p>What began as playful curiosity slowly stirred into something more—a passion for mixology.</p>
                    
                    <p>Chasing that spark, <strong>Paul</strong> packed his bags and flew overseas to pursue the craft seriously. He honed his skills aboard one of the most prestigious cruise lines in the U.S., gaining firsthand experience in world-class hospitality and bartending. Every pour, every mix, every guest served added to the vision that had started years ago.</p>
                    
                    <p>Armed with this global experience and a heart full of ambition, Paul returned home. He linked up with his best bud <strong>Kevin</strong>, and together, they turned the dream into a brand.</p>
                    
                    <p><strong>Deck 14 Mobile Bar</strong> was born—where every cocktail tells a story, and every sip brings you back to where it all started: friends, fun, and a love for the mix.</p>
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