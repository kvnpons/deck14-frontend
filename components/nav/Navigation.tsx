import WebMenu from "./WebMenu"
import { BookOpenIcon } from '@heroicons/react/24/outline'

const Navigation = () => {
    return <div className="nav">
        <section className="logo-section">
            <img className="logo-small" id="web-logo" src="logo/blk-site-logo.png" />
            <img className="logo-small" id="mobile-logo" src="logo/anchor-logo.png" />
        </section>
        <section className="menu-section">
            <WebMenu />
        </section>
        <section className="cart-section">
            <BookOpenIcon className="h-6 w-6 text-blue-500 booking-icon" />
        </section>
    </div>
}

export default Navigation