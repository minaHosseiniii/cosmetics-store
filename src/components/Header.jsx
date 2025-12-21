import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingBasket, faMagicWandSparkles} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <a href="/" className="link">
                    <FontAwesomeIcon icon={faMagicWandSparkles} className="fa-icon"/>
                    <span className="brand-title">Aura Cosmetics</span>
                </a>
                <nav className="nav">
                    <ul>
                        <li>
                            <a href="/" className="nav-link">Home</a>
                        </li>
                        <li>
                            <a href="/about" className="nav-link">About</a>
                        </li>
                        <li>
                            <a href="/contact" className="nav-link">Contact</a>
                        </li>
                        <li>
                            <a href="/login" className="nav-link">Login</a>
                        </li>
                        <li>
                            <a href="/cart" className="nav-link">
                                <FontAwesomeIcon icon={faShoppingBasket} />
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;