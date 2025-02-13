'use client'; // Adicione isso no topo do arquivo

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ClimaHome() {
  const [location, setLocation] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    if (location.trim()) {
      router.push(`/clima/${location}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Previsão do Tempo</h1>
      <div className="flex">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Digite o nome da cidade ou país"
          className="px-4 py-2 border rounded-l focus:outline-none"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600"
        >
          Buscar
        </button>
      </div>
    </div>
  );
}https://github.com/ThomasHenrique1/clima-next.git