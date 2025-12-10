// Import them
import {
  auth,
  sendPasswordResetEmail,
} from "./firebaseConfig.js";  

// Get the saved email
  const email = localStorage.getItem("resetEmail");

// Display it on the page
  const message = document.querySelector("#txt1");

// Display the message if email exists 
if (email && message) {
    message.textContent = `We sent a reset link to ${email}. Please check your inbox.`;
}

// Resend email
const resendemail = document.querySelector("#resend");
const resendmessage = document.querySelector("#resendmessage");

resendemail.addEventListener("click", () => {
if (email) {
   sendPasswordResetEmail(auth, email)
   .then(() => {
     resendmessage.textContent = `Email resent`
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    });
    }
});