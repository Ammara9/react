import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth, db as database } from '../firebase/firebase';
import {  ref, set, } from 'firebase/database';

import { Row, Col, Form, Button } from 'react-bootstrap';

const Login = () => {
  const navigate = useNavigate();
  const authInstance = getAuth();
  const [input, setInput] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [resetPasswordRequested, setResetPasswordRequested] = useState(false);

  const handleChange = ({ target }) => {
    setInput({
      ...input,
      [target.name]: target.value,
    });

    // Dölj meddelandet när användaren börjar redigera e-postfältet igen
    if (resetPasswordRequested && target.name === 'email') {
      setResetPasswordRequested(false);
    }

    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, input.email, input.password);
      const user = userCredential.user;

      const userDataRef = ref(database, `users/${user.uid}`);
      set(userDataRef, {
        email: user.email,
        displayName: user.displayName,
        points: 0,
      });

      setInput({ email: '', password: '' });
      navigate('/home');
    } catch (err) {
      console.error("Firebase Error:", err);

      if (err.code === "auth/user-not-found" || err.code === "auth/wrong-password") {
        setError("Felaktig e-postadress eller lösenord");
      } else {
        setError(err.message);
      }
    }
  };

  const handleResetPassword = async () => {
    try {
      await sendPasswordResetEmail(authInstance, input.email);
      setResetPasswordRequested(true);
      setError('');
    } catch (err) {
      console.error("Firebase Error:", err);

      if (err.code === "auth/user-not-found") {
        setError("Användaren finns inte");
      } else {
        setError(err.message);
      }
    }
  };

  return (
    <section className="vh-100">
      <div className="container-fluid">
        <Row>
          <Col md={8} style={{ backgroundColor: '#4CAF83', textAlign: 'center' }}>
            <img src="bilder/logo-to-klimatkoll.png" alt="Logo" style={{ maxWidth: '55%', maxHeight: '60%' }} />
            <p style={{ color: 'white', fontSize: 20 }}>
              Hos KlimatKoll kan du lära dig om <br></br>klimatförändringarna och testa dina kunskaper i vårt
              quiz!
            </p>
            <img src="./bilder/6776431.png" alt="klimatkoll bild" style={{ width: '45%' }} />
          </Col>
          <Col md={4} className="p-4" style={{ backgroundColor: '#fff', textAlign: 'center' }}>
            <h1 className="fw-normal mb-3 pb-3" style={{ textAlign: 'left' }}>Logga in</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail" className="form-outline mb-4">
                <Form.Control
                  type="email"
                  placeholder="E-post"
                  value={input.email}
                  onChange={handleChange}
                  name="email"
                  className="form-control form-control-lg"
                  style={{ borderRadius: '20px', fontSize: 14 }}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="form-outline mb-4">
                <Form.Control
                  type="password"
                  placeholder="Lösenord"
                  value={input.password}
                  onChange={handleChange}
                  name="password"
                  className="form-control form-control-lg"
                  style={{ borderRadius: '20px', fontSize: 14 }}
                />
              </Form.Group>

              <div className="text-center pt-1 mb-4 pb-1">
                <Button
                  type="submit"
                  className="btn btn-secondary btn-lg btn-block fa-lg gradient-custom-2 mb-3"
                  style={{ backgroundColor: '#4CAF83', color: 'white', borderRadius: '20px', fontSize: 14, border: 'none' }}
                >
                  Logga in
                </Button>
                <div style={{ color: '#4CAF83', fontSize: 14 }}>
                  {resetPasswordRequested && !input.email.trim() ? (
                    <p>Ett återställnings-e-post har skickats till {input.email}.</p>
                  ) : (
                    <Link to="./resetPassword/" onClick={handleResetPassword} style={{ color: 'inherit', textDecoration: 'none' }}>
                      Har du glömt lösenordet?
                    </Link>
                  )}
                </div>
              </div>

              {error && (
                <div className="text-center pt-1 mb-4 pb-1">
                  <p style={{ color: 'red', fontSize: 14 }}>{error}</p>
                </div>
              )}

              <hr style={{ borderColor: 'rgba(0, 0, 0, 0.5)', margin: '5px 0' }} />
              <div className="pt-1 mb-4">
                <Link to="/signup">
                  <button type="button" className="btn btn-secondary btn-lg btn-block fa-lg mt-4" style={{ backgroundColor: '#4CAF83', color: 'white', borderRadius: '20px', fontSize: 14, border: 'none' }}>Skapa nytt konto</button>
                </Link>
              </div>
            </Form>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Login;




