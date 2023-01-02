import './App.css';
import ContactPage from './pages/Contactpage';
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
export const App = () => {

  const footerinfo = {
    nombre: 'Alexander',
    telf: '+593 994 634 469',
    email: 'kruger@info.com',
    usuariogit: '@gitUser',
  };

  return (
    <div className="container">

      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer {...footerinfo} />
      </Router>

    </div>
  )
};