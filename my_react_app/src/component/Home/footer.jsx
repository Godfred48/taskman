import linkedin from '../images/linkedin.svg';
import twitter  from '../images/twitter-x.svg';
import github from '../images/github.svg';
import '../style/home.css';
import '../script/date';
const Footer = () => {
    return ( 
        <footer className="footermain">
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
                    <div class="socials">
                        <a href="https://www.linkedin.com/in/godfred-agbogah-001559263/" target="_blank"><img src={linkedin} alt="linkedin" /></a>
                        <a href="https://github.com/Godfred48" target="_blank"><img src={github} alt="linkedin" /></a>
                        <a href="" target="_blank"><img src={twitter} alt="linkedin" /></a>
                    </div>
                </section>
            </div>
            <div className='date'>
                <p>&copy;<span id="currentyear"></span> TaskMan. Accra-Ghana.</p>
                <p id="lastModified"></p>
            </div>
        </footer>
     );
}
 
export default Footer;