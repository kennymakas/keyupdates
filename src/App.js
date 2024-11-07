import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import AdminPanel from './components/AdminPanel';
import UpdatesList from './components/UpdatesList';
import LandingPage from './LandingPage';
import AuthModal from './AuthModal';
import './App.css';

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
  function App() {
    return (
      <div className="App">
        <LandingPage />
      </div>
    );
  }

  const addUpdate = (newUpdate) => {
    const updatedUpdates = [newUpdate, ...updates];
    setUpdates(updatedUpdates);
    localStorage.setItem('updates', JSON.stringify(updatedUpdates));
  };

  return (
    <div className="App">
      <Header />
      <h1>Welcome to Keyupdates</h1>
      {isAdmin ? (
        <AdminPanel addUpdate={addUpdate} />
      ) : (
        <Login handleLogin={handleLogin} />
      )}
      <UpdatesList updates={updates} />
      <Footer />
    </div>
  );
}

export default App;
