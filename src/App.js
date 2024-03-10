import './App.css';
import Ad from './components/Ad';
import Cards from './components/Cards';
import Feedback from './components/Feedback';
import Hero from './components/Hero';
import LogoLine from './components/LogoLine';
import Navbar from './components/Navbar';
import Screenshot from './components/Screenshot';
import Signup from './components/Signup';
import Subscription from './components/Subscription';


function App() {
  return (
    <div className="App  bg-[#EAEEFE] ">
      <Ad/>
      <Navbar/>
      <Hero/>
      <LogoLine/>
      <Screenshot/>
      <Cards/>
      <Subscription/>
      <Feedback/>
      <Signup/>
      <Feedback/>
    </div>
  );
}

export default App;
