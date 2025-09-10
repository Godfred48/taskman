import Navbar from './navbar';
import Hero from './hero';
import Services from './feature';
import About from './about';
import Footer from './footer';
const Home = () => {
    return ( 
        <div>
            <Navbar />
            <Hero />
            <Services />
            <About />
            <Footer />
        </div>
        
     );
}
 
export default Home;