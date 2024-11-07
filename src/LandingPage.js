// src/LandingPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AuthModal from './AuthModal';

const API_KEY = 'a2cad3d938cf46709a3a0b7cfac78b71';
const NEWS_API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

const LandingPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(NEWS_API_URL);
        setArticles(response.data.articles);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <header style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1>Keyupdates</h1>
        <p>Your source for the latest news updates</p>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <button onClick={openModal} style={{ marginRight: '10px' }}>Login</button>
        <button onClick={openModal}>Signup</button>
      </header>

      {loading ? (
        <p>Loading articles...</p>
      ) : (
        <div>
          {articles.map((article, index) => (
            <div key={index} style={{ marginBottom: '20px' }}>
              <h2>{article.title}</h2>
              {article.urlToImage && (
                <img src={article.urlToImage} alt={article.title} style={{ width: '100%', height: 'auto' }} />
              )}
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            </div>
          ))}
        </div>
      )}

      <AuthModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default LandingPage;
