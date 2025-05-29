import { Link } from "react-router-dom"

export function Header() {
    return <nav className="navBar">
        <h1 className="headerText">\MATT KOSZEWICZ</h1>
        <div id="linkContainer">
            <Link className="headerText" to="/">\HOME</Link>
            <Link className="headerText" to="/reading">\READING</Link>
            {/* To add a blog in next major update :) */}
        </div>
    </nav>
}