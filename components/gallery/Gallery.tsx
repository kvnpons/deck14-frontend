const photos = [
    { src: "gallery/gallery_1.jpg", orientation: 'square' },
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
];
const Gallery = () => {

    return (<section className="section-container">
        <div className="section-title" id='gallery'>
            <h1>Gallery</h1>
        </div>
        <div className="section-content" >
            <div className="gallery-container">
                    {photos.map(({ src, orientation }) => {
                        return <img src={src} className={`gallery-tile-${orientation} tile`} alt={src} />
                    })}
            </div>
        </div>

    </section>)
}

export default Gallery