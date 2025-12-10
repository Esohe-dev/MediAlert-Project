// Import them
import {
  auth,
  db,
  createUserWithEmailAndPassword,
  setDoc,
  doc,
} from "./firebaseConfig.js";  

// Register
  const Registerbtn = document.querySelector("#register");

if (Registerbtn) {
  Registerbtn.addEventListener("click", (e) => {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
   e.preventDefault();

  createUserWithEmailAndPassword(auth, email, password)
   .then(async(userCredential) => {
    // Signed up 
    const user = userCredential.user;
    const userData = {
      uid: user.uid,
      email: user.email
    };
    await setDoc(doc(db, "users", user.uid), userData);
    setTimeout(() => {
      window.location.href = "login.html";
    }, 2000);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    });
  });
}  