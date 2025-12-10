const signOutBtn = document.querySelector("#signOutBtn");

signOutBtn.addEventListener("click", () => {
  // Clear any stored authentication info
  localStorage.removeItem("authToken"); // if you store login info
  sessionStorage.clear();

  // Redirect user to login page
  window.location.href = "login.html";
});
