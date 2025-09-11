import Navbar from './navbar';
import Hero from './hero';
import Services from './feature';
import About from './about';
import Footer from './footer';

const Home = () => {
    return ( 
        <div>
            
            <Navbar />

            <section id="home">
                <Hero />
            </section>

            <section id="features">
                <Services />
            </section>

            <section id="about">
                <About />
            </section>

            <section id="contact">
                <Footer />
            </section>
        </div>
     );
}
 
export default Home;
