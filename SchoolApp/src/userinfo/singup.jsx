import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Row, Col, Form, Button } from 'react-bootstrap';

const SignUp = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const [input, setInput] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleChange = ({ target }) => {
    setInput({
      ...input,
      [target.name]: target.value,
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.password !== input.confirmPassword) {
      return setError("Passwords don't match");
    }

    try {
      await createUserWithEmailAndPassword(auth, input.email, input.password);
      setInput({
        email: '',
        password: '',
        confirmPassword: ''
      });
      navigate('/');
    } catch (err) {
      console.error("Firebase Error:", err);

      if (err.code === "auth/weak-password") {
        setError("Lösenordet är för svagt");
      } else if (err.code === "auth/email-already-in-use") {
        setError("E-postadressen används redan");
      } else {
        setError(err.message);
      }
    }
  };
  

  return (
    <section className="vh-100 ">
      <div className="container-fluid">
        <Row>
          <Col md={8} style={{ backgroundColor: '#4CAF83', textAlign: 'center' }}>
            <img
              src="bilder/logo-to-klimatkoll.png"
              alt="Logo"
              style={{ maxWidth: '55%', maxHeight: '60%' }}
            />
            <p style={{ color: 'white', fontSize: 20 }}>
              Hos KlimatKoll kan du lära dig om <br></br>klimatförändringarna och testa dina kunskaper i vårt
              quiz!
            </p>
            <img src="./bilder/6776431.png" alt="klimatkoll bild" style={{ width: '45%' }} />
          </Col>
          <Col md={4} className="p-4" style={{ backgroundColor: '#fff', textAlign: 'center' }}>
            <h1 className="fw-normal mb-3 pb-3" style={{ textAlign: 'left' }}>Sign Up</h1>
            <form onSubmit={handleSubmit}>
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

              <Form.Group controlId="confirmPassword" className="form-outline mb-4">
                <Form.Control
                  type="password"
                  placeholder="Bekräfta lösenord"
                  value={input.confirmPassword}
                  onChange={handleChange}
                  name="confirmPassword"
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
                  Sign Up
                </Button>
                
              </div>
              
            </form>
              {/* Visa felmeddelande om det finns ett */}
              {error && (
              <div className="text-center pt-1 mb-4 pb-1">
                <p style={{ color: 'red', fontSize: 14 }}>{error}</p>
              </div>)}
              
            <p>
              Redan en användare? <Link to="/login" style={{ color: 'inherit' }}>Logga in</Link>
            </p>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default SignUp;











