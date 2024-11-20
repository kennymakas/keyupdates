import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  const apiUrl = "https://newsdata.io/api/1/news"; // NewsData.io API URL
  const apiKey = "pub_59816fbd3b9d2c067bc9994b6b1f53d5ac30a"; // Your API Key

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(apiUrl, {
          params: {
            apiKey: apiKey, // Pass the API key in the request
            language: "en",  // You can change language if needed
          }
        });

        setNews(response.data.results); // Set the news articles
      } catch (err) {
        console.error("Error fetching news:", err);
        setError("Failed to load news.");
      }
    };

    fetchNews(); // Fetch news when the component mounts
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Worldwide News</h1>
      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <div style={styles.cardsContainer}>
          {news.length > 0 ? (
            news.map((article, index) => (
              <div key={index} style={styles.card}>
                {article.image_url && (
                  <img
                    src={article.image_url}
                    alt={article.title}
                    style={styles.cardImage}
                  />
                )}
                <div style={styles.cardContent}>
                  <h2 style={styles.cardTitle}>{article.title}</h2>
                  <p style={styles.cardDescription}>
                    {article.description}
                  </p>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.readMore}
                  >
                    Read more
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p>No news available.</p>
          )}
        </div>
      )}
    </div>
  );
};

// Styling for square cards and responsive design
const styles = {
  container: {
    padding: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  header: {
    textAlign: "center",
    fontSize: "2em",
    marginBottom: "20px",
  },
  cardsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", // Makes it responsive
    gap: "20px",
    padding: "10px",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    height: "350px", // Ensuring each card is square-like
    display: "flex",
    flexDirection: "column",
  },
  cardImage: {
    width: "100%",
    height: "100%",  // Make the image take full height to fit square shape
    objectFit: "cover", // Ensures the image covers the square without distortion
    backgroundColor: "#f0f0f0", // Fallback background if no image
  },
  cardContent: {
    padding: "15px",
    flex: 1, // Ensures content fills up the space
  },
  cardTitle: {
    fontSize: "1.2em",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#333",
  },
  cardDescription: {
    fontSize: "1em",
    color: "#555",
    marginBottom: "15px",
  },
  readMore: {
    color: "#007BFF",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Home;
