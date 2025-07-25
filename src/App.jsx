import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // ✅ Needed for routing

import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar"; // ⬅ ensure case matches
import OverviewCounter from "./components/overview-counter/OverviewCounter";
import About from "./components/about/About";
import SimpleBanner from "./components/simpleBanner/SimpleBanner";
import Footer from "./components/footer/Footer";
import Services from "./components/services/Services";
import Companies from "./components/companies/Companies";
import Certificates from "./components/certificates/Cerificates";
import ContactUs from "./components/contact/ContactUs";
import { Toaster } from "react-hot-toast";

import GalleryPage from "./pages/Gallery";

function HomePage() {
  return (
    <>
      <Navbar />

      <div id="/">
        <Hero />
      </div>

      <div id="#about">
        <About />
      </div>

      <div>
        <OverviewCounter />
      </div>

      <div id="#services">
        <Services />
      </div>

      <div id="#companies">
        <Companies />
      </div>

      <div id="">
        <SimpleBanner />
      </div>

      <div id="#certificates">
        <Certificates />
      </div>

      <div id="#contact">
        <ContactUs />
      </div>

      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Gallery route */}
        <Route path="/gallery" element={<GalleryPage />} />

        {/* Main landing page */}
        <Route path="/" element={<HomePage />} />
      </Routes>

      <Toaster position="bottom-center" />
    </Router>
  );
}

export default App;