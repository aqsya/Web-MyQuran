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
        <div>
            <h2>{detail.namaLatin}</h2>

            {detail.ayat.map((ayat) => (
                <div key={ayat.nomorAyat} style={{ marginBottom: "20px" }}>

                    <p style={{ fontSize: "24px", textAlign: "right" }}>
                        {ayat.teksArab}
                    </p>

                    <p>{ayat.teksIndonesia}</p>

                    <audio controls src={ayat.audio["01"]}></audio>
                </div>
            ))}
        </div>
    );
}