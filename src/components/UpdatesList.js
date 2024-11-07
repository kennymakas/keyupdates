import React from 'react';

const UpdatesList = ({ updates }) => {
  return (
    <div>
      <h2>Recent Updates</h2>
      {updates.length > 0 ? (
        updates.map((update) => (
          <div key={update.id} style={{ marginBottom: '20px' }}>
            <p>{update.content}</p>
            <small>{update.date}</small>
            <hr />
          </div>
        ))
      ) : (
        <p>No updates available.</p>
      )}
    </div>
  );
};

export default UpdatesList;
