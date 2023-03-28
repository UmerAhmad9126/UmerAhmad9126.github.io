import './App.css';
import About from './Components/About/About';
import Contacts from './Components/Contacts/Contacts';
import Github from './Components/Github/Github';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import { Projects } from './Components/Projects/Projects';
import Skills from './Components/Skills/Skill';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Github />
      <Contacts />
    </div>
  );
}

export default App;
