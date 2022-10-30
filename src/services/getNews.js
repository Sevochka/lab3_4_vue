const getNews = async () => {
  const response = await fetch('https://newsapi.org/v2/top-headlines?country=ru&apiKey=c41f56c2309742d88a4c2b1412d0c6a5');
  return response.json();
};

export default getNews;
