import './App.css';
import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import AdminPanel from './components/AdminPanel';
import UpdatesList from './components/UpdatesList';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    const savedUpdates = JSON.parse(localStorage.getItem('updates')) || [];
    setUpdates(savedUpdates);
  }, []);

  const handleLogin = (username, password) => {
    if (username === 'admin' && password === 'password') {
      setIsAdmin(true);
    } else {
      alert('Incorrect login details');
    }
  };

  const addUpdate = (newUpdate) => {
    const updatedUpdates = [newUpdate, ...updates];
    setUpdates(updatedUpdates);
    localStorage.setItem('updates', JSON.stringify(updatedUpdates));
  };

  return (
    <div className="App">
      <h1>Keyupdates</h1>
      {isAdmin ? (
        <AdminPanel addUpdate={addUpdate} />
      ) : (
        <Login handleLogin={handleLogin} />
      )}
      <UpdatesList updates={updates} />
    </div>
  );
}

export default App;