document.getElementById("retrieval").addEventListener("click", (e) => {
  e.preventDefault();
  const id = prompt("Enter SL No:");
  console.log(id);

  fetch(`http://127.0.0.1:3000/retrieve/${id}`)
    .then((res) => res.json())
    .then((data) => {
      
      if (data.msg === "failed") console.log("sl no failed!");
      console.log(data.msg);
      document.getElementById("sl_no").value = data.msg.slno;
    })
    .catch((err) => console.log("Error in fetching data"));
});

document.getElementById("sign--out").addEventListener('click', (e) => {
  e.preventDefault();
  localStorage.removeItem("username");
  window.location.href = "/";
})

