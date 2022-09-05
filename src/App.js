import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { useEffect,useState } from 'react';
import { Footer } from './components/Footer';
import { About } from './components/About';
import Aos from 'aos'
import "aos/dist/aos.css"
import { Contact } from './components/Contact';


function App() {

const[showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };
  
  useEffect(()=>{
    Aos.init({
      duration:2000,
    })
  },[])






  return (
    <div className="App">
     <NavBar/>
      <Banner/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          &#8679;
        </button>
      )}
    </div>
  );
}

export default App;
