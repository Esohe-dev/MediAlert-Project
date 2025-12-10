// Import them
import {
  auth,
  sendPasswordResetEmail,
} from "./firebaseConfig.js";  

// Register
  const resetbtn = document.querySelector("#reset");

if (resetbtn) {
  resetbtn.addEventListener("click", (e) => {
    const email = document.querySelector("#email").value;
   e.preventDefault();

   sendPasswordResetEmail(auth, email)
   .then(() => {
    // Save email for next page
    localStorage.setItem("resetEmail", email);

    // document.querySelector("#email").value = "";

    setTimeout(() => {
    // Redirect to dashbord or where ever you want it to go
      window.location.href = "checkemail.html";
    }, 2000);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    });
  });
}