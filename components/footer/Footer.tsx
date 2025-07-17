import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTiktok, faInstagram } from "@fortawesome/free-brands-svg-icons"

const Footer = () =>
    <section className="section-container">
        <footer className="footer-container">
            <div className="footer-top">
                <div className="footer-logo-section">
                    <div className="footer-logo-container">
                        <img src="logo/logo-blackflag.png" className="footer-logo" />
                    </div>
                </div>
                <div className="footer-service-section">
                    <div className="group-links">
                        <b>Package & Services</b>
                        <span>Unlimited</span>
                        <span>Fixed shots</span>
                        <span>Service only</span>
                    </div>
                    <div className="group-links">
                        <b>Partners</b>
                        <span>The Event Tent</span>
                        <span>KNY Grazing Table</span>
                        <span>DJ Rein</span>
                        <span>Events by Shyne Aguas</span>
                    </div>
                    <div className="group-links">
                        <b>Follow Us</b>
                        <span><FontAwesomeIcon icon={faFacebook} size={'lg'} /></span>
                        <span><FontAwesomeIcon icon={faTiktok} size={'lg'} /></span>
                        <span><FontAwesomeIcon icon={faInstagram} size={'lg'} /></span>
                    </div>

                </div>
            </div>
            <div className="footer-bottom bg-black">
                All Rights Reserved Deck14 Mobile Entertainment Inc. Copyright © 2023
            </div>
        </footer>
    </section>



export default Footer