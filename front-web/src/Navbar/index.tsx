import './styles.css';
import { ReactComponent as Logo} from './logo.svg';

function Navbar(){
    return(
        <nav className="main-navbar">
            <Logo />
            <a href="home" className="logo-rext">DS Delivery</a>
        </nav>
    )
}

export default Navbar; 