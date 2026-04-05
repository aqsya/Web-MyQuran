import React from 'react';

const LoadingSkeleton = ({ count = 8, type = "card" }) => {
    if (type === "header") {
        return (
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg mb-8 animate-pulse text-center">
                <div className="h-8 bg-slate-200 dark:bg-slate-700 rounded w-1/3 mx-auto mb-4"></div>
                <div className="h-12 bg-slate-200 dark:bg-slate-700 rounded w-1/2 mx-auto mb-4"></div>
                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-1/4 mx-auto"></div>
            </div>
        );
    }

    if (type === "ayat") {
        return (
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 animate-pulse mb-4">
                <div className="flex justify-between mb-4">
                    <div className="w-8 h-8 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                    <div className="w-24 h-6 bg-slate-200 dark:bg-slate-700 rounded"></div>
                </div>
                <div className="h-12 bg-slate-200 dark:bg-slate-700 rounded w-full mb-4"></div>
                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-3/4"></div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(count)].map((_, i) => (
                <div key={i} className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-100 dark:border-slate-700 animate-pulse">
                    <div className="flex justify-between mb-4">
                        <div className="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                        <div className="w-20 h-6 bg-slate-200 dark:bg-slate-700 rounded"></div>
                    </div>
                    <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-1/2"></div>
                </div>
            ))}
        </div>
    );
};

export default LoadingSkeleton;