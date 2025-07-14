import About from "../components/About";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Slider from "../components/Slider";

import Team from "../components/Team";

const Home = () => {
  return (
    <div className="bg-gray-50">
      <Header />
      <Slider />
      <About />
      <Team />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
