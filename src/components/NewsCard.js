import React from 'react';
import PropTypes from 'prop-types';

const NewsCard = ({ article }) => {
  const { title, description, url, urlToImage, publishedAt } = article;

  return (
    <div className="card mb-3">
      <img
        src={urlToImage || 'https://via.placeholder.com/150'}
        alt={title}
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description || 'No description available'}</p>
        <div className="card-footer">
          <small className="text-muted">
            Published on {new Date(publishedAt).toLocaleDateString()}
          </small>
          <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    url: PropTypes.string.isRequired,
    urlToImage: PropTypes.string,
    publishedAt: PropTypes.string.isRequired,
  }).isRequired,
};

export default NewsCard;
