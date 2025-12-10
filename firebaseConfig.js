 // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
import { 
  getFirestore, 
  doc, 
  setDoc, 
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js"; 
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAcX3LgqPzpQAv4S5nrE35cdbiwA8CM864",
    authDomain: "techedu-final-project.firebaseapp.com",
    projectId: "techedu-final-project",
    storageBucket: "techedu-final-project.firebasestorage.app",
    messagingSenderId: "894709002264",
    appId: "1:894709002264:web:261986f91ce9eab651536d"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

// Export them
export {
  auth,
  createUserWithEmailAndPassword,
  db,
  signInWithEmailAndPassword,
  setDoc,
  doc,
  sendPasswordResetEmail,
};