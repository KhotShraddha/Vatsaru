import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
      cName="hero"
      heroImg="https://vajiram-prod.s3.ap-south-1.amazonaws.com/Sindhudurg_Fort_cd17f3d9f7.jpg"
      title="Your Journey Your Story"
      text="Choose your Favourite Destination"
      buttonText="Travel Plan"
      url="/"
      btnClass="show"
      />
      <Destination/>
      <Trip/>
      <Footer/>
    </>
  );
}
export default Home;
