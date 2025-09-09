import Navbar from './navbar';
import Hero from './hero';
import Services from './feature';
import About from './about';
const Home = () => {
    return ( 
        <div>
            <Navbar />
            <Hero />
            <Services />
            <About />
        </div>
        
     );
}
 
export default Home;