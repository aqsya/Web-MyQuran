const BASE_URL = 'https://equran.id/api/v2';

export const getAllSurah = async () => {
    try {
        const response = await fetch(`${BASE_URL}/surat`);
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error("Error fetching surah:", error);
        throw error;
    }
};

export const getSurahDetail = async (nomor) => {
    const response = await fetch(`${BASE_URL}/surat/${nomor}`);
    const data = await response.json();
    return data.data;
};