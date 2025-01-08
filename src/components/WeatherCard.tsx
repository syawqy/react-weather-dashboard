import { WeatherData } from '../types';

interface WeatherCardProps {
  data: WeatherData;
}

export function WeatherCard({ data }: WeatherCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">{data.name}</h2>
        <img
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt={data.weather[0].description}
          className="w-16 h-16"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-4xl font-bold">{Math.round(data.main.temp)}°C</p>
          <p className="text-gray-500">{data.weather[0].main}</p>
        </div>

        <div className="space-y-2">
          <p className="text-gray-600">
            Feels like: {Math.round(data.main.feels_like)}°C
          </p>
          <p className="text-gray-600">
            Humidity: {data.main.humidity}%
          </p>
          <p className="text-gray-600">
            Wind: {data.wind.speed} m/s
          </p>
        </div>
      </div>
    </div>
  );
}