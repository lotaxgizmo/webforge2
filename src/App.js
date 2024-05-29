import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Standout from "./components/Standout";
import Standouttab from "./components/Standouttab";
import Update from "./components/Update";
import Whoweare from "./components/Whoweare";

 
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

function App() {

  const particles = Array.from({ length: 100 }).map((_, index) => ({
    id: index,
    x: getRandomInt(0, window.innerWidth),
    y: getRandomInt(0, window.innerHeight),
    delay: getRandomInt(0, 10),
  }));

  return (
    <div className="App relative">
       {particles.map(particle => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: particle.x,
            top: particle.y,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}

      <Header/>
      <Hero/>
      <Services/>
      <Standout/>
      <Standouttab/>
      <Whoweare/>
      <Clients/>
      <Update/>
      <Footer/>
    </div>
  );
}

export default App;
