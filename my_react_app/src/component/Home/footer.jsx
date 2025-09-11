import linkedin from '../images/linkedin.svg';
import twitter  from '../images/twitter-x.svg';
import github from '../images/github.svg';
import '../style/home.css';
import DateComponent from '../script/date';
const Footer = () => {
    return ( 
        <footer className="footermain" >
            <div className="footerContainer">
                <section>
                    <h3>Contact/Locate Us</h3>
                    <ul>
                        <li>+233546336753</li>
                        <li>taskman@gmail.com</li>
                        <li>Accra-Ghana</li>
                    </ul>
                </section>
                <section>
                    <h3>Our Socials</h3>
                    <div className="socials">
                        <a href="https://www.linkedin.com/in/godfred-agbogah-001559263/" target="_blank"  rel="noopener noreferrer"><img src={linkedin} alt="linkedin" /></a>
                        <a href="https://github.com/Godfred48" target="_blank"  rel="noopener noreferrer"><img src={github} alt="linkedin" /></a>
                        <a href="https://x.com" target="_blank"  rel="noopener noreferrer"><img src={twitter} alt="linkedin" /></a>
                    </div>
                </section>
            </div>
            <DateComponent />
        </footer>
     );
}
 
export default Footer;