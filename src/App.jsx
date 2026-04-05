import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { BookmarkProvider } from './contexts/BookmarkContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SurahDetail from './pages/SurahDetail';
import Bookmarks from './pages/Bookmarks';
import Landing from './pages/Landing';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <ThemeProvider>
      <BookmarkProvider>
        <Router>
          <div className="min-h-screen">
            <Navbar setSearchTerm={setSearchTerm} />
            <main>
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/surah" element={<Home searchTerm={searchTerm} />} />
                <Route path="/surah/:nomor" element={<SurahDetail />} />
                <Route path="/bookmarks" element={<Bookmarks />} />
              </Routes>
            </main>
          </div>
        </Router>
      </BookmarkProvider>
    </ThemeProvider>
  );
}

export default App;