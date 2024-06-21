const fetchAllInvestorsData = async () => {
  try {
    const response = await fetch('http://localhost:8000/api/investors');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching investors:', error);
    throw error;
  }
};
export default fetchAllInvestorsData;
