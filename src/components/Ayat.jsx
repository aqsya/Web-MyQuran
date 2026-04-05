import React, { useContext, useState } from 'react';
import { BookmarkContext } from '../contexts/BookmarkContext';

const Ayat = ({ ayat, surahNumber }) => {
    const { bookmarks, toggleBookmark } = useContext(BookmarkContext);
    const [isPlaying, setIsPlaying] = useState(false);

    const isBookmarked = bookmarks.find(
        (b) => b.nomorAyat === ayat.nomorAyat && b.surahNomor === parseInt(surahNumber)
    );

    const handlePlay = (url) => {
        const audio = new Audio(url);
        setIsPlaying(true);
        audio.play();
        audio.onended = () => setIsPlaying(false);
        audio.onerror = () => setIsPlaying(false);
    };

    return (
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-emerald-50 dark:border-slate-700 shadow-sm hover:border-emerald-200 transition-all">
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {ayat.nomorAyat}
                    </div>
                    <button
                        onClick={() => handlePlay(ayat.audio['01'])}
                        className={`p-2 rounded-full transition-colors ${isPlaying ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-emerald-50 hover:text-emerald-600'}`}
                    >
                        {isPlaying ? '⏸️' : '▶️'}
                    </button>
                    <button
                        onClick={() => toggleBookmark({ ...ayat, surahNomor: parseInt(surahNumber) })}
                        className={`p-2 rounded-full transition-colors ${isBookmarked ? 'text-amber-500' : 'text-slate-400 hover:text-amber-500'}`}
                    >
                        {isBookmarked ? '⭐' : '☆'}
                    </button>
                </div>
            </div>

            <div className="text-right mb-6">
                <p className="text-3xl font-arabic text-slate-800 dark:text-emerald-50 leading-[3.5rem]">
                    {ayat.teksArab}
                </p>
            </div>

            <div className="text-left border-t border-slate-50 dark:border-slate-700 pt-4">
                <p className="text-slate-600 dark:text-slate-300 italic leading-relaxed">
                    {ayat.teksIndonesia}
                </p>
            </div>
        </div>
    );
};

export default Ayat;