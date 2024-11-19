import React from 'react';

const SocialMediaShare = ({ articleUrl }) => {
  return (
    <div className="social-share mt-3">
      <button
        onClick={() => window.open(`https://twitter.com/share?url=${articleUrl}`, '_blank')}
        className="btn btn-info"
      >
        Share on Twitter
      </button>
      <button
        onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${articleUrl}`, '_blank')}
        className="btn btn-primary ms-2"
      >
        Share on Facebook
      </button>
    </div>
  );
};

export default SocialMediaShare;
