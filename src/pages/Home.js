import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Axios for making HTTP requests
import NewsCard from '../components/NewsCard'; // Ensure this component exists

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [news, setNews] = useState([]); // For NewsData.io
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null);

  // NewsAPI logic
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
    }
  };

  // NewsData.io logic
  const fetchNewsData = async () => {
    const apiUrl = "https://newsdata.io/api/1/news"; // NewsData.io API URL
    const apiKey = "pub_59816fbd3b9d2c067bc9994b6b1f53d5ac30a"; // Your API Key

    try {
      const response = await axios.get(apiUrl, {
        params: {
          apiKey: apiKey,
          language: "en",  // You can change language if needed
        }
      });

      setNews(response.data.results); // Set the news articles
    } catch (err) {
      console.error("Error fetching news:", err);
      setError("Failed to load news.");
    }
  };

  // UseEffect for fetching both sets of news
  useEffect(() => {
    fetchUSNews(); // Fetch US news from NewsAPI
    fetchNewsData(); // Fetch news from NewsData.io
    setLoading(false); // Set loading to false after the data is fetched
  }, []);

  if (loading) return <div>Loading news...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mt-4">
      <h1>Latest News</h1>
      
      {/* News from NewsAPI */}
      <div className="row">
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <div className="col-md-4" key={index}>
              <NewsCard article={article} />
            </div>
          ))
        ) : (
          <div>No articles from NewsAPI available.</div>
        )}
      </div>

      {/* News from NewsData.io */}
      <h2>Worldwide News</h2>
      <div className="row">
        {news.length > 0 ? (
          news.map((article, index) => (
            <div className="col-md-4" key={index}>
              <div className="card">
                {article.image_url && (
                  <img
                    src={article.image_url}
                    alt={article.title}
                    className="card-img-top"
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text">{article.description}</p>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No articles from NewsData.io available.</div>
        )}
      </div>
    </div>
  );
};

export default Home;
