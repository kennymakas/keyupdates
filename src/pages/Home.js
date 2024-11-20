import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Or you can use fetch
import NewsCard from '../components/NewsCard'; // Ensure this component exists

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUSNews = async () => {
      const apiKey = 'a2cad3d938cf46709a3a0b7cfac78b71'; // Your NewsAPI key

      try {
       
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
        );
        
        if (response.data.articles.length) {
          setArticles(response.data.articles);
        } else {
          setError('No articles available');
        }
      } catch (error) {
        setError('Failed to load US news');
      } finally {
        setLoading(false);
      }
    };

    fetchUSNews();
  }, []);

  if (loading) return <div>Loading US news...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mt-4">
      <h1>Latest US News</h1>
      <div className="row">
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <div className="col-md-4" key={index}>
              <NewsCard article={article} />
            </div>
          ))
        ) : (
          <div>No news available at the moment</div>
        )}
      </div>
    </div>
  );
};

export default Home;
