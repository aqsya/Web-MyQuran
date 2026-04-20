import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SurahDetail from './pages/SurahDetail';
import Landing from './pages/Landing';
import Profile from './pages/Profile';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen">
          <Navbar setSearchTerm={setSearchTerm} />
          <main>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/surah" element={<Home searchTerm={searchTerm} />} />
              <Route path="/surah/:nomor" element={<SurahDetail />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;