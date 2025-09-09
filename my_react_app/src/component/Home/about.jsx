import '../style/home.css';
const About = () => {
    return ( 
        <div className='main'>
            <h2 className='header'>About Us</h2>
            <div className="about">
                <section className="section1">
                    <h2>Who We Are</h2>
                    <p>
                        We are a passionate team dedicated to building simple, powerful, 
                        and user-friendly tools that help you stay productive every day.
                    </p>

                </section>
                <section className="section1">
                    <h2>Our Mission</h2>
                    <p>
                        Our mission is to make task management effortless
                        so you can focus on what really matters—achieving 
                        your goals and bringing your ideas to life.
                    </p>
                </section>
            </div>
        </div>
     );
}
 
export default About;