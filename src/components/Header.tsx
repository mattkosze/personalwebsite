import { Link, } from "react-router-dom"

export function Header() {
    return <nav className="navBar">
        <Link to="/" className="headerText"><h1>/MATT KOSZEWICZ</h1></Link>
        <div id="linkContainer">
            <Link className="headerText" to="/reading">/READING</Link>
            <button className="headerBtn">Hello</button>            
            {/* To add a blog in next major update :) */}
        </div>
    </nav>
}