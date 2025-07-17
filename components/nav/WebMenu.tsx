import Link from "next/link"

const WebMenu = () => {
    return <div className="menu-list">
        <Link className="menu-item" href={'/#services'}>Services</Link>
        <Link className="menu-item" href={'/#story'}>Our Story</Link>
        <Link className="menu-item" href={'/#gallery'}>Gallery</Link>
        <Link className="menu-item" href={'/#partners'}>Partners</Link>
        <Link className="menu-item" href={'/get-quote'}>Get Quote</Link>
    </div>
}

export default WebMenu 