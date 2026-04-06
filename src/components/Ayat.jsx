import React, { useState, useEffect, useRef } from 'react';

const Ayat = ({ ayat, surahNumber }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
            }
        };
    }, []);

    const handleTogglePlay = (url) => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            if (!audioRef.current) {
                audioRef.current = new Audio(url);
                audioRef.current.onended = () => setIsPlaying(false);
                audioRef.current.onerror = () => setIsPlaying(false);
            }
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    return (
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-emerald-50 dark:border-slate-700 shadow-sm hover:border-emerald-200 transition-all">
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {ayat.nomorAyat}
                    </div>
                    <button
                        onClick={() => handleTogglePlay(ayat.audio['01'])}
                        className={`p-2 rounded-full transition-colors ${isPlaying ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-emerald-50 hover:text-emerald-600'}`}
                    >
                        {isPlaying ? '⏸️' : '▶️'}
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