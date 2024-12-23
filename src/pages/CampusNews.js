// src/pages/CampusNews.js
import React, { useState, useEffect } from 'react';
import NewsCard from '../components/NewsCard'; // Adjust the import path as necessary

const CampusNews = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=ug&apiKey=a2cad3d938cf46709a3a0b7cfac78b71')
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
      <h1>Latest Campus News</h1>
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

export default CampusNews;
