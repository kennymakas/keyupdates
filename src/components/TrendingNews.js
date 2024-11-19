import React from 'react';

const TrendingNews = ({ articles }) => {
  return (
    <div className="trending-news mt-4">
      <h3>Trending Stories</h3>
      <div className="row">
        {articles.slice(0, 5).map((article, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card">
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  className="card-img-top"
                  alt={article.title}
                />
              )}
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingNews;
