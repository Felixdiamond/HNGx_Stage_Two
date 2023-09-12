document
  .getElementById("personForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    if (document.getElementById("email").value == null || "") {
      fetch("http://localhost:4000/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, age }),
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
    } else {
      const email = document.getElementById("email").value;
      fetch("http://localhost:4000/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, age, email }),
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
    }
  });
