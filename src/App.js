import "./App.css";
import Footer from "./componente/Footer/Footer";
import Hero from "./componente/Hero/Hero";
import Join from "./componente/Join/Join";
import Plans from "./componente/Plans/Plans";
import Programs from "./componente/Programs/Programs";
import Reason from "./componente/Reason/Reason";
import Testimonials from "./componente/Testimonials/Testimonials";

function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reason />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
