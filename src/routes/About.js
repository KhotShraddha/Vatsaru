import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/Torna Fort.jpg";
import Footer from "../components/Footer";
import AboutUS from "../components/AboutUs";
function About() {
  return (
    <>
       <Navbar />
      <Hero
      cName="hero-mid" heroImg={AboutImg} title="About" url="/" btnClass="hide"
      />
      <AboutUS/>
       <Footer/>
    </>
  );
}
export default About;
