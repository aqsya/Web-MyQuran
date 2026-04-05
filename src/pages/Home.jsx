import React, { useState, useEffect } from 'react';
import { getAllSurah } from '../services/api';
import SurahCard from '../components/SurahCard';
import LoadingSkeleton from '../components/LoadingSkeleton';

const Home = ({ searchTerm }) => {
  const [surahs, setSurahs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllSurah()
      .then(data => {
        setSurahs(data);
        setLoading(false);
      })
      .catch(err => {
        setError("Gagal memuat data. Silakan coba lagi.");
        setLoading(false);
      });
  }, []);

  const filteredSurahs = surahs.filter(s => 
    s.namaLatin.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.arti.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.nama.includes(searchTerm)
  );

  if (loading) return <LoadingSkeleton count={12} />;
  
  if (error) return (
    <div className="flex flex-col items-center justify-center py-20 text-red-500">
      <p className="text-xl font-bold">{error}</p>
      <button onClick={() => window.location.reload()} className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-lg">Coba Lagi</button>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredSurahs.map(surah => (
          <SurahCard key={surah.nomor} surah={surah} />
        ))}
      </div>
    </div>
  );
};

export default Home;