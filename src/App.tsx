import { useState } from 'react';
import { SearchBar } from './components/SearchBar';
import { WeatherCard } from './components/WeatherCard';
import { getWeather } from './services/weatherAPI';
import { WeatherData } from './types';
import { LoadingSkeleton } from './components/LoadingSkeleton';

function App() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (city: string) => {
    try {
      setIsLoading(true);
      setError('');
      const data = await getWeather(city);
      setWeather(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setWeather(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-md mx-auto space-y-4">
        <h1 className="text-3xl font-bold text-center mb-8">
          Weather Dashboard
        </h1>

        <SearchBar onSearch={handleSearch} isLoading={isLoading} />

        {isLoading && <LoadingSkeleton />}
        {!isLoading && weather && <WeatherCard data={weather} />}
        {!isLoading && error && (
            <div className="p-4 bg-red-100 text-red-700 rounded-lg">
              {error}
            </div>
        )}

      </div>
    </div>
  );
}

export default App;