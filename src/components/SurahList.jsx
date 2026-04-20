import { useEffect, useState } from "react";
import { getSurahList } from "../services/api";

export default function SurahList({ onSelect }) {
    const [surah, setSurah] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getSurahList().then((data) => {
            setSurah(data);
            setLoading(false);
        });
    }, []);

    if (loading) return <p className="text-center py-20 text-slate-500 dark:text-slate-400">Loading...</p>;

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">📖 Daftar Surah</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                    Temukan dan pilih surah untuk melihat ayat dan detail lengkap.
                </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {surah.map((s) => (
                    <button
                        key={s.nomor}
                        onClick={() => onSelect(s.nomor)}
                        className="group w-full text-left overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-emerald-300 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800"
                    >
                        <div className="flex items-start justify-between gap-4">
                            <div className="min-w-0">
                                <p className="text-xs uppercase tracking-[0.25em] text-slate-400 dark:text-slate-500">
                                    Surah {s.nomor}
                                </p>
                                <h3 className="mt-3 text-xl font-semibold text-slate-900 dark:text-slate-100 truncate">
                                    {s.namaLatin}
                                </h3>
                                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
                                    {s.arti}
                                </p>
                            </div>

                            <span className="flex h-12 min-w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 font-semibold dark:bg-emerald-900/30 dark:text-emerald-300">
                                {s.jumlahAyat ?? "–"}
                            </span>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}