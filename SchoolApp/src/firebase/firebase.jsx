// firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, set, get } from 'firebase/database';
import { ref as storageReference, uploadBytes } from 'firebase/storage';  
import { getStorage } from "firebase/storage";
import { getFirestore} from 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyDNDT8dwkhcjXa6FFsN1yw1jkx7J-qTOGQ",
  authDomain: "klimatkoll-app.firebaseapp.com",
  databaseURL: "https://klimatkoll-app-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "klimatkoll-app",
  storageBucket: "klimatkoll-app.appspot.com",
  messagingSenderId: "988857972089",
  appId: "1:988857972089:web:c21a04e3e4556ae5c3eba8",
  measurementId: "G-K8GV0NYYJK"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const authInstance = getAuth(app);
const db = getDatabase(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { analytics, app, authInstance as auth, db, firestore, storageReference as storageRef, uploadBytes };


export function updateUserData(uid, email, points, profileImageUrl, completedChallenges) {
  console.log('Saving completed challenges:', completedChallenges);
  set(ref(db, `users/${uid}`), {
    email,
    points,
    profileImageUrl,
    completedChallenges, // Save completed challenges
  });
}





export const getUserData = (uid) => {
  return get(ref(db, `users/${uid}`)).then((snapshot) => snapshot.val());
};



export { storage };

