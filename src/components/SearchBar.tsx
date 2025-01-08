import { useState } from 'react';

interface SearchBarProps {
  onSearch: (city: string) => void;
  isLoading: boolean;
}

export function SearchBar({ onSearch, isLoading }: SearchBarProps) {
  const [city, setCity] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name..."
        className="flex-1 p-2 rounded-lg border focus:outline-none focus:border-blue-500"
      />
      <button
        type="submit"
        disabled={isLoading}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 
                 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Searching...' : 'Search'}
      </button>
    </form>
  );
}