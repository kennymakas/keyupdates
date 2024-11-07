import React, { useState } from 'react';

const AdminPanel = ({ addUpdate }) => {
  const [content, setContent] = useState('');

  const handleAddUpdate = () => {
    if (content.trim()) {
      const newUpdate = {
        id: Date.now(),
        content,
        date: new Date().toLocaleString(),
      };
      addUpdate(newUpdate);
      setContent('');
    }
  };

  return (
    <div>
      <h2>Admin Panel - Add Update</h2>
      <textarea
        rows="4"
        placeholder="Enter update content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button onClick={handleAddUpdate}>Add Update</button>
    </div>
  );
};

export default AdminPanel;
