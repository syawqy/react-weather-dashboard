import axios from 'axios';
import { WeatherData } from '../types';

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;

export const getWeather = async (city: string): Promise<WeatherData> => {
  try {
    const response = await axios.get(
      `${API_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message || 'Failed to fetch weather data');
    }
    throw error;
  }
};