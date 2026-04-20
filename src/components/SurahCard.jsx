import React from 'react';
import { Link } from 'react-router-dom';

const SurahCard = ({ surah }) => {
    return (
        <Link to={`/surah/${surah.nomor}`} className="group"> //
            <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-emerald-50 dark:border-slate-700 shadow-sm hover:shadow-xl hover:shadow-emerald-100 dark:hover:shadow-none transition-all duration-300 transform group-hover:-translate-y-1">
                <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 bg-emerald-50 dark:bg-slate-700 rounded-full flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold">
                        {surah.nomor}
                    </div>
                    <h2 className="text-2xl font-arabic text-emerald-800 dark:text-emerald-200">
                        {surah.nama}
                    </h2>
                </div>

                <div className="space-y-1"> 
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                        {surah.namaLatin}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        {surah.arti} • {surah.jumlahAyat} Ayat
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default SurahCard;