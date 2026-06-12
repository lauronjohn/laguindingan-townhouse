import { UnitProvider } from "./context/UnitContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import UnitSelector from "./components/UnitSelector";
import About from "./components/About";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Location from "./components/Location";
import LocalTips from "./components/LocalTips";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <UnitProvider>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <UnitSelector />
        <About />
        <Features />
        <Gallery />
        <Reviews />
        <Location />
        <LocalTips />
        <FinalCTA />
      </main>
      <Footer />
    </UnitProvider>
  );
}
