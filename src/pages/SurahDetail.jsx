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

    if (!surah) return <div className="text-center py-20 text-slate-500 dark:text-slate-400">Surah tidak ditemukan.</div>;

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mx-auto max-w-5xl space-y-10">
                <div className="relative overflow-hidden rounded-4xl border border-emerald-100 bg-white p-6 sm:p-10 shadow-xl shadow-emerald-100/40 dark:border-slate-700 dark:bg-slate-900 dark:shadow-none">
                    <div className="absolute top-0 right-0 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10" />
                    <Link to="/surah" className="absolute top-4 left-4 text-sm font-medium text-emerald-600 hover:underline dark:text-emerald-400">
                        ← Kembali
                    </Link>

                    <div className="relative z-10 text-center">
                        <h1 className="text-4xl font-arabic leading-tight text-emerald-700 dark:text-emerald-300 mb-3">
                            {surah.nama}
                        </h1>
                        <h2 className="text-2xl font-bold uppercase tracking-[0.25em] text-slate-800 dark:text-slate-100">
                            {surah.namaLatin}
                        </h2>
                        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
                            {surah.arti} • {surah.jumlahAyat} Ayat
                        </p>
                        <button
                            onClick={() => setShowFullTafsir(!showFullTafsir)}
                            className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-2 text-sm font-medium text-white transition hover:bg-emerald-700 shadow-lg shadow-emerald-200/50 dark:shadow-none"
                        >
                            {showFullTafsir ? '📖 Tutup Tafsir' : '📜 Baca Tafsir Surah'}
                        </button>
                    </div>
                </div>

                {showFullTafsir && (
                    <div className="rounded-4xl border border-emerald-100 bg-emerald-50/80 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
                        <h3 className="mb-6 text-xl font-bold text-emerald-800 dark:text-emerald-400 flex items-center gap-2">
                            <span>📝</span> Tafsir Surah {surah.namaLatin}
                        </h3>
                        <div className="space-y-6">
                            {tafsir.map((item) => (
                                <div key={item.ayat} className="rounded-3xl border border-emerald-100 bg-white/80 p-5 dark:border-slate-700 dark:bg-slate-900">
                                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400">
                                        Ayat {item.ayat}
                                    </p>
                                    <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 text-justify whitespace-pre-line wrap-break-word">
                                        {item.teks}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className={`space-y-6 ${showFullTafsir ? 'opacity-50 pointer-events-none' : ''}`}>
                    {surah.ayat.map((item) => (
                        <Ayat
                            key={item.nomorAyat}
                            ayat={item}
                            surahNumber={nomor}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SurahDetail;