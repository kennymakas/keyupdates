import React, { useState, useEffect } from 'react';
import NewsCard from '../components/NewsCard'; // Adjust the import path as necessary

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Example API call to fetch news articles (replace with your actual API)
<<<<<<< HEAD
    fetch('fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=a2cad3d938cf46709a3a0b7cfac78b71')
=======
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=a2cad3d938cf46709a3a0b7cfac78b71')
>>>>>>> 255e76c54f28f13c8d7aa25f83c08586e2037130
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to load news');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container">
      <h1>Latest News</h1>
      <div className="row">
        {articles.map((article, index) => (
          <div className="col-md-4" key={index}>
            <NewsCard article={article} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
