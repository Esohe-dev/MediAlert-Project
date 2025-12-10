const mobileMenu = document.querySelector("#mobileMenu");
 const menubtn = document.querySelector("#menubtn");

menubtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});
