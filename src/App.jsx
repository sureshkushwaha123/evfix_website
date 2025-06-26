import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/navbar";
import OverviewCounter from "./components/overview-counter/OverviewCounter";
import About from "./components/about/About";
import SimpleBanner from "./components/simpleBanner/SimpleBanner";
import Footer from "./components/footer/Footer";
import Services from "./components/services/Services";

function App() {
  return (
    <>
      <Navbar />

      <div id="home">
        <Hero />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="">
        <OverviewCounter />
      </div>

      <div id="policy">
        <SimpleBanner />
      </div>
      <div id="services" >
        <Services />
      </div>

      <div id="contact">
        <Footer />
      </div>
    </>
  );
}

export default App;
