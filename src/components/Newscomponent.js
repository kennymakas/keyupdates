import React, { useState, useEffect } from "react";
import axios from "axios";

const NewsComponent = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  const apiUrl = process.env.REACT_APP_API_URL;
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`${apiUrl}?apiKey=${apiKey}`);
        setNews(response.data.articles);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchNews();
  }, [apiUrl, apiKey]);

  return (
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        news.map((article, index) => (
          <div key={index}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default NewsComponent;
