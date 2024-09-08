// hooks/useGiphy.js

import { useState } from 'react';
import axios from 'axios';

const GIPHY_API_KEY = '3nAddWD5valli6ckLU0DoItLRjKVLwgf' ; // Reemplaza con tu clave API de Giphy

export function useGiphy() {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchGifs = async (query) => {
    setLoading(true);
    try {
      const response = await axios.get('https://api.giphy.com/v1/gifs/search', {
        params: {
          api_key: GIPHY_API_KEY,
          q: query,
          limit: 10,
        },
      });
      setGifs(response.data.data);
    } catch (error) {
      console.error('Error fetching GIFs:', error);
    } finally {
      setLoading(false);
    }
  };

  return { gifs, searchGifs, loading };
}
