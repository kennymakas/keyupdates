import React, { useState } from 'react';

const Comments = () => {
  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState([]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    setCommentsList([...commentsList, comment]);
    setComment('');
  };

  return (
    <div className="comments-section">
      <h5>Leave a Comment</h5>
      <form onSubmit={handleCommentSubmit}>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows="4"
          className="form-control"
          placeholder="Write your comment..."
        />
        <button type="submit" className="btn btn-success mt-2">
          Submit
        </button>
      </form>

      <div className="mt-4">
        <h6>Comments</h6>
        {commentsList.map((comment, index) => (
          <div key={index} className="comment">
            <p>{comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
