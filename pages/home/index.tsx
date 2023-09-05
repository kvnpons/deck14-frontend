import { NextPage } from "next"
import Navigation from "../../components/nav/Navigation"
import Services from "../../components/services/Services"
import Banner from "../../components/banner/Banner"
import Gallery from "../../components/gallery/Gallery"
import OurStory from "../../components/ourStory/OurStory"
import Footer from "../../components/footer/Footer"

const Home: NextPage = () => {
    return <div className="container">
        <Navigation />
        <Banner />
        <Services />
        <OurStory />
        <Gallery />
        <Footer />
    </div>
}

export default Home 