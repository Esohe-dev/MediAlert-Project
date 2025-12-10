// Import them
import {
  auth,
  signInWithEmailAndPassword
} from "./firebaseConfig.js";  

// Register
  const loginbtn = document.querySelector("#login");

if (loginbtn) {
  loginbtn.addEventListener("click", (e) => {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
   e.preventDefault();

   signInWithEmailAndPassword (auth, email, password)
   .then(() => {
    // Signed in 
    // Redirect to dashbord or where ever you want it to go
      window.location.href = "home.html";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    });
    document.querySelector("#email").value = "";
    document.querySelector("#password").value = "";
  });
}  