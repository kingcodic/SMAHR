import './App.css';
import Nav from './components/Nav';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Footer from './components/Footer';
import Main from './components/Main';
import MangaDetails from './components/MangaDetails';
import MangaViewer from './components/MangaViewer';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Contact from './components/Contact';
import About from './components/About';

const AppContent = () => {
 

  // Check if the current route matches '/manga/:id' or '/manga/:id/chapter/:chapterNumber' pattern

  return (
    <div className="App">
      {/* Render Nav and Footer for all routes */}
      <Nav />

      <Routes>
        {/* Main route */}
        <Route path="/" element={<Main />} />
        <Route path="/manga" element={<Main />} />
        {/* Manga details route */}
        <Route path="/manga/:id" element={<MangaDetails />} />
        {/* Manga chapter route */}
        <Route path="/manga/:id/chapter/:chapterNumber" element={<MangaViewer />} />
        {/* New routes for Contact and About */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>

      {/* Render Footer for all routes */}
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;