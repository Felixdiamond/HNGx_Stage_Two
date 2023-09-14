document
  .getElementById("personForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    fetch("http://localhost:4000/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nam }),
    })
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("message").textContent =
          "Account has been created successfully!";
      })
      .catch((error) => {
        console.error("Error:", error);
        document.getElementById("message").textContent = "An error occurred.";
      });
  });
