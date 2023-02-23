//creates navigation bar for the tog right corner

import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                {/* '/' means home page  */}
                <Link to="/">Home</Link>
                
                <Link to="/create" >New Blog</Link>
            </div>
        </nav>
    );
}
export default Navbar;