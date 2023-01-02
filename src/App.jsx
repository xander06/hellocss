import './App.scss';
import ContactPage from './pages/Contactpage';
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import IMGcalc from './pages/IMGcalc';
import Agecalc from './pages/Agecalc';

export const App = () => {
  
  const footerinfo = {
    nombre: '© Kruger Corp. 2022. Transforming Enterprises, Boosting Lives.',
    telf: '+593 994 634 469',
    email: 'kruger@info.com',
    usuariogit: '@gitUser',
  };

  return (
    <div className="container">
      <Router>
        <div className='nav-bar'>
        <NavBar />
        </div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/imgcalc" element={<IMGcalc />}/>
          <Route path="/agecalc" element={<Agecalc />}/>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer {...footerinfo} />
      </Router>

    </div>
  )
};