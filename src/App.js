// import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import About from './components/About';
import Work from './components/work';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import background from './images/bg1.png';
import Project from './components/project';

function App() {
  return (
    // <div className="App">
    //   <Navbar></Navbar>
    //   <header className="App-header">
    //     <Header></Header>
    //     </div>

    //     <div className='About'>
    //       <About></About>
    //     </div>
    //     <div className='work'>
    //       <Work></Work>
    //     </div>
    //     <div className='contact'>
    //       <Contact></Contact>
    //     </div>
    //     </div>
    <div style= {{
      backgroundImage: `url(${background})`
    }}> 
      <Navbar/>
      <Header/>
      <About/>
      <div class="work">
      <Work/>
      </div>
      <Project/>
      <div class="contact">
      <Contact/>
      </div>
      {/* <Contact/> */}
    </div>
  );
}

export default App;