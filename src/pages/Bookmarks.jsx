import { useBookmark } from '../contexts/BookmarkContext';
import { Link } from 'react-router-dom';

const Bookmarks = () => {
    const { bookmarks, toggleBookmark } = useBookmark();

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                        Bookmark Ayat
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Ayat-ayat yang Anda bookmark
                    </p>
                </div>

                {bookmarks.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
                            Belum ada ayat yang di-bookmark
                        </p>
                        <Link
                            to="/"
                            className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                        >
                            Mulai Membaca
                        </Link>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {bookmarks.map(bookmark => (
                            <div key={`${bookmark.surahNomor}-${bookmark.nomorAyat}`} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center space-x-3">
                                        <Link
                                            to={`/surah/${bookmark.surahNomor}`}
                                            className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium hover:bg-green-200 dark:hover:bg-green-800 transition-colors"
                                        >
                                            Surah {bookmark.surahNomor}
                                        </Link>
                                        <span className="text-sm text-gray-600 dark:text-gray-400">
                                            Ayat {bookmark.nomorAyat}
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => toggleBookmark(bookmark)}
                                        className="p-2 rounded-full bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-800 transition-colors"
                                    >
                                        🗑️
                                    </button>
                                </div>
                                <p
                                    className="text-xl leading-relaxed text-right font-arabic text-gray-900 dark:text-white"
                                    style={{ fontFamily: 'Amiri, serif' }}
                                >
                                    {bookmark.teksArab}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Bookmarks;