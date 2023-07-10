import "./App.css";
import Hero from "./componente/Hero/Hero";
import Plans from "./componente/Plans/Plans";
import Programs from "./componente/Programs/Programs";
import Reason from "./componente/Reason/Reason";

function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reason />
      <Plans />
    </div>
  );
}

export default App;
