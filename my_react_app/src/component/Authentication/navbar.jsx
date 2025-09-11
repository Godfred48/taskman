import Arrow from '../images/arrowback.svg';
import logo from '../images/logo.svg';
import { Link as RouterLink} from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="AuthNav">
            <div className='arrowback'>
                <RouterLink to="/"className='router-link'>
                <img src={Arrow} alt="arrow" />
                </RouterLink>
            </div>
            <div className='taskman'>
                <img src={logo} alt="logo" />
            </div>
        </nav>

        

     );
}
 
export default Navbar;