import Cta from "./components/pages/CTA/Cta";
import Features from "./components/pages/Features/Features";
import Footer from "./components/pages/Footer/Footer";
import Hero from "./components/pages/Hero/Hero";
import LogoClouds1 from "./components/pages/LogoClouds1/LogoClouds1";
import LogoClouds2 from "./components/pages/LogoClouds2/LogoClouds2";
import Metrics from "./components/pages/Metrics/Metrics";
import Navbar from "./components/pages/Navbar/Navbar";
import Testimonial from "./components/pages/Testimonial/Testimonial";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoClouds1 />
      <Features />
      <Testimonial />
      <Metrics />
      <LogoClouds2 />
      <Cta />
      <Footer />
    </>
  );
};

export default App;
