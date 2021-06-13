document.getElementById("sign-in").addEventListener("click", (e) => {
  e.preventDefault();
  const user = document.getElementById("user_s").value;
  const pass = document.getElementById("pass_s").value;
  const data = JSON.stringify({
    username: user,
    password: pass,
  });
  fetch("http://127.0.0.1:3000/sign-in", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data == null) {
        console.log("Could not log in");
        localStorage.removeItem("username");
      } else {
        localStorage.setItem("username", data.username);
        window.location.href = "/form";
      }
    })
    .catch((err) => console.log("Error in logging in"));
});

document.getElementById("sign-up").addEventListener("click", (e) => {
  e.preventDefault();
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;
  const repeat_pass = document.getElementById("repeat-pass").value;
  const name = document.getElementById("name").value;
  if (pass === repeat_pass) {
    const data = JSON.stringify({
      username: user,
      password: pass,
      name: name,
    });

    fetch("http://127.0.0.1:3000/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log("Error in signing up"));
  }
  window.location.href = "/";
});
