import AboutUs from "./components/AboutUs";
import Awards from "./components/Awards";
import ChefsWord from "./components/ChefsWord";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
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
    </div>
  );
}

export default App;
