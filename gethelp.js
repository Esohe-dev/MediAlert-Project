const form = document.querySelector("#my-form");
  
  async function handleSubmit(event) {
  event.preventDefault();
  const status = document.querySelector("#errorMsg");
  const data = new FormData(event.target);

  try {
    const response = await fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      status.innerHTML = "Thanks for your submission!";
      form.reset();
    } else {
      const result = await response.json();
      if (result.errors) {
        status.innerHTML = result.errors.map(e => e.message).join(", ");
      } else {
        status.innerHTML = "Oops! There was a problem submitting your form";
      }
    }
  } catch (error) {
    status.innerHTML = "Oops! There was a problem submitting your form";
  }
}

form.addEventListener("submit", handleSubmit);