const BASE_URL = 'https://equran.id/api/v2';

export const getAllSurah = async () => {
    try {
        const response = await fetch(`${BASE_URL}/surat`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error("Error fetching surah:", error);
        throw error;
    }
};

export const getSurahTafsir = async (nomor) => {
    try {
        const response = await fetch(`${BASE_URL}/tafsir/${nomor}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error(`Error fetching tafsir for ${nomor}:`, error);
        throw error;
    }
};

export const getSurahDetail = async (nomor) => {
    try {
        const response = await fetch(`${BASE_URL}/surat/${nomor}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error(`Error fetching surah detail for ${nomor}:`, error);
        throw error;
    }
};


export const searchSurah = async (keyword) => {
    try {
        const response = await fetch(`${BASE_URL}/search/${keyword}`);
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error("Error searching surah:", error);
        return [];
    }
};