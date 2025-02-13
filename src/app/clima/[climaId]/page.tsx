/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { FaThermometerHalf, FaTint, FaWind, FaCloud, FaEye, FaCalendarAlt } from 'react-icons/fa';

export default function ClimaDetail() {
  const params = useParams();
  const climaId = params.climaId as string;
  interface WeatherData {
    location: {
      name: string;
    };
    current: {
      condition: {
        text: string;
      };
      temp_c: number;
      feelslike_c: number;
      humidity: number;
      wind_kph: number;
      cloud: number;
    };
    forecast: {
      forecastday: {
        date: string;
        day: {
          condition: {
            text: string;
          };
          avgtemp_c: number;
        };
      }[];
    };
  }

  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (climaId) {
      fetch(`/api/weather?location=${climaId}&days=5`) // Adicionamos `days=5` para obter a previsão dos próximos 5 dias
        .then((response) => response.json())
        .then((data) => {
          if (data.error) {
            setError(true);
          } else {
            setWeatherData(data);
          }
        })
        .catch(() => setError(true));
    }
  }, [climaId]);

  // Função para determinar a imagem com base no tipo de clima
  const getWeatherImage = (condition: string) => {
    const conditionLower = condition.toLowerCase();
  
    // Verifica condições em português e inglês
    if (
      conditionLower.includes('clear') || // Inglês
      conditionLower.includes('limpo') || // Português
      conditionLower.includes('ensolarado') // Português
    ) {
      return '/clear.png';
    } else if (
      conditionLower.includes('cloud') || // Inglês
      conditionLower.includes('nuvem') || // Português
      conditionLower.includes('nublado') || // Português
      conditionLower.includes('parcialmente nublado') // Português
    ) {
      return '/cloud.png';
    } else if (
      conditionLower.includes('rain') || // Inglês
      conditionLower.includes('chuva') || // Português
      conditionLower.includes('chuvoso') || // Português
      conditionLower.includes('showers') // Inglês
    ) {
      return '/rain.png';
    } else if (
      conditionLower.includes('mist') || // Inglês
      conditionLower.includes('névoa') || // Português
      conditionLower.includes('nevoeiro') || // Português
      conditionLower.includes('fog') || // Inglês
      conditionLower.includes('haze') // Inglês
    ) {
      return '/mist.png';
    } else if (
      conditionLower.includes('snow') || // Inglês
      conditionLower.includes('neve') || // Português
      conditionLower.includes('gelo') || // Português
      conditionLower.includes('sleet') || // Inglês
      conditionLower.includes('ice') // Inglês
    ) {
      return '/snow.png';
    } else {
      return '/clear.png'; // Padrão para condições não mapeadas
    }
  };

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-600 flex flex-col items-center justify-center p-4">
        <div className="bg-white/90 backdrop-blur-md p-8 rounded-xl shadow-2xl text-center max-w-md w-full">
          <img src="/404.png" alt="Not Found" className="w-32 h-32 mx-auto" />
          <p className="mt-4 text-xl text-gray-800">Ops, este local não existe!</p>
        </div>
      </div>
    );
  }

  if (!weatherData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
        <p className="text-xl text-white">Carregando...</p>
      </div>
    );
  }

  const weatherImage = getWeatherImage(weatherData.current.condition.text);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-600 flex flex-col items-center justify-center p-4">
      <div className="bg-white/90 backdrop-blur-md p-8 rounded-xl shadow-2xl text-center max-w-2xl w-full">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Previsão do Tempo em {weatherData.location.name}
        </h1>
        <img
          src={weatherImage}
          alt={weatherData.current.condition.text}
          className="w-32 h-32 mx-auto"
        />
        <p className="text-xl text-gray-700 mt-4">
          {weatherData.current.condition.text}
        </p>
        <p className="text-4xl font-bold text-gray-800 mt-2">
          {weatherData.current.temp_c}°C
        </p>

        {/* Detalhes Adicionais do Clima */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Detalhes do Clima
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
              <FaThermometerHalf className="text-blue-500 mr-2" />
              <span className="font-medium text-gray-700">Sensação Térmica:</span>{' '}
              <span className="text-gray-600 ml-2">{weatherData.current.feelslike_c}°C</span>
            </div>
            <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
              <FaTint className="text-blue-500 mr-2" />
              <span className="font-medium text-gray-700">Umidade:</span>{' '}
              <span className="text-gray-600 ml-2">{weatherData.current.humidity}%</span>
            </div>
            <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
              <FaWind className="text-blue-500 mr-2" />
              <span className="font-medium text-gray-700">Velocidade do Vento:</span>{' '}
              <span className="text-gray-600 ml-2">{weatherData.current.wind_kph} km/h</span>
            </div>
            <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
              <FaCloud className="text-blue-500 mr-2" />
              <span className="font-medium text-gray-700">Nuvens:</span>{' '}
              <span className="text-gray-600 ml-2">{weatherData.current.cloud}%</span>
            </div>
          </div>
        </div>

        {/* Previsão para os Próximos Dias */}
          {/* Previsão para os Próximos Dias */}
<div className="mt-8">
  <h2 className="text-2xl font-semibold text-gray-800 mb-6">
    Previsão para os Próximos Dias
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {weatherData.forecast.forecastday
      .slice(2, 7) // Pula o dia atual e pega os próximos 5 dias
      .map((day: any, index: number) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
          <p className="text-lg font-medium text-gray-700">
            {new Date(day.date).toLocaleDateString('pt-BR', { weekday: 'long' })}
          </p>
          <img
            src={getWeatherImage(day.day.condition.text)}
            alt={day.day.condition.text}
            className="w-16 h-16 mx-auto my-2"
          />
          <p className="text-gray-600">{day.day.condition.text}</p>
          <p className="text-xl font-bold text-gray-800">
            {day.day.avgtemp_c}°C
          </p>
        </div>
      ))}
  </div>
</div>
      </div>
    </div>
  );
}