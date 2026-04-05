import React, { createContext, useState, useEffect, useContext } from 'react';

export const BookmarkContext = createContext();

export const BookmarkProvider = ({ children }) => {
    const [bookmarks, setBookmarks] = useState(() => {
        const saved = localStorage.getItem('bookmarks');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }, [bookmarks]);

    const toggleBookmark = (ayat) => {
        setBookmarks(prev => {
            const exists = prev.find(b => b.nomorAyat === ayat.nomorAyat && b.surahNomor === ayat.surahNomor);
            if (exists) return prev.filter(b => !(b.nomorAyat === ayat.nomorAyat && b.surahNomor === ayat.surahNomor));
            return [...prev, ayat];
        });
    };

    return (
        <BookmarkContext.Provider value={{ bookmarks, toggleBookmark }}>
            {children}
        </BookmarkContext.Provider>
    );
};

export const useBookmark = () => useContext(BookmarkContext);