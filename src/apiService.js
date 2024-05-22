const API_BASE_URL = 'http://127.0.0.1:8000/api/v1'; // the Django backend

export async function fetchData(endpoint) {
    const url = `${API_BASE_URL}${endpoint}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok' + response.statusText);
      }
      return await response.json();
    } catch (error) {
      console.error('Error occurred:', error);
      throw error;
    }
  }