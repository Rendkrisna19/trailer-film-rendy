import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import Footer from './components/Footer';

const App = () => (
  <Router>
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<><HeroSection /><MovieList /></>} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;
