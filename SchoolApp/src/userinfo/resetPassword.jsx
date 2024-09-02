import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

const ResetPassword = () => {
  const authInstance = getAuth();
  const [email, setEmail] = useState('');
  const [resetRequested, setResetRequested] = useState(false);
  const [error, setError] = useState('');

  const handleResetPassword = async () => {
    try {
      await sendPasswordResetEmail(authInstance, email);
      setResetRequested(true);
      setError('');
    } catch (err) {
      console.error("Firebase Error:", err);
      setError(err.code === "auth/user-not-found" ? "Användaren finns inte" : err.message);
    }
  };
  

  return (
<div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="text-center">
        <h1>Återställ lösenord</h1>
        {resetRequested ? (
          <p>Ett återställnings-e-post har skickats till {email}.</p>
        ) : (
          <div>
            <p>Ange din e-postadress för att återställa lösenordet.</p>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                E-postadress:
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ borderRadius: '20px', fontSize: 14 }}
              />
            </div>
            <button
              className="btn btn-secondary btn-lg btn-block fa-lg gradient-custom-2 m-2"
              style={{ backgroundColor: '#4CAF83', color: 'white', borderRadius: '20px', fontSize: 16, border: 'none' }}
              type="button"
              onClick={handleResetPassword}

            >
              Återställ lösenord
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </div>
        )}
        <Link to="/login">Tillbaka till Logga in</Link>
      </div>
    </div>
  );
};

export default ResetPassword;