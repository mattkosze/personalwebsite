import { Link } from "react-router-dom"

export function Header() {
    return <nav className="navBar">
        <Link to="/" className="headerText"><h1>/MATT KOSZEWICZ</h1></Link>
        <div id="linkContainer">
            <Link className="headerText" to="/">/HOME</Link>
            <Link className="headerText" to="/reading">/READING</Link>
            {/* To add a blog in next major update :) */}
        </div>
    </nav>
}