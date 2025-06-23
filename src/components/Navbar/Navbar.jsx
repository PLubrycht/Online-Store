import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <Link to="/">Strona glowna</Link>
            <Link to="/products" >Produkty</Link>
            <Link to="/cart" >Koszyk</Link>
        </nav>
    );
}

export default Navbar;