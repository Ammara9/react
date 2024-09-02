import React, { useEffect, useState } from 'react';
import { auth, getUserData } from '../firebase/firebase';

import { storage } from '../firebase/firebase';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Container, Modal, Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

const Profil = () => {
  const [user, setUser] = useState(null);
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        try {
          // Fetch user data
          const userData = await getUserData(authUser.uid);
          setUser(userData);

          // Fetch profile image URL directly from Firebase Storage
          const imageRef = storageRef(storage, `images/${authUser.uid}/profileImage`);
          const downloadUrl = await getDownloadURL(imageRef);
          setUrl(downloadUrl);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      } else {
        setUser(null);
        setUrl('/bilder/persona.icon - kopia.png');
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      setShowModal(true);
    }
  };

  const handleSubmit = async () => {
    try {
      const imageRef = storageRef(storage, `images/${auth.currentUser.uid}/profileImage`);
      await uploadBytes(imageRef, image);

      const downloadUrl = await getDownloadURL(imageRef);

      setUrl(downloadUrl);
      setImage(null);
    } catch (error) {
      console.error('Error handling image submission:', error);
    } finally {
      handleCloseModal();
    }
  };

  const handleCloseModal = () => setShowModal(false);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <>
     
      <Container>
        <div className="m-2 p-2 vh-100">
          <h1 style={{ color: '#4CAF83', fontSize: '34px', padding:'20px' }}>Profil</h1>
          <Row>
            <Col md="6" className="mb-2">
              <div style={{ marginTop: '10px', width: '160px', position: 'relative', }}>
                <img
                  src={url || '/bilder/persona.icon - kopia.png'}
                  alt="Profilbild"
                  loading="lazy"
                  className="rounded-circle border"
                  style={{
                    cursor: 'pointer',
                    border: '5px solid transparent',
                    transition: 'border 0.3s',
                    width: '170px',
                    height: '170px',
                  }}
                  onClick={() => setShowModal(true)}
                  onMouseEnter={(e) => (e.target.style.border = '5px solid #4CAF83')}
                  onMouseLeave={(e) => (e.target.style.border = '5px solid transparent')}
                />

                <span
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#D3D3D3',
                    padding: '5px 10px 5px 10px',
                    borderRadius: '50%',
                    cursor: 'pointer',
                  }}
                  onClick={() => setShowModal(true)}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#B0B0B0';
                    e.target.title = 'Klicka för att ändra din profilbild';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = '#D3D3D3';
                    e.target.title = '';
                  }}
                >
                  <FontAwesomeIcon icon={faCamera} />
                </span>
              </div>
              <Modal show={showModal} onHide={handleCloseModal} >
                <Modal.Header closeButton style={{background:'#4CAF83' }}>
                  <Modal.Title style={{color:'white'}}>Ladda upp en ny bild</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <input type="file" onChange={handleImageChange} accept="image/*" />
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    className="btn btn-secondary btn-lg btn-block fa-lg gradient-custom-2 mb-1"
                    style={{
                      backgroundColor: '#4CAF83',
                      color: 'white',
                      borderRadius: '20px',
                      fontSize: 14,
                      border: 'none',
                    }}
                    variant="secondary"
                    onClick={handleCloseModal}
                  >
                    Avbryt
                  </Button>
                  <Button
                    className="btn btn-secondary btn-lg btn-block fa-lg gradient-custom-2 mb-1"
                    style={{
                      backgroundColor: '#4CAF83',
                      color: 'white',
                      borderRadius: '20px',
                      fontSize: 14,
                      border: 'none',
                    }}
                    onClick={handleSubmit}
                  >
                    Spara
                  </Button>
                </Modal.Footer>
              </Modal>
            </Col>
            <Col md="6">
              {user.email && <p>Din e-post: {user.email}</p>}
              <p>Points: {user.points}</p>
              {/* Här visar vi användarens totala antal klara utmaningar */}
              <p>Du har klarat {user.completedChallenges ? user.completedChallenges.length : 0} utmaningar.</p>

            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Profil;
