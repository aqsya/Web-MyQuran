import { useEffect, useState } from "react";
import { getSurahDetail } from "../services/api";

export default function SurahDetail({ nomor }) {
    const [detail, setDetail] = useState(null);

    useEffect(() => {
        if (nomor) {
            getSurahDetail(nomor).then(setDetail);
        }
    }, [nomor]);

    if (!nomor) return <p>Pilih surah dulu</p>;
    if (!detail) return <p>Loading ayat...</p>;

    return (
    <div className="max-w-4xl mx-auto p-4 space-y-6"> {/* Container lebar & di tengah */}
        <h2 className="text-3xl font-bold text-center text-emerald-600 mb-8">
            {detail.namaLatin}
        </h2>

        {detail.ayat.map((ayat) => (
            <div key={ayat.nomorAyat} className="bg-white shadow-md rounded-xl p-6 border-l-4 border-emerald-500">
                {/* Bagian Nomor Ayat */}
                <span className="inline-block bg-emerald-100 text-emerald-700 font-bold px-3 py-1 rounded-full mb-4">
                    Ayat {ayat.nomorAyat}
                </span>

                {/* Teks Arab: Pakai Tailwind text-right */}
                <p className="text-3xl text-right leading-loose mb-4 font-serif">
                    {ayat.teksArab}
                </p>

                {/* Teks Indonesia */}
                <p className="text-gray-600 italic mb-6">
                    {ayat.teksIndonesia}
                </p>

                {/* Audio: Buat jadi full width */}
                <audio controls className="w-full h-10 shadow-inner rounded-lg" src={ayat.audio["04"]}></audio>
            </div>
        ))}
    </div>
);
}