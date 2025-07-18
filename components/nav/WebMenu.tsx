import Link from "next/link"
import { useRouter } from "next/router";

const WebMenu = () => {
    const router = useRouter();

    return <div className="menu-list">
        <a className="menu-item" onClick={() => router.push('/#services')} >Services</a>
        <a className="menu-item" onClick={() => router.push('/#story')} >Our Story</a>
        <Link className="menu-item" href={'/gallery'}>Gallery</Link>
        <Link className="menu-item" href={'/partners'}>Partners</Link>
        <Link className="menu-item" href={'/get-quote'}>Get Quote</Link>
    </div>
}

export default WebMenu 