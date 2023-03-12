import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';


function App() {
  return (
    <Router>
        <Navbar />
        <section className='MainContent overflow-scroll' >
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/contact' element={<Contact/>} />
          </Routes>
        </section>
        <Footer />
    </Router>
  );
}

export default App;
