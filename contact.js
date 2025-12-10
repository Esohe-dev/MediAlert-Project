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
      status.innerHTML = "We'll get back to you shortly!";
      form.reset();
      closesuccessmsg();
      return;
    }

    let result;
    try {
      result = await response.json();
    } catch {
      // Not JSON
      status.innerHTML = "Oops! There was a problem submitting, try again";
      closeerror();
      return;
    }

    if (result.errors) {
      status.innerHTML = result.errors.map(e => e.message).join(", ");
    } else {
      status.innerHTML = "Oops! There was a problem submitting, try again";
      closeerror();
    }

  } catch (error) {
    status.innerHTML = "Oops! There was a problem submitting, try again";
    closeerror();
  }
}

form.addEventListener("submit", handleSubmit);

function closesuccessmsg() {
  setTimeout(() => {
    document.querySelector("#errorMsg").innerHTML = "";
  }, 2000);
}

function closeerror() {
  setTimeout(() => {
    document.querySelector("#errorMsg").innerHTML = "";
  }, 3000);
}
