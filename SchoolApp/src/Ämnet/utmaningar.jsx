import React, { useEffect, useState } from 'react';
import { db, auth } from '../firebase/firebase';
import { ref, set, onValue } from 'firebase/database';
import QuizInnehåll from '../innehållet/quizInnehåll';

import { Row, Col, Card, Container } from 'react-bootstrap';
import { FaCheck } from 'react-icons/fa';
import SetChallengesToFirebase from './setChallengesToFirebase';

const cardsData = [
  {
    title: 'Klimatsmart lista',
    text:
      'Gör en lista på hur din skola kan bli mer klimatsmart, dela din lista med elever, lärare och skolledningen.',
    imgSrc: './bilder/bild1.jpg',
  },
  {
    title: 'Anordna en klimattemadag',
    text:
      'Välj ett ämne om klimatet som ni arbetar med under en hel skoldag.',
    imgSrc: './bilder/bild2.jpg',
  },
  {
    title: 'Skapa en tipspromenad',
    text:
      'Gör en tipspromenad med frågor om klimatet. Skriv ner 15 frågor om klimatet och låt dina klasskamrater besvara dem.',
    imgSrc: './bilder/bild3.jpg',
  },
  {
    title: 'Anordna en klädbytardag',
    text:
      'Samla in begagnade kläder och låt någon annan ha nytta av dem.',
    imgSrc: './bilder/bild4.jpg',
  },
  {
    title: 'Skolgårdsodling',
    text:
      'Odla blommor eller grönsaker på skolgården, på en kvadratmeter stor yta och välj gärna växter som främjar pollinerande insekter.',
    imgSrc: './bilder/bild5.png',
  },
  {
    title: 'Vegetarisk mat i skolan',
    text:
      'Påverka skolan att servera mer vegetarisk mat i skolan.',
    imgSrc: './bilder/bild6.jpg',
  },
  {
    title: 'Miljövänliga åtgärder',
    text:
      'Skriv ner 20 saker som är bra för miljön och fundera över vilka du kan använda dig av.',
    imgSrc: './bilder/vecteezy_a-boy-and-a-girl-are-caring-for-plants-around-the-globe_.jpg',
  },
];
const Utmaningar = () => {
  const [user, setUser] = useState(null);
  const [checkedChallenges, setCheckedChallenges] = useState([]);

  const toggleCheckbox = (index) => {
    const updatedChallenges = [...checkedChallenges];

    if (updatedChallenges.includes(index)) {
      const challengeIndex = updatedChallenges.indexOf(index);
      updatedChallenges.splice(challengeIndex, 1);
    } else {
      updatedChallenges.push(index);
    }

    setCheckedChallenges(updatedChallenges);

    if (user) {
      const userChallengesRef = ref(db, `users/${user.uid}/completedChallenges`);
      set(userChallengesRef, updatedChallenges);
    }
  };

  // Effekt för att hämta användarens data när komponenten monteras
useEffect(() => {
  const fetchData = async () => {
    // Lyssna på autentiseringsstatusändringar
    const unsubscribeAuth = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // Uppdatera användarstate om användaren är inloggad
        setUser(authUser);

        // Hämta användarens data, inklusive avklarade utmaningar
        const userRef = ref(db, `users/${authUser.uid}`);
        onValue(userRef, (snapshot) => {
          if (snapshot.exists()) {
            const userData = snapshot.val();
            setCheckedChallenges(userData.completedChallenges || []);
          }
        });
      } else {
        // Om användaren är utloggad, behåll användarstate och avklarade utmaningar
     
       setUser(null);
        setCheckedChallenges([]);
      }
    });

   
  };

  // Anropa fetchData för att starta processen
  fetchData();
}, []); 


  return (
    <>
     
      <div className="m-2 p-2 mt-4">
        <h1 style={{ color: '#4CAF83', fontSize: '34px' }}>KlimatKoll utmaningar</h1>
        <p className="pt-2">Här hittar du utmaningar för att bidra till en bättre miljö! Försök checka av så många du kan.</p>
      </div>

      <Container>
        <Row xs={1} md={2} lg={2} className="justify-content-center">
          {cardsData.map((card, index) => (
            <Col
              key={index}
              md={6}
              style={{
                marginBottom: '30px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: index === cardsData.length - 1 ? 'flex-start' : 'center',
              }}
            >
              <Card
                style={{
                  width: '100%',
                  height: '350px',
                  backgroundColor: '#4CAF83',
                  borderRadius: '10px',
                  border: 'none',
                  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                }}
              >
                <Card.Img variant="top" src={card.imgSrc} style={{ width: '100%', height: '70%', objectFit: 'cover' }} />
                <Card.Body className="d-flex flex-column">
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div
                      style={{
                        border: '2px solid white',
                        borderRadius: '10%',
                        width: '30px',
                        height: '30px',
                        marginRight: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        backgroundColor: checkedChallenges.includes(index) ? '#4CAF83' : 'transparent',
                      }}
                      onClick={() => toggleCheckbox(index)}
                    >
                      {checkedChallenges.includes(index) && <FaCheck color="white" />}
                    </div>
                    <Card.Title as="h3" style={{ fontSize: '16px', color: 'white' }}>
                      {card.title}
                    </Card.Title>
                  </div>
                  <Card.Text style={{ color: 'white', flex: '1', fontSize: '14px' }}>{card.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <QuizInnehåll />
      <SetChallengesToFirebase userId={user?.uid} challenges={checkedChallenges} />
    </>
  );
};

export default Utmaningar;
