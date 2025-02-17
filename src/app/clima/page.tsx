'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaSearch } from 'react-icons/fa';

export default function ClimaHome() {
  const [location, setLocation] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    if (location.trim()) {
      router.push(`/clima/${location}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white/90 backdrop-blur-md p-8 rounded-xl shadow-2xl text-center max-w-md w-full transform transition-all hover:scale-105">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">Previsão do Tempo</h1>
        <p className="text-lg text-gray-600 mb-8">
          Descubra a previsão do tempo para qualquer cidade ou país.
        </p>
        <div className="flex items-center bg-white rounded-lg overflow-hidden shadow-sm">
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Digite o nome da cidade ou país"
            className="px-4 py-3 w-full focus:outline-none text-gray-700"
          />
          <button
            onClick={handleSearch}
            className="px-6 py-3 bg-blue-500 text-white hover:bg-blue-600 transition-colors"
          >
            <FaSearch className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
}