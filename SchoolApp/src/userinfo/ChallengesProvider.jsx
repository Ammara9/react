import React, { createContext, useContext, useState, useEffect } from 'react';
import { db, auth } from '../firebase/firebase';
import { ref, get, set } from 'firebase/database';

// Skapa en kontext för utmaningar
const ChallengesContext = createContext();

// Skapa en komponent som kommer att fungera som en provider för utmaningar
export const ChallengesProvider = ({ children }) => {
  // Tillstånd för klickade utmaningar
  const [checkedChallenges, setCheckedChallenges] = useState([]);

  // Effekt som körs när komponenten monteras
  useEffect(() => {
    // Hämta användarens ID från autentiseringskontexten
    const userId = auth.currentUser?.uid;

    if (userId) {
      // Referens till utmaningar i användarens databas
      const userChallengesRef = ref(db, `users/${userId}/checkedChallenges`);

      // Hämta klickade utmaningar från databasen
      get(userChallengesRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            // Uppdatera lokalt tillstånd med klickade utmaningar
            setCheckedChallenges(snapshot.val());
          }
        })
        .catch((error) => {
          console.error('Error fetching checked challenges:', error);
        });
    }
  }, []); // Tom beroendedeklaration för att det här ska köras bara vid montering

  // Effekt för att hantera återhämtning av klickade utmaningar vid inloggning
  useEffect(() => {
    // Funktion som körs när användaren loggar in
    const handleUserLogin = (user) => {
      const userId = user?.uid;

      if (userId) {
        // Referens till utmaningar i användarens databas
        const userChallengesRef = ref(db, `users/${userId}/checkedChallenges`);

        // Hämta klickade utmaningar från databasen
        get(userChallengesRef)
          .then((snapshot) => {
            if (snapshot.exists()) {
              // Uppdatera lokalt tillstånd med klickade utmaningar
              setCheckedChallenges(snapshot.val());
            }
          })
          .catch((error) => {
            console.error('Error fetching checked challenges:', error);
          });
      }
    };

    // Lyssna på autentiseringsförändringar och återhämta utmaningar vid inloggning
    const unsubscribeFromAuth = auth.onAuthStateChanged(handleUserLogin);

    // Återhämtning av utmaningar vid inloggning är beroende av autentiseringsförändringar
    return () => {
      unsubscribeFromAuth();
    };
  }, []); // Tom beroendedeklaration för att det här ska köras bara vid montering

  // Funktion för att hantera klick på en utmaning
  const toggleCheckbox = (index) => {
    // Kopiera den aktuella listan över klickade utmaningar
    const updatedChallenges = [...checkedChallenges];

    // Om utmaningen redan är markerad som klar, ta bort den från listan
    if (updatedChallenges.includes(index)) {
      const challengeIndex = updatedChallenges.indexOf(index);
      updatedChallenges.splice(challengeIndex, 1);
    } else {
      // Annars lägg till den i listan
      updatedChallenges.push(index);
    }

    // Uppdatera lokalt tillstånd med den nya listan över klickade utmaningar
    setCheckedChallenges(updatedChallenges);

    // Uppdatera Firebase Realtime Database med den nya listan över klickade utmaningar
    const userId = auth.currentUser?.uid;
    if (userId) {
      const userChallengesRef = ref(db, `users/${userId}/checkedChallenges`);
      set(userChallengesRef, updatedChallenges);
    }
  };

  // Tillhandahåll klickade utmaningar och funktionen för att klicka på en utmaning genom kontext
  return (
    <ChallengesContext.Provider value={{ checkedChallenges, toggleCheckbox }}>
      {children}
    </ChallengesContext.Provider>
  );
};

// Anpassad hook för att konsumera utmaningskontexten
export const useChallenges = () => {
  const context = useContext(ChallengesContext);

  // Kasta ett fel om hooken används utanför en ChallengesProvider
  if (!context) {
    throw new Error('useChallenges must be used within a ChallengesProvider');
  }

  return context;
};


