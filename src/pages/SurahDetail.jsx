import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getSurahDetail, getSurahTafsir } from '../services/api';
import Ayat from '../components/Ayat';
import LoadingSkeleton from '../components/LoadingSkeleton';

const SurahDetail = () => {
    const { nomor } = useParams();
    const [surah, setSurah] = useState(null);
    const [tafsir, setTafsir] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showFullTafsir, setShowFullTafsir] = useState(false);

    useEffect(() => {
        setLoading(true);
        Promise.all([getSurahDetail(nomor), getSurahTafsir(nomor)])
            .then(([surahData, tafsirData]) => {
                setSurah(surahData);
                setTafsir(tafsirData.tafsir);
                setLoading(false);
                window.scrollTo(0, 0);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [nomor]);

    if (loading) {
        return (
            <div className="container mx-auto px-4 py-8">
                <LoadingSkeleton type="header" />
                <LoadingSkeleton count={5} type="ayat" />
            </div>
        );
    }

    if (!surah) return <div className="text-center py-20">Surah tidak ditemukan.</div>;

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Header Surah */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-emerald-50 dark:border-slate-700 shadow-xl shadow-emerald-100/50 dark:shadow-none mb-8 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full -mr-16 -mt-16"></div>

                <Link to="/surah" className="absolute top-4 left-4 text-emerald-600 dark:text-emerald-400 hover:underline text-sm font-medium">
                    ← Kembali
                </Link>

                <h1 className="text-4xl font-arabic text-emerald-700 dark:text-emerald-400 mb-2">
                    {surah.nama}
                </h1>
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white uppercase tracking-wider">
                    {surah.namaLatin}
                </h2>
                <p className="text-slate-500 dark:text-slate-400 mt-2">
                    {surah.arti} • {surah.jumlahAyat} Ayat
                </p>

                <button
                    onClick={() => setShowFullTafsir(!showFullTafsir)}
                    className="mt-6 px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-medium transition-all shadow-lg shadow-emerald-200 dark:shadow-none"
                >
                    {showFullTafsir ? '📖 Tutup Tafsir' : '📜 Baca Tafsir Surah'}
                </button>
            </div>

            {/* Tampilan Tafsir Lengkap */}
            {showFullTafsir && (
                <div className="max-w-4xl mx-auto mb-10 bg-emerald-50/50 dark:bg-slate-800/50 p-6 rounded-3xl border border-emerald-100 dark:border-slate-700 animate-in fade-in zoom-in duration-300">
                    <h3 className="text-xl font-bold text-emerald-800 dark:text-emerald-400 mb-6 flex items-center">
                        <span className="mr-2">📝</span> Tafsir Surah {surah.namaLatin}
                    </h3>
                    <div className="space-y-6">
                        {tafsir.map((item) => (
                            <div key={item.ayat} className="border-b border-emerald-100 dark:border-slate-700 pb-4 last:border-0">
                                <p className="font-bold text-emerald-700 dark:text-emerald-500 mb-2">Ayat {item.ayat}</p>
                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-justify text-sm">
                                    {item.teks}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Daftar Ayat */}
            <div className={`max-w-4xl mx-auto space-y-6 ${showFullTafsir ? 'opacity-50 pointer-events-none' : ''}`}>
                {surah.ayat.map((item) => (
                    <Ayat
                        key={item.nomorAyat}
                        ayat={item}
                        surahNumber={nomor}
                    />
                ))}
            </div>
        </div>
    );
};

export default SurahDetail;