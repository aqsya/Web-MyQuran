import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';

const Navbar = ({ setSearchTerm }) => {
    const { darkMode, setDarkMode } = useContext(ThemeContext);
    const location = useLocation();
    const isSurahListPage = location.pathname === '/surah';

    return (
        <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-emerald-100 dark:border-slate-800 transition-colors duration-300">
            <div className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
                <Link to="/" className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-200 dark:shadow-none">
                        <span className="text-white text-2xl font-bold">Q</span>
                    </div>
                    <h1 className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent dark:from-emerald-400 dark:to-emerald-200">
                        MyQuran
                    </h1>
                </Link>

                <div className="flex-1 max-w-md mx-4">
                    {isSurahListPage && (
                        <input
                            type="text"
                            placeholder="Cari Surah (Latin, Arab, atau Arti)..."
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 border-none focus:ring-2 focus:ring-emerald-500 outline-none transition-all dark:text-white"
                        />
                    )}
                </div>

                <div className="flex items-center space-x-4">
                    <Link to="/surah" className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 transition-colors font-medium">
                        Daftar Surah
                    </Link>
                    <Link to="/bookmarks" className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 transition-colors">
                        ⭐ <span className="hidden sm:inline">Bookmarks</span>
                    </Link>
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-xl hover:rotate-12 transition-all"
                        title={darkMode ? "Aktifkan Mode Terang" : "Aktifkan Mode Gelap"}
                    >
                        {darkMode ? '☀️' : '🌙'}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;