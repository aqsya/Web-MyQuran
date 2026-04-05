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

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <h2>📖 Daftar Surah</h2>

            {surah.map((s) => (
                <div
                    key={s.nomor}
                    onClick={() => onSelect(s.nomor)}
                    style={{
                        border: "1px solid #ddd",
                        padding: "10px",
                        margin: "5px",
                        cursor: "pointer",
                    }}
                >
                    <b>{s.nomor}. {s.namaLatin}</b>
                    <p>{s.arti}</p>
                </div>
            ))}
        </div>
    );
}