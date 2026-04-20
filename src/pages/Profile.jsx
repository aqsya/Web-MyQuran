import React from 'react';
import profileImage from '../assets/foto aca.jpeg';

const Profile = () => {
    return (
        <div className="min-h-[calc(100vh-73px)] flex items-center justify-center bg-slate-50 dark:bg-slate-950 px-4 py-10">
            <div className="w-full max-w-2xl rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-xl p-8 text-center">
                <div className="mx-auto mb-6 h-40 w-40 overflow-hidden rounded-full border-4 border-emerald-500/30">
                    <img src={profileImage} alt="Foto Profil Aca" className="h-full w-full object-cover" />
                </div>

                <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Aqsya Aurora</h1>
                <p className="text-slate-600 dark:text-slate-400 mb-6">Mahasiswa Teknik Informatika USR 24</p>

                <div className="group">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-emerald-100 dark:bg-emerald-800 p-4 rounded-lg text-left">
                        <h3 className="font-semibold text-white-900 dark:text-white text-center">NIM</h3>
                        <p className="text-white-600 dark:text-white-400 text-center">12450121691</p>
                    </div>
                    <div className="bg-emerald-100 dark:bg-emerald-800 p-4 rounded-lg text-left">
                        <h3 className="font-semibold text-white-900 dark:text-white text-center">Kelas</h3>
                        <p className="text-white-600 dark:text-white-400 text-center">4C</p>
                    </div>
                    <div className="bg-emerald-100 dark:bg-emerald-800 p-4 rounded-lg text-left">
                        <h3 className="font-semibold text-white-900 dark:text-white text-center">Prodi</h3>
                        <p className="text-white-600 dark:text-white-400 text-center">Teknik Informatika</p>
                    </div>
                    <div className="bg-emerald-100 dark:bg-emerald-800 p-4 rounded-lg text-left">
                        <h3 className="font-semibold text-white-900 dark:text-white text-center">Email</h3>
                        <p className="text-white-600 dark:text-white-400 text-center">aqsyaaurora29@gmail.com</p>
                    </div>
                </div>
                </div>

                <p className="mt-8 text-sm text-slate-500 dark:text-slate-400">
                    Thank You.
                </p>
            </div>
        </div>
    );
};

export default Profile;
