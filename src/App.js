import Clients from "./components/Clients";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Standout from "./components/Standout";
import Standouttab from "./components/Standouttab";
import Update from "./components/Update";
import Whoweare from "./components/Whoweare";

 

function App() {
  return (
    <div className="App">
      <Hero/>
      <Services/>
      <Standout/>
      <Standouttab/>
      <Whoweare/>
      <Clients/>
      <Update/>
    </div>
  );
}

export default App;
