// src/AuthModal.js
import React from 'react';
import Modal from 'react-modal';

const AuthModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Authentication Modal"
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <h2>Login / Signup</h2>
        <form>
          <div style={{ marginBottom: '10px' }}>
            <input type="text" placeholder="Username" style={{ width: '100%', padding: '8px' }} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <input type="password" placeholder="Password" style={{ width: '100%', padding: '8px' }} />
          </div>
          <button type="submit" style={{ padding: '10px 20px', marginRight: '10px' }}>Login</button>
          <button type="button" style={{ padding: '10px 20px' }}>Signup</button>
        </form>
      </div>
      <button onClick={onClose} style={{ marginTop: '20px', color: 'red' }}>Close</button>
    </Modal>
  );
};

export default AuthModal;
