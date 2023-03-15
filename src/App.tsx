import AboutUs from "./components/AboutUs";
import Awards from "./components/Awards";
import ChefsWord from "./components/ChefsWord";
import FindUs from "./components/FindUs";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Video from "./components/Video";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Menu />
      <ChefsWord />
      <Video />
      <Awards />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  );
}

export default App;
